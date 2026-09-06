import { PDFDocument } from 'pdf-lib';
import * as pdfjsLib from 'pdfjs-dist';
import { loadImage } from './imageEngine';

pdfjsLib.GlobalWorkerOptions.workerSrc = typeof window !== 'undefined'
  ? new URL('./pdf.worker.min.mjs', window.location.href).href
  : `https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.mjs`;

/**
 * Quality & DPI Tiers for PDF Compression
 * Ordered strictly from HIGHEST quality (180+ DPI print) to LOWEST size (<50 KB).
 * Binary search finds the highest possible quality tier that fits strictly within user's target KB.
 */
export const PDF_QUALITY_TIERS = [
  // Ultra High Quality (Target: 800 KB - 1.5 MB)
  { scale: 2.5, q: 0.88, label: 'Ultra High (180 DPI)' },
  { scale: 2.2, q: 0.86, label: 'Very High (160 DPI)' },
  { scale: 2.0, q: 0.85, label: 'High (144 DPI)' },
  { scale: 1.8, q: 0.84, label: 'High (130 DPI)' },
  
  // Medium-High Crisp Quality (Target: 400 KB - 700 KB)
  { scale: 1.6, q: 0.82, label: 'Crisp (115 DPI)' },
  { scale: 1.4, q: 0.80, label: 'Crisp (100 DPI)' },
  { scale: 1.25, q: 0.80, label: 'Standard (90 DPI)' },
  { scale: 1.15, q: 0.80, label: 'Standard (82 DPI)' },

  // Standard Web / 72 DPI (Target: 150 KB - 300 KB)
  { scale: 1.0, q: 0.85, label: 'Screen (72 DPI)' },
  { scale: 1.0, q: 0.75, label: 'Screen (72 DPI)' },
  { scale: 0.9, q: 0.75, label: 'Compact (65 DPI)' },
  { scale: 0.8, q: 0.70, label: 'Compact (58 DPI)' },

  // Low Size (Target: 50 KB - 150 KB)
  { scale: 0.7, q: 0.65, label: 'Small (50 DPI)' },
  { scale: 0.6, q: 0.60, label: 'Small (43 DPI)' },
  { scale: 0.5, q: 0.55, label: 'Economy (36 DPI)' },
  { scale: 0.4, q: 0.50, label: 'Economy (29 DPI)' },
  { scale: 0.3, q: 0.45, label: 'Minimum (22 DPI)' },
  { scale: 0.2, q: 0.40, label: 'Ultra Compact' }
];

/**
 * Helper to render specific PDF pages at given scale & JPEG quality
 */
