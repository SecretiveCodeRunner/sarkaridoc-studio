import React, { useState, useCallback } from 'react';
import Cropper from 'react-easy-crop';
import { ZoomIn, ZoomOut, RotateCw, Check, X, Crop, Move, RefreshCw } from 'lucide-react';

/**
 * Creates an HTML Image element from a source URL
 */
const createImage = (url) =>
  new Promise((resolve, reject) => {
    const image = new Image();
    image.addEventListener('load', () => resolve(image));
    image.addEventListener('error', (error) => reject(error));
    image.setAttribute('crossOrigin', 'anonymous');
    image.src = url;
  });

/**
 * Crops and rotates the image on an HTML5 canvas and returns a Blob
 */
async function getCroppedImg(imageSrc, pixelCrop, rotation = 0) {
  const image = await createImage(imageSrc);
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  if (!ctx) {
    throw new Error('Canvas 2D context not available');
  }

  const rotRad = (rotation * Math.PI) / 180;

  // Calculate bounding box of the rotated image
  const { width: bBoxWidth, height: bBoxHeight } = {
    width: Math.abs(Math.cos(rotRad) * image.width) + Math.abs(Math.sin(rotRad) * image.height),
    height: Math.abs(Math.sin(rotRad) * image.width) + Math.abs(Math.cos(rotRad) * image.height),
  };

  // Set canvas size to match the bounding box
  canvas.width = bBoxWidth;
  canvas.height = bBoxHeight;

  // Translate canvas-center to image-center and rotate
  ctx.translate(bBoxWidth / 2, bBoxHeight / 2);
  ctx.rotate(rotRad);
  ctx.drawImage(image, -image.width / 2, -image.height / 2);

  // Extract the cropped image from the rotated canvas
  const croppedCanvas = document.createElement('canvas');
  const croppedCtx = croppedCanvas.getContext('2d');

  croppedCanvas.width = pixelCrop.width;
  croppedCanvas.height = pixelCrop.height;

  croppedCtx.drawImage(
    canvas,
    pixelCrop.x,
    pixelCrop.y,
    pixelCrop.width,
    pixelCrop.height,
    0,
    0,
    pixelCrop.width,
    pixelCrop.height
  );

  return new Promise((resolve) => {
    croppedCanvas.toBlob((blob) => {
      resolve(blob);
    }, 'image/jpeg', 0.98);
  });
}

export const ImageCropModal = ({
  imageSrc,
  initialAspect = 3.5 / 4.5,
  aspectOptions = [
    { label: 'Passport (3.5:4.5)', value: 3.5 / 4.5 },
    { label: 'Square (1:1 / 2×2″)', value: 1 / 1 },
    { label: 'Postcard (4:6)', value: 4 / 6 },
    { label: 'Signature (7:2)', value: 7 / 2 },
    { label: 'Freeform', value: null },
  ],
  title = 'Crop & Frame Image',
  subtitle = 'Drag to position face or signature inside the guide box',
  onCropComplete,
  onCancel
}) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [aspect, setAspect] = useState(initialAspect);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);

  const onCropChange = (newCrop) => {
    setCrop(newCrop);
  };

  const onCropCompleteInternal = useCallback((_croppedArea, pixels) => {
    setCroppedAreaPixels(pixels);
  }, []);

  const handleApplyCrop = async () => {
    if (!croppedAreaPixels || isProcessing) return;
    setIsProcessing(true);
    try {
      const croppedBlob = await getCroppedImg(imageSrc, croppedAreaPixels, rotation);
      onCropComplete(croppedBlob);
    } catch (err) {
      console.error('Error applying crop:', err);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleRotate = () => {
    setRotation((prev) => (prev + 90) % 360);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/85 backdrop-blur-md flex flex-col items-center justify-between text-white select-none animate-in fade-in duration-200">
      
      {/* Top Header Bar */}
      <div className="w-full max-w-4xl px-4 py-3.5 flex items-center justify-between bg-slate-900/90 border-b border-slate-800 z-10">
        <div className="flex items-center space-x-2.5">
          <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md">
            <Crop className="w-4 h-4" />
          </div>
          <div>
            <h3 className="font-bold text-sm text-slate-100" style={{ fontFamily: "'Lexend', sans-serif" }}>
              {title}
            </h3>
            <p className="text-[11px] text-slate-400 font-medium hidden sm:block">
              {subtitle}
            </p>
          </div>
        </div>

        <button
          onClick={onCancel}
          aria-label="Cancel crop"
          className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Cropper Stage */}
      <div className="relative flex-1 w-full max-w-4xl min-h-[300px] overflow-hidden bg-slate-950">
        <Cropper
          image={imageSrc}
          crop={crop}
          zoom={zoom}
          rotation={rotation}
          aspect={aspect || undefined}
          onCropChange={onCropChange}
          onCropComplete={onCropCompleteInternal}
          onZoomChange={setZoom}
          showGrid={true}
          classes={{
            containerClassName: 'h-full w-full',
            cropAreaClassName: 'border-2 border-blue-400 shadow-[0_0_0_9999px_rgba(15,23,42,0.7)]'
          }}
        />

        {/* Floating Gesture Hint on Mobile */}
        <div className="absolute top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-slate-700/60 text-[11px] text-slate-300 pointer-events-none flex items-center space-x-1.5 shadow-sm">
          <Move className="w-3 h-3 text-blue-400" />
          <span>Drag to align · Pinch to zoom</span>
        </div>
      </div>

      {/* Bottom Controls Bar */}
      <div className="w-full max-w-4xl p-4 bg-slate-900/95 border-t border-slate-800 z-10 space-y-3">
        
        {/* Aspect Ratio Pills */}
        <div className="flex items-center justify-center space-x-2 overflow-x-auto pb-1 scrollbar-none">
          {aspectOptions.map((opt) => (
            <button
              key={opt.label}
              onClick={() => setAspect(opt.value)}
              className={`px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                aspect === opt.value
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>

        {/* Zoom & Rotation Controls + Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-1">
          
          {/* Zoom Slider + Rotate */}
          <div className="flex items-center space-x-3 w-full sm:w-auto">
            <button
              onClick={handleRotate}
              title="Rotate 90° Clockwise"
              aria-label="Rotate 90 degrees"
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 transition-colors flex items-center space-x-1 text-xs font-semibold"
            >
              <RotateCw className="w-4 h-4 text-blue-400" />
              <span>Rotate</span>
            </button>

            <div className="flex items-center space-x-2 flex-1 sm:w-44 bg-slate-800/80 px-3 py-1.5 rounded-xl border border-slate-700/80">
              <ZoomOut className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
              <input
                type="range"
                value={zoom}
                min={1}
                max={3}
                step={0.05}
                aria-label="Zoom"
                onChange={(e) => setZoom(Number(e.target.value))}
                className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
              />
              <ZoomIn className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-2 w-full sm:w-auto justify-end">
            <button
              onClick={onCancel}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 font-semibold text-xs transition-colors flex-1 sm:flex-none"
            >
              Cancel
            </button>

            <button
              onClick={handleApplyCrop}
              disabled={isProcessing}
              className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs shadow-lg shadow-blue-500/25 flex items-center justify-center space-x-1.5 transition-all active:scale-95 flex-1 sm:flex-none"
            >
              {isProcessing ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-gpu-spin" />
                  <span>Cropping...</span>
                </>
              ) : (
                <>
                  <Check className="w-4 h-4" />
                  <span>Apply Crop & Continue</span>
                </>
              )}
            </button>
          </div>

        </div>

      </div>

    </div>
  );
};
