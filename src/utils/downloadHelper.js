import { Capacitor, registerPlugin } from '@capacitor/core';
import confetti from 'canvas-confetti';

const NativeDownloader = registerPlugin('NativeDownloader');

/**
 * Converts a Blob to a base64 string (without the data URL prefix)
 */
function blobToBase64(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const res = reader.result;
      if (typeof res === 'string') {
        resolve(res.includes(',') ? res.split(',')[1] : res);
      } else {
        reject(new Error('Failed to convert blob to base64'));
      }
    };
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

/**
 * Ensures we have a Blob instance from either blob or blobUrl
 */
async function ensureBlob(blob, blobUrl) {
  if (blob instanceof Blob) return blob;
  if (blobUrl) {
    const res = await fetch(blobUrl);
    return await res.blob();
  }
  throw new Error('No blob or blobUrl provided for download');
}

import { saveHistoryItem } from './historyStore';

/**
 * Universal file download handler.
 * On native Android: Saves directly into the device's public Downloads/SarkariDoc or Pictures/SarkariDoc folder
 * and triggers a native toast notification.
 * On web browser: Triggers clean anchor download.
 * Automatically saves the completed deliverable into the on-device History store.
 */
export async function downloadFile({ blob, blobUrl, filename, mimeType, historyMeta }) {
  const isNative = typeof window !== 'undefined' && Capacitor.isNativePlatform();
  let finalBlob = null;
  try {
    finalBlob = await ensureBlob(blob, blobUrl);
  } catch (err) {
    console.warn('Could not resolve final blob for download:', err);
  }

  const detectedMime = mimeType || finalBlob?.type || (filename.endsWith('.pdf') ? 'application/pdf' : 'image/jpeg');

  // Automatically record in on-device history store (non-blocking)
  if (finalBlob) {
    saveHistoryItem({
      tool: historyMeta?.tool || (filename.endsWith('.pdf') ? 'pdf' : 'photo'),
      toolName: historyMeta?.toolName || (filename.endsWith('.pdf') ? 'PDF Document' : 'Photo / Signature'),
      fileName: filename,
      fileSize: finalBlob.size,
      mimeType: detectedMime,
      blob: finalBlob,
      presetName: historyMeta?.presetName || '',
    }).catch((e) => console.debug('History save notice:', e));
  }

  if (isNative && finalBlob) {
    try {
      const base64 = await blobToBase64(finalBlob);

      await NativeDownloader.saveToDownloads({
        base64,
        fileName: filename,
        mimeType: detectedMime,
      });

      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#2563eb', '#38bdf8', '#34d399', '#f59e0b'],
      });

      return { success: true };
    } catch (err) {
      console.warn('NativeDownloader error, attempting web anchor fallback:', err);
    }
  }

  // Web fallback
  let localUrl = blobUrl;
  let shouldRevoke = false;
  if (!localUrl && finalBlob instanceof Blob) {
    localUrl = URL.createObjectURL(finalBlob);
    shouldRevoke = true;
  }

  if (localUrl) {
    const link = document.createElement('a');
    link.href = localUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    if (shouldRevoke) {
      setTimeout(() => URL.revokeObjectURL(localUrl), 1500);
    }

    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#2563eb', '#38bdf8', '#34d399', '#f59e0b'],
    });

    return { success: true };
  }
}

/**
 * Share the generated file via Android native share sheet or Web Share API
 */
export async function shareFileNative({ blob, blobUrl, filename, mimeType }) {
  const isNative = typeof window !== 'undefined' && Capacitor.isNativePlatform();

  if (isNative) {
    try {
      const finalBlob = await ensureBlob(blob, blobUrl);
      const base64 = await blobToBase64(finalBlob);
      const detectedMime = mimeType || finalBlob.type || (filename.endsWith('.pdf') ? 'application/pdf' : 'image/jpeg');

      await NativeDownloader.shareFile({
        base64,
        fileName: filename,
        mimeType: detectedMime,
      });
      return { success: true };
    } catch (err) {
      console.warn('Native shareFile error:', err);
    }
  }

  // Web Share fallback
  try {
    const finalBlob = await ensureBlob(blob, blobUrl);
    const file = new File([finalBlob], filename, { type: finalBlob.type || mimeType });
    if (navigator.canShare && navigator.canShare({ files: [file] })) {
      await navigator.share({
        files: [file],
        title: filename,
      });
      return { success: true };
    }
  } catch (e) {
    console.debug('Web share file fallback failed, triggering download', e);
  }

  return downloadFile({ blob, blobUrl, filename, mimeType });
}

/**
 * Share the actual Android APK file with friends via WhatsApp/Bluetooth/Telegram
 */
export async function shareAppApk() {
  const isNative = typeof window !== 'undefined' && Capacitor.isNativePlatform();

  if (isNative) {
    try {
      await NativeDownloader.shareAppApk();
      return { success: true };
    } catch (err) {
      console.warn('Could not share APK directly:', err);
      return shareAppLink();
    }
  } else {
    return shareAppLink();
  }
}

/**
 * Share the official website link
 */
export async function shareAppLink() {
  const shareData = {
    title: 'SarkariDoc Studio — Offline Govt Exam Photo & PDF Suite',
    text: 'Resize exam photos & compress PDFs under 200KB offline on your phone! 100% Free & Private on-device tool. Check it out: https://sarkaridoc-studio.document-resizer.workers.dev',
    url: 'https://sarkaridoc-studio.document-resizer.workers.dev',
  };

  if (navigator.share) {
    try {
      await navigator.share(shareData);
      return { success: true };
    } catch (err) {
      if (err.name !== 'AbortError') {
        console.debug('Share aborted or failed', err);
      }
    }
  } else {
    try {
      await navigator.clipboard.writeText('https://sarkaridoc-studio.document-resizer.workers.dev');
      alert('App website link copied to clipboard!\nhttps://sarkaridoc-studio.document-resizer.workers.dev');
      return { success: true };
    } catch {
      alert('Official website link: https://sarkaridoc-studio.document-resizer.workers.dev');
    }
  }
}
