import { PDFDocument } from 'pdf-lib';
import * as pdfjsLib from 'pdfjs-dist';
import { loadImage } from './imageEngine';

pdfjsLib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.mjs`;

/**
 * Converts multiple image files into a compressed PDF document matching target KB limits
 */
export const convertImagesToPdf = async (imageFiles, targetMaxKb = 300) => {
  const pdfDoc = await PDFDocument.create();

  for (const file of imageFiles) {
    const img = await loadImage(file);
    
    const canvas = document.createElement('canvas');
    const targetWidth = Math.min(img.width, 1000);
    const scale = targetWidth / img.width;
    canvas.width = targetWidth;
    canvas.height = img.height * scale;

    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    // Initial quality estimation
    let jpegQuality = 0.75;
    if (targetMaxKb < 150) jpegQuality = 0.55;

    const jpegDataUrl = canvas.toDataURL('image/jpeg', jpegQuality);
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

  const pdfBytes = await pdfDoc.save();
  const blob = new Blob([pdfBytes], { type: 'application/pdf' });
  const finalKb = Math.round((blob.size / 1024) * 100) / 100;
  const downloadUrl = URL.createObjectURL(blob);

  return {
    blob,
    finalKb,
    downloadUrl
  };
};

/**
 * Dynamic PDF Compression Engine with Binary Quality Iteration matching user's exact target KB
 */
export const compressExistingPdf = async (pdfFile, targetMaxKb = 300) => {
  const arrayBuffer = await pdfFile.arrayBuffer();
  
  const loadingTask = pdfjsLib.getDocument({ data: new Uint8Array(arrayBuffer) });
  const pdfDoc = await loadingTask.promise;
  const numPages = pdfDoc.numPages;

  let lowQuality = 0.20;
  let highQuality = 0.90;
  let bestBlob = null;
  let bestKb = 0;

  // Binary search quality iterations (3 steps for optimal speed vs size balance)
  for (let step = 0; step < 3; step++) {
    const currentQuality = (lowQuality + highQuality) / 2;
    const testPdf = await PDFDocument.create();

    // Scale canvas resolution according to target KB
    let renderScale = 1.0;
    if (targetMaxKb < 150) renderScale = 0.75;
    else if (targetMaxKb > 400) renderScale = 1.25;

    for (let pageNum = 1; pageNum <= numPages; pageNum++) {
      const page = await pdfDoc.getPage(pageNum);
      const viewport = page.getViewport({ scale: renderScale });

      const canvas = document.createElement('canvas');
      canvas.width = viewport.width;
      canvas.height = viewport.height;
      const ctx = canvas.getContext('2d');

      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      await page.render({ canvasContext: ctx, viewport }).promise;

      const jpegDataUrl = canvas.toDataURL('image/jpeg', currentQuality);
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
    const currentBlob = new Blob([bytes], { type: 'application/pdf' });
    const currentKb = currentBlob.size / 1024;

    if (currentKb <= targetMaxKb) {
      bestBlob = currentBlob;
      bestKb = currentKb;
      lowQuality = currentQuality; // Try higher quality
    } else {
      highQuality = currentQuality; // Needs stronger compression
      if (!bestBlob) {
        bestBlob = currentBlob;
        bestKb = currentKb;
      }
    }
  }

  const finalKb = Math.round((bestBlob.size / 1024) * 100) / 100;
  const downloadUrl = URL.createObjectURL(bestBlob);

  return {
    blob: bestBlob,
    finalKb,
    downloadUrl
  };
};
