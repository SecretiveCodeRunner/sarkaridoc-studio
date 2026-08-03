/**
 * SarkariDoc Studio — AI Background Processing & Image Engine
 */
import { removeBackground } from '@imgly/background-removal';

export const loadImage = (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => resolve(img);
    img.onerror = (err) => reject(err);
    if (typeof src === 'string') {
      img.src = src;
    } else {
      const reader = new FileReader();
      reader.onload = (e) => { img.src = e.target.result; };
      reader.readAsDataURL(src);
    }
  });
};

/**
 * Sharpen and darken signature ink strokes over pure white canvas
 */
export const sharpenSignatureInk = (ctx, width, height) => {
  const imageData = ctx.getImageData(0, 0, width, height);
  const data = imageData.data;

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i];
    const g = data[i + 1];
    const b = data[i + 2];
    const a = data[i + 3];

    // If pixel is white/near-white, keep pure white #FFFFFF
    if (r > 240 && g > 240 && b > 240) {
      data[i] = 255;
      data[i + 1] = 255;
      data[i + 2] = 255;
    } else if (a > 20) {
      // Sharpen ink lines
      data[i] = Math.max(0, r - 35);
      data[i + 1] = Math.max(0, g - 35);
      data[i + 2] = Math.max(0, b - 35);
    }
  }

  ctx.putImageData(imageData, 0, 0);
};

/**
 * Renders Candidate Name & Date of Photo Stamp at bottom (SSC / UPSC mandate)
 */
export const renderNameAndDateOverlay = (ctx, width, height, candidateName, photoDate) => {
  if (!candidateName && !photoDate) return;

  const barHeight = Math.round(height * 0.22);
  const barY = height - barHeight;

  ctx.fillStyle = '#FFFFFF';
  ctx.fillRect(0, barY, width, barHeight);

  ctx.strokeStyle = '#0F172A';
  ctx.lineWidth = Math.max(2, Math.round(width * 0.006));
  ctx.beginPath();
  ctx.moveTo(0, barY);
  ctx.lineTo(width, barY);
  ctx.stroke();

  ctx.fillStyle = '#0F172A';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';

  const fontSize = Math.max(12, Math.round(barHeight * 0.32));
  ctx.font = `700 ${fontSize}px "Outfit", sans-serif`;

  if (candidateName && photoDate) {
    const line1Y = barY + (barHeight * 0.32);
    const line2Y = barY + (barHeight * 0.72);

    ctx.fillText(candidateName.toUpperCase(), width / 2, line1Y);
    ctx.font = `600 ${Math.max(10, Math.round(barHeight * 0.26))}px "Outfit", sans-serif`;
    ctx.fillText(`D.O.P: ${photoDate}`, width / 2, line2Y);
  } else if (candidateName) {
    ctx.fillText(candidateName.toUpperCase(), width / 2, barY + (barHeight / 2));
  } else if (photoDate) {
    ctx.fillText(`D.O.P: ${photoDate}`, width / 2, barY + (barHeight / 2));
  }
};

/**
 * Binary Search Quality Optimization for exact target KB size
 */
export const binaryCompressToTargetSize = async (canvas, format = 'image/jpeg', minKb = 20, maxKb = 50, targetKb = 35) => {
  if (format === 'image/png') {
    const blob = await new Promise((res) => canvas.toBlob(res, 'image/png'));
    const finalKb = Math.round((blob.size / 1024) * 100) / 100;
    return { blob, finalKb, quality: 1.0 };
  }

  let low = 0.05;
  let high = 1.0;
  let bestBlob = null;
  let bestKb = 0;
  let bestQuality = 0.85;

  for (let i = 0; i < 8; i++) {
    const midQuality = (low + high) / 2;
    const blob = await new Promise((res) => canvas.toBlob(res, format, midQuality));
    const currentKb = blob.size / 1024;

    if (currentKb >= minKb && currentKb <= maxKb) {
      bestBlob = blob;
      bestKb = currentKb;
      bestQuality = midQuality;
      if (Math.abs(currentKb - targetKb) < 2) break;
    }

    if (currentKb > maxKb) {
      high = midQuality;
    } else {
      low = midQuality;
      if (!bestBlob || currentKb > bestKb) {
        bestBlob = blob;
        bestKb = currentKb;
        bestQuality = midQuality;
      }
    }
  }

  if (!bestBlob) {
    bestBlob = await new Promise((res) => canvas.toBlob(res, format, low));
    bestKb = bestBlob.size / 1024;
    bestQuality = low;
  }

  return {
    blob: bestBlob,
    finalKb: Math.round(bestKb * 100) / 100,
    quality: Math.round(bestQuality * 100) / 100
  };
};

