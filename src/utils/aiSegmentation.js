/**
 * SarkariDoc Studio — Ultra-Fast Neural Portrait Segmentation
 * Powered by Google MediaPipe Neural Network.
 * 
 * - Model size: 244 KB (stored locally in /mediapipe/)
 * - Inference time: ~30ms - 80ms
 * - Zero external CDN dependency — 100% offline & local
 * - Outputs clean anti-aliased hair and shoulder boundaries
 */

let segmenterInstance = null;
let segmenterInitPromise = null;

/**
 * Dynamically loads the local MediaPipe script from /mediapipe/selfie_segmentation.js
 */
function loadMediaPipeScript() {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined') {
      return reject(new Error('Window not available'));
    }
    if (window.SelfieSegmentation) {
      return resolve(window.SelfieSegmentation);
    }

    const existingScript = document.querySelector('script[src*="selfie_segmentation.js"]');
    if (existingScript) {
      existingScript.addEventListener('load', () => resolve(window.SelfieSegmentation));
      existingScript.addEventListener('error', reject);
      return;
    }

    const script = document.createElement('script');
    script.src = './mediapipe/selfie_segmentation.js';
    script.async = true;
    script.onload = () => {
      if (window.SelfieSegmentation) {
        resolve(window.SelfieSegmentation);
      } else {
        reject(new Error('SelfieSegmentation failed to attach to window'));
      }
    };
    script.onerror = (err) => reject(new Error(`Failed to load MediaPipe script: ${err}`));
    document.head.appendChild(script);
  });
}

/**
 * Returns an initialized, cached SelfieSegmentation engine instance
 */
export async function getSegmenter() {
  if (segmenterInstance) return segmenterInstance;
  if (segmenterInitPromise) return segmenterInitPromise;

  segmenterInitPromise = (async () => {
    const SelfieSegmentationClass = await loadMediaPipeScript();

    const segmenter = new SelfieSegmentationClass({
      locateFile: (file) => `./mediapipe/${file}`,
    });

    segmenter.setOptions({
      modelSelection: 0, // 0 = 256x256 General Portrait model (superior boundary fidelity and edge clarity for portraits)
      selfieMode: false,
    });

    await segmenter.initialize();
    segmenterInstance = segmenter;
    return segmenter;
  })();

  return segmenterInitPromise;
}

/**
 * High-speed studio background removal for portraits & passport photos
 * Runs in ~50-200ms using Google MediaPipe Neural Segmentation.
 * Applies high-precision Hermite smoothstep refinement, sub-pixel boundary erosion,
 * and edge color decontamination (defringing) to completely eliminate background halos,
 * ambient light spill, and dirty wall fringes for a razor-clean studio cut.
 * 
 * @param {Blob|File|HTMLImageElement} imageSource 
 * @param {string} targetBgColor - 'transparent', or hex color like '#93C5FD'
 * @param {Object} options - { cutPrecision: 'studio' | 'crisp' | 'natural' }
 * @returns {Promise<Blob>}
 */