const renderPdfPages = async (pdfDoc, pageNumbers, scale, q, onProgress = null, progressStart = 0, progressWeight = 100) => {
  const testPdf = await PDFDocument.create();
  const total = pageNumbers.length;

  for (let i = 0; i < total; i++) {
    const pageNum = pageNumbers[i];
    if (onProgress) {
      const p = Math.round(progressStart + ((i + 1) / total) * progressWeight);
      onProgress({
        current: i + 1,
        total,
        percent: Math.min(98, p),
        text: `Compressing Page ${pageNum} of ${pdfDoc.numPages} (${Math.round(scale * 72)} DPI)...`
      });
    }

    await new Promise((r) => setTimeout(r, 0)); // yield to browser UI thread

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
  return { blob: resultBlob, kb: kbVal };
};

/**
 * Dynamic PDF Compression Engine with Binary Quality Scaling.
 * Dynamically maximizes DPI and resolution according to the user's allowed target KB.
 * Higher target KB (e.g. 500 KB, 1 MB) yields significantly sharper, high-res text.
 */
export const compressExistingPdf = async (pdfFile, targetMaxKb = 300, onProgress = null) => {
  const targetKb = Number(targetMaxKb) || 300;
  const arrayBuffer = await pdfFile.arrayBuffer();
  
  const loadingTask = pdfjsLib.getDocument({ data: new Uint8Array(arrayBuffer) });
  const pdfDoc = await loadingTask.promise;
  const numPages = pdfDoc.numPages;

  if (onProgress) {
    onProgress({ current: 1, total: numPages, percent: 5, text: `Analyzing PDF (${numPages} page(s))...` });
  }

  let bestFullResult = null;

  if (numPages === 1) {
    // Single page document: binary search directly over candidate tiers
    let low = 0;
    let high = PDF_QUALITY_TIERS.length - 1;

    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      const tier = PDF_QUALITY_TIERS[mid];
      const res = await renderPdfPages(pdfDoc, [1], tier.scale, tier.q, onProgress, 10, 85);

      if (res.kb <= targetKb) {
        bestFullResult = res;
        // Try higher quality (lower index in tier array)
        high = mid - 1;
      } else {
        // Exceeds targetKb: drop quality (higher index)
        low = mid + 1;
      }
    }

    // Fail-safe: if even lowest tier exceeded, use it
    if (!bestFullResult) {
      bestFullResult = await renderPdfPages(pdfDoc, [1], PDF_QUALITY_TIERS[PDF_QUALITY_TIERS.length - 1].scale, 0.40, onProgress);
    }
  } else {
    // Multi-page document: test page 1 first to determine optimal tier quickly
    const targetKbPerPage = Math.max(12, (targetKb - 10) / numPages);
    let low = 0;
    let high = PDF_QUALITY_TIERS.length - 1;
    let bestTierIdx = high;

    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      const tier = PDF_QUALITY_TIERS[mid];
      const page1Res = await renderPdfPages(pdfDoc, [1], tier.scale, tier.q);

      if (page1Res.kb <= targetKbPerPage) {
        bestTierIdx = mid;
        high = mid - 1; // can we get even higher quality?
      } else {
        low = mid + 1; // need lower quality
      }
    }

    // Render all pages with the optimal tier found
    const allPageNums = Array.from({ length: numPages }, (_, i) => i + 1);
    const chosenTier = PDF_QUALITY_TIERS[bestTierIdx];
    bestFullResult = await renderPdfPages(pdfDoc, allPageNums, chosenTier.scale, chosenTier.q, onProgress, 20, 75);

    // If total full PDF exceeds targetKb, step down tiers until it strictly fits
    let stepIdx = bestTierIdx;
    while (bestFullResult.kb > targetKb && stepIdx < PDF_QUALITY_TIERS.length - 1) {
      stepIdx++;
      const lowerTier = PDF_QUALITY_TIERS[stepIdx];
      bestFullResult = await renderPdfPages(pdfDoc, allPageNums, lowerTier.scale, lowerTier.q, onProgress, 50, 45);
    }
  }

  if (onProgress) {
    onProgress({ current: numPages, total: numPages, percent: 100, text: `PDF Compression Complete (${Math.round(bestFullResult.kb)} KB)` });
  }

  const finalKb = Math.round(bestFullResult.kb * 100) / 100;
  const downloadUrl = URL.createObjectURL(bestFullResult.blob);

  return {
    blob: bestFullResult.blob,
    finalKb,
    downloadUrl
  };
};

/**
 * Converts multiple image files into a compressed PDF document matching target KB limits.
 * Scales resolution up to 2600px and JPEG quality up to 0.88 when larger target budgets allow.
 */
