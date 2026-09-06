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
      modelSelection: 1, // 1 = 244KB ultra-fast model; 0 = general 244KB model
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
 * Produces clean anti-aliased hair and shoulder boundaries.
 * 
 * @param {Blob|File|HTMLImageElement} imageSource 
 * @param {string} targetBgColor - 'transparent', or hex color like '#93C5FD'
 * @returns {Promise<Blob>}
 */
export async function removePortraitBackground(imageSource, targetBgColor = 'transparent') {
  const segmenter = await getSegmenter();

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
        const canvas = document.createElement('canvas');
        canvas.width = img.naturalWidth || img.width;
        canvas.height = img.naturalHeight || img.height;
        const ctx = canvas.getContext('2d');

        if (!ctx) {
          reject(new Error('Could not obtain canvas 2D context'));
          return;
        }

        // 1. Draw the continuous alpha confidence mask
        ctx.drawImage(results.segmentationMask, 0, 0, canvas.width, canvas.height);

        // 2. Keep only the subject with smooth feathered alpha edges
        ctx.globalCompositeOperation = 'source-in';
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        // 3. If a studio color is requested, fill it behind the cut subject
        if (targetBgColor && targetBgColor !== 'transparent') {
          ctx.globalCompositeOperation = 'destination-over';
          ctx.fillStyle = targetBgColor;
          ctx.fillRect(0, 0, canvas.width, canvas.height);
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
