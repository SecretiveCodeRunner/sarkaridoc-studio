import { PDFDocument } from 'pdf-lib';
import * as pdfjsLib from 'pdfjs-dist';
import { loadImage } from './imageEngine';

pdfjsLib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.mjs`;

/**
 * Converts multiple image files into a compressed PDF document matching target KB limits.
 * Stays as close as possible BELOW targetMaxKb without over-compressing.
 * Reports real-time progress callbacks for multi-page feedback.
 */
export const convertImagesToPdf = async (imageFiles, targetMaxKb = 300, onProgress = null) => {
  const targetKb = Number(targetMaxKb) || 300;
  const totalFiles = imageFiles.length;
  let lowQ = 0.10;
  let highQ = 0.95;
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
        const percent = Math.round(((i + 1) / totalFiles) * 80);
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
      canvas.width = targetWidth;
      canvas.height = img.height * scale;

      const ctx = canvas.getContext('2d');
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

  // Test full quality 0.95 first
  if (onProgress) {
    onProgress({ current: 1, total: totalFiles, percent: 10, text: `Starting Image conversion (1/${totalFiles})...` });
  }

  const { blob: maxQualityBlob, kb: maxQualityKb } = await createPdfWithQuality(0.95, 1.0, true);

  if (maxQualityKb <= targetKb) {
    bestBlob = maxQualityBlob;
    bestKb = maxQualityKb;
  } else {
    if (onProgress) {
      onProgress({ current: totalFiles, total: totalFiles, percent: 85, text: `Optimizing PDF file size to target ${targetKb} KB...` });
    }

    // Binary search quality in [0.10, 0.95]
    for (let step = 0; step < 6; step++) {
      await new Promise((r) => setTimeout(r, 0));
      const midQ = (lowQ + highQ) / 2;
      const { blob: testBlob, kb: currentKb } = await createPdfWithQuality(midQ, 1.0, false);

      if (currentKb <= targetKb) {
        if (!bestBlob || currentKb > bestKb) {
          bestBlob = testBlob;
          bestKb = currentKb;
        }
        lowQ = midQ;
      } else {
        highQ = midQ;
      }
    }

    // Fallback: scale resolution down if even lowest quality exceeds target
    if (!bestBlob) {
      let scale = 0.8;
      while (scale >= 0.2) {
        await new Promise((r) => setTimeout(r, 0));
        const { blob: testBlob, kb: currentKb } = await createPdfWithQuality(0.4, scale, false);
        if (currentKb <= targetKb) {
          bestBlob = testBlob;
          bestKb = currentKb;
          break;
        }
        scale -= 0.2;
      }
    }
  }

  // Never return bloated max blob if target size couldn't be met; return smallest generated blob!
  if (!bestBlob) {
    bestBlob = smallestBlob || maxQualityBlob;
    bestKb = smallestKb !== Infinity ? smallestKb : maxQualityKb;
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
 * Stays as close as possible BELOW targetMaxKb without over-compressing.
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
        const percent = Math.round((pageNum / numPages) * 80);
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
      canvas.width = viewport.width;
      canvas.height = viewport.height;
      const ctx = canvas.getContext('2d');

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
    onProgress({ current: 1, total: numPages, percent: 10, text: `Reading PDF document (${numPages} pages)...` });
  }

  // Test full quality first
  const { blob: initialBlob, kb: initialKb } = await renderPdfWithQuality(0.92, 1.2, true);

  let bestBlob = null;
  let bestKb = 0;

  if (initialKb <= targetKb) {
    bestBlob = initialBlob;
    bestKb = initialKb;
  } else {
    if (onProgress) {
      onProgress({ current: numPages, total: numPages, percent: 85, text: `Optimizing PDF quality for target ${targetKb} KB...` });
    }

    let lowQ = 0.10;
    let highQ = 0.90;

    for (let step = 0; step < 6; step++) {
      await new Promise((r) => setTimeout(r, 0));
      const midQ = (lowQ + highQ) / 2;
      const { blob: testBlob, kb: currentKb } = await renderPdfWithQuality(midQ, 1.0, false);

      if (currentKb <= targetKb) {
        if (!bestBlob || currentKb > bestKb) {
          bestBlob = testBlob;
          bestKb = currentKb;
        }
        lowQ = midQ;
      } else {
        highQ = midQ;
      }
    }

    if (!bestBlob) {
      let scale = 0.75;
      while (scale >= 0.25) {
        await new Promise((r) => setTimeout(r, 0));
        const { blob: testBlob, kb: currentKb } = await renderPdfWithQuality(0.4, scale, false);
        if (currentKb <= targetKb) {
          bestBlob = testBlob;
          bestKb = currentKb;
          break;
        }
        scale -= 0.25;
      }
    }
  }

  // Fallback to smallest generated blob if target size could not be met
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