export const convertImagesToPdf = async (imageFiles, targetMaxKb = 300, onProgress = null, options = {}) => {
  const targetKb = Number(targetMaxKb) || 300;
  const totalFiles = imageFiles.length;
  const { pageSize = 'a4', margin = 15, orientation = 'auto' } = options;

  const IMAGE_PDF_TIERS = [
    { maxDim: 2600, q: 0.88 },
    { maxDim: 2200, q: 0.85 },
    { maxDim: 1920, q: 0.82 },
    { maxDim: 1600, q: 0.80 },
    { maxDim: 1400, q: 0.80 },
    { maxDim: 1200, q: 0.75 },
    { maxDim: 1000, q: 0.72 },
    { maxDim: 800, q: 0.68 },
    { maxDim: 600, q: 0.60 },
    { maxDim: 450, q: 0.50 },
    { maxDim: 300, q: 0.40 }
  ];

  // A4 dimensions in points (72 points per inch)
  const A4_PORTRAIT = [595.28, 841.89];
  const A4_LANDSCAPE = [841.89, 595.28];

  const createPdfWithTier = async (tier, isInitialPass = false) => {
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

      await new Promise((r) => setTimeout(r, 0));

      const img = await loadImage(file);
      const canvas = document.createElement('canvas');
      const scale = Math.min(1.0, tier.maxDim / Math.max(img.width, img.height));
      canvas.width = Math.max(10, Math.round(img.width * scale));
      canvas.height = Math.max(10, Math.round(img.height * scale));

      const ctx = canvas.getContext('2d', { willReadFrequently: true });
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';

      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      const jpegDataUrl = canvas.toDataURL('image/jpeg', tier.q);
      const jpegImageBytes = await fetch(jpegDataUrl).then((res) => res.arrayBuffer());

      const embeddedImage = await pdfDoc.embedJpg(jpegImageBytes);

      if (pageSize === 'a4') {
        const isLandscape = orientation === 'landscape' || (orientation === 'auto' && img.width > img.height);
        const [pageW, pageH] = isLandscape ? A4_LANDSCAPE : A4_PORTRAIT;
        const page = pdfDoc.addPage([pageW, pageH]);

        const availW = Math.max(10, pageW - 2 * margin);
        const availH = Math.max(10, pageH - 2 * margin);
        const fitScale = Math.min(availW / embeddedImage.width, availH / embeddedImage.height);
        const drawW = embeddedImage.width * fitScale;
        const drawH = embeddedImage.height * fitScale;
        const drawX = margin + (availW - drawW) / 2;
        const drawY = margin + (availH - drawH) / 2;

        page.drawImage(embeddedImage, {
          x: drawX,
          y: drawY,
          width: drawW,
          height: drawH,
        });
      } else {
        // 'fit' page mode (exact image dimensions)
        const page = pdfDoc.addPage([embeddedImage.width, embeddedImage.height]);
        page.drawImage(embeddedImage, {
          x: 0,
          y: 0,
          width: embeddedImage.width,
          height: embeddedImage.height,
        });
      }
    }

    const pdfBytes = await pdfDoc.save({ useObjectStreams: true });
    const resultBlob = new Blob([pdfBytes], { type: 'application/pdf' });
    const kbVal = resultBlob.size / 1024;
    return { blob: resultBlob, kb: kbVal };
  };

  if (onProgress) {
    onProgress({ current: 1, total: totalFiles, percent: 5, text: `Analyzing images (${totalFiles} file(s))...` });
  }

  // If no target KB limit is specified (Max Quality default), compile directly at full crystal-clear resolution
  if (!targetMaxKb || targetMaxKb === 'max' || Number(targetMaxKb) <= 0) {
    const maxResult = await createPdfWithTier({ maxDim: 3200, q: 0.92 }, true);
    if (onProgress) {
      onProgress({ current: totalFiles, total: totalFiles, percent: 100, text: `High Quality PDF Ready! (${Math.round(maxResult.kb)} KB)` });
    }
    return {
      blob: maxResult.blob,
      finalKb: Math.round(maxResult.kb * 100) / 100,
      downloadUrl: URL.createObjectURL(maxResult.blob)
    };
  }

  // Binary search over IMAGE_PDF_TIERS to find highest resolution & quality under targetKb
  let low = 0;
  let high = IMAGE_PDF_TIERS.length - 1;
  let bestResult = null;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const tier = IMAGE_PDF_TIERS[mid];
    const res = await createPdfWithTier(tier, bestResult === null);

    if (res.kb <= targetKb) {
      bestResult = res;
      // Try higher quality (lower index)
      high = mid - 1;
    } else {
      // Exceeds targetKb: drop quality (higher index)
      low = mid + 1;
    }
  }

  if (!bestResult) {
    bestResult = await createPdfWithTier(IMAGE_PDF_TIERS[IMAGE_PDF_TIERS.length - 1]);
  }

  if (onProgress) {
    onProgress({ current: totalFiles, total: totalFiles, percent: 100, text: `Complete! (${Math.round(bestResult.kb)} KB)` });
  }

  const finalKb = Math.round(bestResult.kb * 100) / 100;
  const downloadUrl = URL.createObjectURL(bestResult.blob);

  return {
    blob: bestResult.blob,
    finalKb,
    downloadUrl
  };
};

