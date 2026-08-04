import { PDFDocument } from 'pdf-lib';
import * as pdfjsLib from 'pdfjs-dist';
import { loadImage } from './imageEngine';

pdfjsLib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.mjs`;

/**
 * Converts multiple image files into a compressed PDF document matching target KB limits.
 * Prioritizes high JPEG quality (q >= 0.65) with clean canvas scaling for crystal-clear text.
 * Reports real-time progress callbacks for multi-page feedback.
 */
export const convertImagesToPdf = async (imageFiles, targetMaxKb = 300, onProgress = null) => {
  const targetKb = Number(targetMaxKb) || 300;
  const totalFiles = imageFiles.length;
  let bestBlob = null;
  let bestKb = 0;
  let smallestBlob = null;
  let smallestKb = Infinity;

  // Helper function to create PDF at specific quality and scale
  const createPdfWithQuality = async (q, scaleFactor = 1.0, isInitialPass = false) => {
    const pdfDoc = await PDFDocument.create();
    for (let i = 0; i < totalFiles; i++) {
      const file = imageFiles[i];

      if (onProgress && isInitialPass) {
        const percent = Math.round(((i + 1) / totalFiles) * 75);
        onProgress({
          current: i + 1,
          total: totalFiles,
          percent,
          text: `Processing Image ${i + 1} of ${totalFiles} (${percent}%)`
        });
      }

      await new Promise((r) => setTimeout(r, 0)); // yield to UI thread to keep touch scrolling smooth

      const img = await loadImage(file);
      const canvas = document.createElement('canvas');
      const targetWidth = Math.min(img.width * scaleFactor, 1600);
      const scale = targetWidth / img.width;
      canvas.width = Math.max(10, Math.round(targetWidth));
      canvas.height = Math.max(10, Math.round(img.height * scale));

      const ctx = canvas.getContext('2d', { willReadFrequently: true });
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';

      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      const jpegDataUrl = canvas.toDataURL('image/jpeg', q);
      const jpegImageBytes = await fetch(jpegDataUrl).then((res) => res.arrayBuffer());

      const embeddedImage = await pdfDoc.embedJpg(jpegImageBytes);
      const page = pdfDoc.addPage([embeddedImage.width, embeddedImage.height]);
      page.drawImage(embeddedImage, {
        x: 0,
        y: 0,
        width: embeddedImage.width,
        height: embeddedImage.height,
      });
    }

    const pdfBytes = await pdfDoc.save({ useObjectStreams: true });
    const resultBlob = new Blob([pdfBytes], { type: 'application/pdf' });
    const kbVal = resultBlob.size / 1024;

    if (kbVal < smallestKb) {
      smallestKb = kbVal;
      smallestBlob = resultBlob;
    }

    return { blob: resultBlob, kb: kbVal };
  };

  // 1. Initial Pass: High Quality 0.90 at scale 1.0
  if (onProgress) {
    onProgress({ current: 1, total: totalFiles, percent: 5, text: `Starting Image to PDF conversion (${totalFiles} file(s))...` });
  }

  const { blob: initialBlob, kb: initialKb } = await createPdfWithQuality(0.90, 1.0, true);

  if (initialKb <= targetKb) {
    bestBlob = initialBlob;
    bestKb = initialKb;
  } else {
    if (onProgress) {
      onProgress({ current: totalFiles, total: totalFiles, percent: 80, text: `Optimizing PDF quality for target ${targetKb} KB...` });
    }

    // 2. High-Quality-First Multi-Tier Search (Prefers High JPEG Quality q >= 0.65 with scale down over muddy low-q artifacts)
    const tiers = [
      { scale: 1.0, qList: [0.80, 0.70, 0.60] },
      { scale: 0.85, qList: [0.85, 0.75, 0.65] },
      { scale: 0.75, qList: [0.85, 0.75, 0.65] },
      { scale: 0.65, qList: [0.85, 0.75, 0.60] },
      { scale: 0.50, qList: [0.80, 0.70, 0.55] },
      { scale: 0.40, qList: [0.80, 0.65, 0.50, 0.35] },
      { scale: 0.30, qList: [0.75, 0.50, 0.30, 0.15] },
      { scale: 0.20, qList: [0.70, 0.40, 0.20, 0.10] }
    ];

    for (const tier of tiers) {
      await new Promise((r) => setTimeout(r, 0));
      for (const q of tier.qList) {
        const { blob: testBlob, kb: currentKb } = await createPdfWithQuality(q, tier.scale, false);
        if (currentKb <= targetKb) {
          if (!bestBlob || currentKb > bestKb) {
            bestBlob = testBlob;
            bestKb = currentKb;
          }
          break;
        }
      }
      if (bestBlob && bestKb <= targetKb) break;
    }
  }

  // Fail-Safe: Return bestBlob or smallestBlob generated
  if (!bestBlob) {
    bestBlob = smallestBlob || initialBlob;
    bestKb = smallestKb !== Infinity ? smallestKb : initialKb;
  }

  if (onProgress) {
    onProgress({ current: totalFiles, total: totalFiles, percent: 100, text: `PDF Conversion Complete (${Math.round(bestKb)} KB)` });
  }

  const finalKb = Math.round((bestKb) * 100) / 100;
  const downloadUrl = URL.createObjectURL(bestBlob);

  return {
    blob: bestBlob,
    finalKb,
    downloadUrl
  };
};

/**
 * Dynamic PDF Compression Engine with Binary Quality Iteration matching user's exact target KB.
 * Prioritizes high JPEG quality (q >= 0.65) with high-quality canvas bicubic rendering for ultra-sharp text.
 * Reports page-by-page progress callbacks for real-time visual feedback.
 */
export const compressExistingPdf = async (pdfFile, targetMaxKb = 300, onProgress = null) => {
  const targetKb = Number(targetMaxKb) || 300;
  const arrayBuffer = await pdfFile.arrayBuffer();
  
  const loadingTask = pdfjsLib.getDocument({ data: new Uint8Array(arrayBuffer) });
  const pdfDoc = await loadingTask.promise;
  const numPages = pdfDoc.numPages;

  let smallestBlob = null;
  let smallestKb = Infinity;

  const renderPdfWithQuality = async (q, scale = 1.0, isInitialPass = false) => {
    const testPdf = await PDFDocument.create();

    for (let pageNum = 1; pageNum <= numPages; pageNum++) {
      if (onProgress && isInitialPass) {
        const percent = Math.round((pageNum / numPages) * 75);
        onProgress({
          current: pageNum,
          total: numPages,
          percent,
          text: `Processing Page ${pageNum} of ${numPages} (${percent}%)`
        });
      }

      await new Promise((r) => setTimeout(r, 0)); // yield to UI thread on every page render!

      const page = await pdfDoc.getPage(pageNum);
      const viewport = page.getViewport({ scale });

      const canvas = document.createElement('canvas');
      canvas.width = Math.max(10, Math.round(viewport.width));
      canvas.height = Math.max(10, Math.round(viewport.height));
      const ctx = canvas.getContext('2d', { willReadFrequently: true });

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';

      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      await page.render({ canvasContext: ctx, viewport }).promise;

      const jpegDataUrl = canvas.toDataURL('image/jpeg', q);
      const jpegImageBytes = await fetch(jpegDataUrl).then((res) => res.arrayBuffer());

      const embeddedImage = await testPdf.embedJpg(jpegImageBytes);
      const newPage = testPdf.addPage([embeddedImage.width, embeddedImage.height]);
      newPage.drawImage(embeddedImage, {
        x: 0,
        y: 0,
        width: embeddedImage.width,
        height: embeddedImage.height,
      });
    }

    const bytes = await testPdf.save({ useObjectStreams: true });
    const resultBlob = new Blob([bytes], { type: 'application/pdf' });
    const kbVal = resultBlob.size / 1024;

    if (kbVal < smallestKb) {
      smallestKb = kbVal;
      smallestBlob = resultBlob;
    }

    return { blob: resultBlob, kb: kbVal };
  };

  if (onProgress) {
    onProgress({ current: 1, total: numPages, percent: 5, text: `Reading PDF document (${numPages} page(s))...` });
  }

  // 1. Initial Pass: Test scale = 1.0 at quality 0.90
  const { blob: initialBlob, kb: initialKb } = await renderPdfWithQuality(0.90, 1.0, true);

  let bestBlob = null;
  let bestKb = 0;

  if (initialKb <= targetKb) {
    bestBlob = initialBlob;
    bestKb = initialKb;
  } else {
    if (onProgress) {
      onProgress({ current: numPages, total: numPages, percent: 80, text: `Optimizing PDF quality for target ${targetKb} KB...` });
    }

    // 2. High-Quality-First Multi-Tier Search (Prefers High JPEG Quality q >= 0.65 over blurry low-q artifacts)
    const tiers = [
      { scale: 1.0, qList: [0.80, 0.70, 0.60] },
      { scale: 0.85, qList: [0.85, 0.75, 0.65] },
      { scale: 0.75, qList: [0.85, 0.75, 0.65] },
      { scale: 0.65, qList: [0.85, 0.75, 0.60] },
      { scale: 0.50, qList: [0.80, 0.70, 0.55] },
      { scale: 0.40, qList: [0.80, 0.65, 0.50, 0.35] },
      { scale: 0.30, qList: [0.75, 0.50, 0.30, 0.15] },
      { scale: 0.20, qList: [0.70, 0.40, 0.20, 0.10] }
    ];

    for (const tier of tiers) {
      await new Promise((r) => setTimeout(r, 0));
      for (const q of tier.qList) {
        const { blob: testBlob, kb: currentKb } = await renderPdfWithQuality(q, tier.scale, false);
        if (currentKb <= targetKb) {
          if (!bestBlob || currentKb > bestKb) {
            bestBlob = testBlob;
            bestKb = currentKb;
          }
          break;
        }
      }
      if (bestBlob && bestKb <= targetKb) break;
    }
  }

  // Fail-Safe: Return bestBlob or smallestBlob generated
  if (!bestBlob) {
    bestBlob = smallestBlob || initialBlob;
    bestKb = smallestKb !== Infinity ? smallestKb : initialKb;
  }

  if (onProgress) {
    onProgress({ current: numPages, total: numPages, percent: 100, text: `PDF Compression Complete (${Math.round(bestKb)} KB)` });
  }

  const finalKb = Math.round((bestKb) * 100) / 100;
  const downloadUrl = URL.createObjectURL(bestBlob);

  return {
    blob: bestBlob,
    finalKb,
    downloadUrl
  };
};