/**
 * Main Image Processing Engine
 */
export const processSarkariImage = async ({
  imageFile,
  preset,
  customSettings,
  candidateName = '',
  photoDate = '',
  enhanceSignature = true,
  bgColor = '#FFFFFF',
  changeBg = true, // Default AI BG removal ON for signatures and photos!
  zoomScale = 1.0,
  panX = 0,
  panY = 0
}) => {
  let sourceImg;

  // Run AI Background Removal (@imgly/background-removal) for ALL presets (including Signatures!) when changeBg is active
  const shouldRunAiBg = changeBg || (preset.type === 'signature' && enhanceSignature);

  if (shouldRunAiBg) {
    try {
      const bgRemovedBlob = await removeBackground(imageFile);
      const bgRemovedUrl = URL.createObjectURL(bgRemovedBlob);
      sourceImg = await loadImage(bgRemovedUrl);
    } catch (err) {
      console.warn('AI Background Removal fallback:', err);
      sourceImg = await loadImage(imageFile);
    }
  } else {
    sourceImg = await loadImage(imageFile);
  }

  const targetWidth = customSettings?.widthPx || preset.widthPx;
  const targetHeight = customSettings?.heightPx || preset.heightPx;
  const minKb = customSettings?.minKb || preset.minKb;
  const maxKb = customSettings?.maxKb || preset.maxKb;
  const targetKb = customSettings?.targetKb || preset.targetKb;
  const format = customSettings?.format || preset.format;

  const canvas = document.createElement('canvas');
  canvas.width = targetWidth;
  canvas.height = targetHeight;
  const ctx = canvas.getContext('2d', { willReadFrequently: true });

  ctx.imageSmoothingEnabled = true;
  ctx.imageSmoothingQuality = 'high';

  // Fill Solid Pure White (#FFFFFF) Background Canvas
  ctx.fillStyle = (preset.type === 'signature') ? '#FFFFFF' : (bgColor || '#FFFFFF');
  ctx.fillRect(0, 0, targetWidth, targetHeight);

  // Compute Cover Scale
  const aspectWidth = targetWidth / sourceImg.width;
  const aspectHeight = targetHeight / sourceImg.height;
  const baseScale = Math.max(aspectWidth, aspectHeight);
  const finalScale = baseScale * zoomScale;

  const scaledWidth = sourceImg.width * finalScale;
  const scaledHeight = sourceImg.height * finalScale;

  const drawX = (targetWidth - scaledWidth) / 2 + (panX * (targetWidth / 100));
  const drawY = (targetHeight - scaledHeight) / 2 + (panY * (targetHeight / 100));

  // Draw AI-extracted subject/signature onto Pure White Canvas
  ctx.drawImage(sourceImg, drawX, drawY, scaledWidth, scaledHeight);

  // Sharpen signature ink lines
  if (preset.type === 'signature') {
    sharpenSignatureInk(ctx, targetWidth, targetHeight);
  }

  // Render Name & Date overlay if specified
  if (candidateName || photoDate) {
    renderNameAndDateOverlay(ctx, targetWidth, targetHeight, candidateName, photoDate);
  }

  // Binary compression to land inside exact KB range
  const compressionResult = await binaryCompressToTargetSize(
    canvas,
    format,
    minKb,
    maxKb,
    targetKb
  );

  const downloadUrl = URL.createObjectURL(compressionResult.blob);

  return {
    ...compressionResult,
    downloadUrl,
    width: targetWidth,
    height: targetHeight,
    format: preset.extension || 'jpg'
  };
};