/**
 * Merge multiple PDF documents into a single consolidated PDF file.
 * Preserves vector text and embeds with zero re-compression loss.
 */
export const mergePdfFiles = async (pdfFiles, onProgress = null) => {
  const mergedPdf = await PDFDocument.create();
  const total = pdfFiles.length;

  for (let i = 0; i < total; i++) {
    if (onProgress) {
      const p = Math.round(((i + 1) / total) * 90);
      onProgress({
        current: i + 1,
        total,
        percent: p,
        text: `Merging document ${i + 1} of ${total} (${pdfFiles[i].name})...`
      });
    }

    await new Promise((r) => setTimeout(r, 0));
    const arrayBuffer = await pdfFiles[i].arrayBuffer();
    const loadedDoc = await PDFDocument.load(arrayBuffer, { ignoreEncryption: true });
    const pageIndices = loadedDoc.getPageIndices();
    const copiedPages = await mergedPdf.copyPages(loadedDoc, pageIndices);
    copiedPages.forEach((page) => mergedPdf.addPage(page));
  }

  if (onProgress) {
    onProgress({ current: total, total, percent: 100, text: 'Finalizing merged PDF...' });
  }

  const bytes = await mergedPdf.save({ useObjectStreams: true });
  const blob = new Blob([bytes], { type: 'application/pdf' });
  const finalKb = Math.round((blob.size / 1024) * 100) / 100;

  return {
    blob,
    finalKb,
    downloadUrl: URL.createObjectURL(blob),
    pageCount: mergedPdf.getPageCount()
  };
};

/**
 * Converts a PDF document into an array of high-resolution JPEG images.
 * Useful for portals that require JPG certificate uploads instead of PDF.
 */
export const convertPdfToImages = async (pdfFile, scale = 2.0, onProgress = null) => {
  const arrayBuffer = await pdfFile.arrayBuffer();
  const loadingTask = pdfjsLib.getDocument({ data: new Uint8Array(arrayBuffer) });
  const pdfDoc = await loadingTask.promise;
  const numPages = pdfDoc.numPages;
  const images = [];

  for (let i = 1; i <= numPages; i++) {
    if (onProgress) {
      const p = Math.round((i / numPages) * 90);
      onProgress({
        current: i,
        total: numPages,
        percent: p,
        text: `Rendering Page ${i} of ${numPages} (${Math.round(scale * 72)} DPI)...`
      });
    }

    await new Promise((r) => setTimeout(r, 0));
    const page = await pdfDoc.getPage(i);
    const viewport = page.getViewport({ scale });

    const canvas = document.createElement('canvas');
    canvas.width = Math.round(viewport.width);
    canvas.height = Math.round(viewport.height);
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    await page.render({ canvasContext: ctx, viewport }).promise;

    const blob = await new Promise((resolve) => canvas.toBlob(resolve, 'image/jpeg', 0.92));
    const kb = Math.round((blob.size / 1024) * 100) / 100;
    images.push({
      pageNumber: i,
      blob,
      kb,
      url: URL.createObjectURL(blob),
      width: canvas.width,
      height: canvas.height
    });
  }

  if (onProgress) {
    onProgress({ current: numPages, total: numPages, percent: 100, text: `Successfully extracted ${numPages} page(s)!` });
  }

  return images;
};