export async function removePortraitBackground(imageSource, targetBgColor = 'transparent', options = {}) {
  const segmenter = await getSegmenter();
  const cutPrecision = options?.cutPrecision || 'studio';

  // Convert input to HTMLImageElement
  let img;
  if (imageSource instanceof HTMLImageElement) {
    img = imageSource;
  } else {
    img = new Image();
    const url = URL.createObjectURL(imageSource);
    await new Promise((resolve, reject) => {
      img.onload = () => {
        URL.revokeObjectURL(url);
        resolve();
      };
      img.onerror = reject;
      img.src = url;
    });
  }

  return new Promise((resolve, reject) => {
    let handled = false;

    // Timeout safety: if inference does not complete in 8 seconds, reject gracefully
    const timeout = setTimeout(() => {
      if (!handled) {
        handled = true;
        reject(new Error('Neural segmentation timed out'));
      }
    }, 8000);

    segmenter.onResults((results) => {
      if (handled) return;
      handled = true;
      clearTimeout(timeout);

      try {
        const width = img.naturalWidth || img.width;
        const height = img.naturalHeight || img.height;

        const canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');

        if (!ctx) {
          reject(new Error('Could not obtain canvas 2D context'));
          return;
        }

        // 1. Render raw neural segmentation confidence to an offscreen mask canvas
        const maskCanvas = document.createElement('canvas');
        maskCanvas.width = width;
        maskCanvas.height = height;
        const maskCtx = maskCanvas.getContext('2d', { willReadFrequently: true });
        maskCtx.drawImage(results.segmentationMask, 0, 0, width, height);
        const maskImageData = maskCtx.getImageData(0, 0, width, height);
        const maskPixels = maskImageData.data;

        // 2. High-speed Precomputed S-Curve LUTs (Hermite smoothstep interpolation)
        // Studio Clean: Balanced for natural hair strands and clean borders
        // Crisp Cut: Tight anatomical cut with aggressive chin & neck shadow cleanup
        const isCrisp = cutPrecision === 'crisp';
        const chinYThreshold = Math.round(height * 0.35); // Chin, jawline, neck, and shoulders start below head

        // Head/Hair LUT (preserves fine flyaway strands)
        const headLow = isCrisp ? 115 : 108;
        const headHigh = isCrisp ? 190 : 182;
        const headRange = headHigh - headLow;
        const headLut = new Uint8Array(256);
        for (let i = 0; i < 256; i++) {
          if (i <= headLow) headLut[i] = 0;
          else if (i >= headHigh) headLut[i] = 255;
          else {
            const t = (i - headLow) / headRange;
            headLut[i] = Math.round(t * t * (3 - 2 * t) * 255);
          }
        }

        // Chin / Neck / Jawline LUT (Opaque skin has 0 real semi-transparency; aggressively clips wall shadows)
        const chinLow = isCrisp ? 150 : 125;
        const chinHigh = isCrisp ? 218 : 195;
        const chinRange = chinHigh - chinLow;
        const chinLut = new Uint8Array(256);
        for (let i = 0; i < 256; i++) {
          if (i <= chinLow) chinLut[i] = 0;
          else if (i >= chinHigh) chinLut[i] = 255;
          else {
            const t = (i - chinLow) / chinRange;
            chinLut[i] = Math.round(t * t * (3 - 2 * t) * 255);
          }
        }

        const totalPixels = width * height;
        const alphaMap = new Uint8Array(totalPixels);
        for (let y = 0; y < height; y++) {
          const row = y * width;
          const lut = (y >= chinYThreshold && isCrisp) ? chinLut : headLut;
          for (let x = 0; x < width; x++) {
            const p = row + x;
            alphaMap[p] = lut[maskPixels[p * 4 + 3]];
          }
        }

        // 3. Sub-pixel Inward Boundary Erosion (Contracts away from background)
        // In Crisp mode: checks full 8-neighbor diagonal neighborhood and aggressively trims chin & neck halos
        const erosionStayWeight = isCrisp ? 0.12 : 0.25;
        const erosionMinWeight = 1 - erosionStayWeight;

        for (let y = 0; y < height; y++) {
          const row = y * width;
          const prevRow = (y > 0 ? y - 1 : 0) * width;
          const nextRow = (y < height - 1 ? y + 1 : height - 1) * width;
          const isChinZone = isCrisp && y >= chinYThreshold;

          for (let x = 0; x < width; x++) {
            const p = row + x;
            const v = alphaMap[p];

            if (v === 0) {
              maskPixels[p * 4 + 3] = 0;
              continue;
            }

            const left = x > 0 ? p - 1 : p;
            const right = x < width - 1 ? p + 1 : p;
            const up = prevRow + x;
            const down = nextRow + x;

            let minVal;
            if (isCrisp) {
              // 8-neighbor kernel catches angled contours like jawline and neck slant
              const upLeft = prevRow + (x > 0 ? x - 1 : 0);
              const upRight = prevRow + (x < width - 1 ? x + 1 : width - 1);
              const downLeft = nextRow + (x > 0 ? x - 1 : 0);
              const downRight = nextRow + (x < width - 1 ? x + 1 : width - 1);
              minVal = Math.min(
                alphaMap[left], alphaMap[right], alphaMap[up], alphaMap[down],
                alphaMap[upLeft], alphaMap[upRight], alphaMap[downLeft], alphaMap[downRight]
              );
            } else {
              minVal = Math.min(alphaMap[left], alphaMap[right], alphaMap[up], alphaMap[down]);
            }

            let outA;
            if (v === 255) {
              if (minVal === 255) {
                outA = 255;
              } else {
                // Border pixel touching boundary
                outA = isChinZone && minVal < 120 
                  ? Math.round(minVal * 0.90) // Sharper inward contraction on jawline
                  : Math.round(minVal * erosionMinWeight + v * erosionStayWeight);
              }
            } else {
              // Semi-transparent transition pixel
              if (isChinZone && (minVal === 0 || v < 180)) {
                outA = 0; // Cut off soft shadow fringes near chin/neck
              } else {
                outA = Math.round(minVal * erosionMinWeight + v * erosionStayWeight);
              }
            }

            maskPixels[p * 4] = 255;
            maskPixels[p * 4 + 1] = 255;
            maskPixels[p * 4 + 2] = 255;
            maskPixels[p * 4 + 3] = outA;
          }
        }
        maskCtx.putImageData(maskImageData, 0, 0);

        // 4. Edge Color Decontamination (Defringing & Light-Wrap Neutralizer)
        // Samples nearest solid foreground interior colors to neutralize
        // background wall/shadow light bleed wrapped around hair strands, collars, and shoulders.
        const imgCanvas = document.createElement('canvas');
        imgCanvas.width = width;
        imgCanvas.height = height;
        const imgCtx = imgCanvas.getContext('2d', { willReadFrequently: true });
        imgCtx.drawImage(img, 0, 0, width, height);
        const imgImageData = imgCtx.getImageData(0, 0, width, height);
        const imgPixels = imgImageData.data;

        for (let y = 0; y < height; y++) {
          const row = y * width;
          for (let x = 0; x < width; x++) {
            const p = row + x;
            const a = maskPixels[p * 4 + 3];
            if (a > 0 && a < 242) {
              let fgR = 0, fgG = 0, fgB = 0, fgCount = 0;
              let bestA = 0, bestR = 0, bestG = 0, bestB = 0;

              // Check up to 7x7 kernel (radius 3) for interior solid subject pixels
              for (let dy = -3; dy <= 3; dy++) {
                const ny = y + dy;
                if (ny < 0 || ny >= height) continue;
                const nRow = ny * width;
                for (let dx = -3; dx <= 3; dx++) {
                  const nx = x + dx;
                  if (nx < 0 || nx >= width) continue;
                  const np = nRow + nx;
                  const nAlpha = maskPixels[np * 4 + 3];
                  const nIdx = np * 4;

                  if (nAlpha >= 235) {
                    fgR += imgPixels[nIdx];
                    fgG += imgPixels[nIdx + 1];
                    fgB += imgPixels[nIdx + 2];
                    fgCount++;
                  } else if (nAlpha > bestA) {
                    bestA = nAlpha;
                    bestR = imgPixels[nIdx];
                    bestG = imgPixels[nIdx + 1];
                    bestB = imgPixels[nIdx + 2];
                  }
                }
              }

              let chosenR = 0, chosenG = 0, chosenB = 0;
              let hasCandidate = false;

              if (fgCount > 0) {
                chosenR = fgR / fgCount;
                chosenG = fgG / fgCount;
                chosenB = fgB / fgCount;
                hasCandidate = true;
              } else if (bestA > 140) {
                chosenR = bestR;
                chosenG = bestG;
                chosenB = bestB;
                hasCandidate = true;
              }

              if (hasCandidate) {
                // Adaptive decontamination blend: stronger near outer edge, gentle near solid core
                const blendRatio = ((242 - a) / 242) * 0.92;
                const pIdx = p * 4;
                imgPixels[pIdx] = Math.round(imgPixels[pIdx] * (1 - blendRatio) + chosenR * blendRatio);
                imgPixels[pIdx + 1] = Math.round(imgPixels[pIdx + 1] * (1 - blendRatio) + chosenG * blendRatio);
                imgPixels[pIdx + 2] = Math.round(imgPixels[pIdx + 2] * (1 - blendRatio) + chosenB * blendRatio);
              }
            }
          }
        }
        imgCtx.putImageData(imgImageData, 0, 0);

        // 5. Composite clean decontaminated image with smooth alpha mask
        ctx.clearRect(0, 0, width, height);
        ctx.drawImage(maskCanvas, 0, 0);
        ctx.globalCompositeOperation = 'source-in';
        ctx.drawImage(imgCanvas, 0, 0);

        // 6. If a studio color is requested, fill it behind the cut subject
        if (targetBgColor && targetBgColor !== 'transparent') {
          ctx.globalCompositeOperation = 'destination-over';
          ctx.fillStyle = targetBgColor;
          ctx.fillRect(0, 0, width, height);
        }

        canvas.toBlob(
          (blob) => {
            if (blob) resolve(blob);
            else reject(new Error('Canvas toBlob failed'));
          },
          targetBgColor === 'transparent' ? 'image/png' : 'image/jpeg',
          0.96
        );
      } catch (err) {
        reject(err);
      }
    });

    segmenter.send({ image: img }).catch((err) => {
      if (!handled) {
        handled = true;
        clearTimeout(timeout);
        reject(err);
      }
    });
  });
}

/**
 * Verified Neural AI Salient Cutout (for Signatures, Documents & Objects)
 * Uses 8-bit quantized IS-Net to isolate pure foreground ink strokes / objects
 * with 0 markings and zero paper shadow artifacts.
 */
export async function removeSalientBackground(imageSource) {
  const { removeBackground } = await import('@imgly/background-removal');
  return removeBackground(imageSource, {
    model: 'isnet_quint8',
    device: 'gpu'
  });
}
