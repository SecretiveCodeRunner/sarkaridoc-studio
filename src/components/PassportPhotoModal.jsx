import React, { useState, useRef, useEffect } from 'react';
import { removeBackground } from '@imgly/background-removal';
import confetti from 'canvas-confetti';
import { Upload, Download, X, RefreshCw, Sparkles, CheckCircle, Camera, Crop, Palette, Printer, Sliders, Sun } from 'lucide-react';
import imageCompression from 'browser-image-compression';

const PASSPORT_SIZES = [
  { label: 'India Passport (3.5 x 4.5 cm)', width: 413, height: 531, ratio: '3.5:4.5' },
  { label: 'US / Intl Visa (2 x 2 in)', width: 600, height: 600, ratio: '1:1' },
  { label: 'UK / Schengen (3.5 x 4.5 cm)', width: 413, height: 531, ratio: '3.5:4.5' },
  { label: 'Stamp Size (2.5 x 3.0 cm)', width: 295, height: 354, ratio: '2.5:3.0' },
  { label: 'Square ID (1 : 1)', width: 500, height: 500, ratio: '1:1' }
];

const BG_COLOR_PALETTE = [
  { label: 'White', value: '#FFFFFF', border: 'border-slate-300' },
  { label: 'Light Blue', value: '#93C5FD', border: 'border-blue-300' },
  { label: 'Royal Blue', value: '#2563EB', border: 'border-blue-600' },
  { label: 'Off-White', value: '#F3F4F6', border: 'border-slate-300' },
  { label: 'Navy Blue', value: '#1E3A8A', border: 'border-blue-900' },
  { label: 'Light Gray', value: '#E2E8F0', border: 'border-slate-400' },
  { label: 'Soft Cream', value: '#FEF3C7', border: 'border-amber-200' },
  { label: 'Crimson Red', value: '#DC2626', border: 'border-red-600' },
  { label: 'Emerald Green', value: '#16A34A', border: 'border-green-600' },
  { label: 'Transparent (PNG)', value: 'transparent', border: 'border-dashed border-slate-400' }
];

const MAX_SIZE_OPTIONS = [
  { label: 'Under 50 KB', maxKB: 50 },
  { label: 'Under 100 KB', maxKB: 100 },
  { label: 'Under 200 KB', maxKB: 200 },
  { label: 'High Quality', maxKB: 500 }
];

export const PassportPhotoModal = ({ onClose }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [removedBlob, setRemovedBlob] = useState(null);
  const [selectedSize, setSelectedSize] = useState(PASSPORT_SIZES[0]);
  const [selectedBg, setSelectedBg] = useState(BG_COLOR_PALETTE[1]); // Default Light Blue for Passport
  const [maxKb, setMaxKb] = useState(MAX_SIZE_OPTIONS[1]); // Default 100KB
  const [brightness, setBrightness] = useState(100);
  const [contrast, setContrast] = useState(100);
  const [finalPreviewUrl, setFinalPreviewUrl] = useState(null);
  const [finalFileSizeBytes, setFinalFileSizeBytes] = useState(0);

  const canvasRef = useRef(null);

  const handleFileChange = async (file) => {
    if (!file) return;
    setSelectedFile(file);
    setIsProcessing(true);
    setRemovedBlob(null);
    setFinalPreviewUrl(null);

    try {
      // AI Background Removal
      const blob = await removeBackground(file);
      setRemovedBlob(blob);
    } catch (err) {
      console.error('Passport Photo AI Error:', err);
      // Fallback: use raw file if AI fails
      setRemovedBlob(file);
    } finally {
      setIsProcessing(false);
    }
  };

  // Render composite canvas when settings change
  useEffect(() => {
    if (!removedBlob && !selectedFile) return;
    const imgSource = removedBlob || selectedFile;
    if (!imgSource) return;

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = selectedSize.width;
      canvas.height = selectedSize.height;
      const ctx = canvas.getContext('2d');

      // 1. Fill background color
      if (selectedBg.value !== 'transparent') {
        ctx.fillStyle = selectedBg.value;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }

      // 2. Apply Brightness & Contrast filter
      ctx.filter = `brightness(${brightness}%) contrast(${contrast}%)`;

      // 3. Object-fit cover cropping onto passport canvas dimensions
      const aspectImg = img.width / img.height;
      const aspectCanvas = canvas.width / canvas.height;
      let renderW, renderH, renderX, renderY;

      if (aspectImg > aspectCanvas) {
        renderH = canvas.height;
        renderW = canvas.height * aspectImg;
        renderX = (canvas.width - renderW) / 2;
        renderY = 0;
      } else {
        renderW = canvas.width;
        renderH = canvas.width / aspectImg;
        renderX = 0;
        renderY = (canvas.height - renderH) / 2;
      }

      ctx.drawImage(img, renderX, renderY, renderW, renderH);
      ctx.filter = 'none';

      // 4. Compress to target file size limit
      const rawDataUrl = canvas.toDataURL(selectedBg.value === 'transparent' ? 'image/png' : 'image/jpeg', 0.95);
      
      // Binary compress blob
      fetch(rawDataUrl)
        .then(res => res.blob())
        .then(blob => {
          if (selectedBg.value === 'transparent' || maxKb.maxKB >= 500) {
            setFinalPreviewUrl(URL.createObjectURL(blob));
            setFinalFileSizeBytes(blob.size);
          } else {
            imageCompression(new File([blob], 'passport.jpg', { type: 'image/jpeg' }), {
              maxSizeMB: maxKb.maxKB / 1024,
              useWebWorker: true
            }).then(compressedBlob => {
              setFinalPreviewUrl(URL.createObjectURL(compressedBlob));
              setFinalFileSizeBytes(compressedBlob.size);
            }).catch(() => {
              setFinalPreviewUrl(URL.createObjectURL(blob));
              setFinalFileSizeBytes(blob.size);
            });
          }
        });
    };

    img.src = URL.createObjectURL(imgSource);
  }, [removedBlob, selectedFile, selectedSize, selectedBg, brightness, contrast, maxKb]);

  const handleDownloadSingle = () => {
    if (!finalPreviewUrl) return;
    const link = document.createElement('a');
    link.href = finalPreviewUrl;
    link.download = `Passport_Photo_${selectedSize.width}x${selectedSize.height}_${Date.now()}.${selectedBg.value === 'transparent' ? 'png' : 'jpg'}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#2563eb', '#38bdf8', '#34d399']
    });
  };

  const handleDownloadPrintSheet = () => {
    if (!finalPreviewUrl) return;

    // Create 4x6 Inch Printable Sheet (1200 x 1800 px at 300 DPI)
    const img = new Image();
    img.onload = () => {
      const sheet = document.createElement('canvas');
      sheet.width = 1200;  // 4 inches @ 300 DPI
      sheet.height = 1800; // 6 inches @ 300 DPI
      const ctx = sheet.getContext('2d');

      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(0, 0, sheet.width, sheet.height);

      // Grid of 8 Passport Photos (2 columns x 4 rows)
      const photoW = 413;
      const photoH = 531;
      const marginX = 120;
      const marginY = 80;
      const gapX = 134;
      const gapY = 80;

      for (let r = 0; r < 4; r++) {
        for (let c = 0; c < 2; c++) {
          const x = marginX + c * (photoW + gapX);
          const y = marginY + r * (photoH + gapY);

          // Draw thin cutting border
          ctx.strokeStyle = '#E2E8F0';
          ctx.lineWidth = 2;
          ctx.strokeRect(x - 1, y - 1, photoW + 2, photoH + 2);

          ctx.drawImage(img, x, y, photoW, photoH);
        }
      }

      const printUrl = sheet.toDataURL('image/jpeg', 0.95);
      const link = document.createElement('a');
      link.href = printUrl;
      link.download = `Printable_4x6_Passport_Sheet_${Date.now()}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.8 },
        colors: ['#2563eb', '#6366f1', '#10b981']
      });
    };
    img.src = finalPreviewUrl;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/40 backdrop-blur-md overflow-y-auto font-['Outfit']">
      <div className="relative w-full max-w-5xl bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden my-auto flex flex-col text-slate-900">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 border border-blue-200">
              <Camera className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-bold text-slate-900 text-lg">Passport Photo Studio</h2>
              <p className="text-xs text-slate-500 font-medium">Create clean passport & ID photos with custom studio backgrounds in seconds</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-900 hover:bg-slate-200 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 bg-white">
          {!selectedFile ? (
            <label className="border-2 border-dashed border-slate-300 hover:border-blue-600 rounded-3xl p-8 text-center bg-slate-50 hover:bg-blue-50/50 cursor-pointer transition-all duration-300 flex flex-col items-center justify-center min-h-[300px]">
              <input
                type="file"
                accept="image/jpeg,image/png,image/webp"
                className="hidden"
                onChange={(e) => e.target.files?.[0] && handleFileChange(e.target.files[0])}
              />
              <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 mb-3 shadow-xs">
                <Camera className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">Upload Photo for Passport Generator</h3>
              <p className="text-xs text-slate-500 max-w-sm font-medium">Automatically crops aspect ratio & replaces background with official studio colors.</p>
            </label>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              
              {/* Controls Column */}
              <div className="md:col-span-6 space-y-5">
                
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Configuration</span>
                  <button
                    onClick={() => { setSelectedFile(null); setFinalPreviewUrl(null); }}
                    className="text-xs text-blue-600 hover:underline font-semibold"
                  >
                    Upload New Photo
                  </button>
                </div>

                {/* 1. Size Preset */}
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-2 flex items-center gap-1.5">
                    <Crop className="w-3.5 h-3.5 text-blue-600" />
                    <span>Passport & ID Size Preset</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {PASSPORT_SIZES.map((size) => (
                      <button
                        key={size.label}
                        onClick={() => setSelectedSize(size)}
                        className={`p-2.5 rounded-xl text-xs font-semibold border text-left transition-all ${
                          selectedSize.label === size.label
                            ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        <div>{size.label}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Studio Background Colors */}
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-2 flex items-center gap-1.5">
                    <Palette className="w-3.5 h-3.5 text-blue-600" />
                    <span>Background Color Palette</span>
                  </label>
                  <div className="grid grid-cols-5 gap-2">
                    {BG_COLOR_PALETTE.map((bg) => (
                      <button
                        key={bg.label}
                        onClick={() => setSelectedBg(bg)}
                        title={bg.label}
                        className={`h-10 rounded-xl border flex items-center justify-center transition-all relative ${bg.border} ${
                          selectedBg.label === bg.label ? 'ring-2 ring-blue-600 ring-offset-2 scale-105 shadow-md' : 'hover:scale-95'
                        }`}
                        style={{ backgroundColor: bg.value === 'transparent' ? '#FFFFFF' : bg.value }}
                      >
                        {bg.value === 'transparent' && (
                          <span className="text-[10px] font-bold text-slate-500">PNG</span>
                        )}
                        {selectedBg.label === bg.label && bg.value !== 'transparent' && (
                          <CheckCircle className={`w-4 h-4 ${['#FFFFFF', '#F3F4F6', '#93C5FD', '#E2E8F0', '#FEF3C7'].includes(bg.value) ? 'text-slate-800' : 'text-white'}`} />
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Image Touchup Sliders */}
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                    <span className="flex items-center gap-1.5"><Sun className="w-3.5 h-3.5 text-amber-500" /> Brightness & Contrast</span>
                    <button
                      onClick={() => { setBrightness(100); setContrast(100); }}
                      className="text-[11px] text-slate-500 hover:text-slate-900 font-normal"
                    >
                      Reset
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="text-[11px] font-semibold text-slate-500 block mb-1">Brightness: {brightness}%</span>
                      <input
                        type="range"
                        min="70"
                        max="130"
                        value={brightness}
                        onChange={(e) => setBrightness(Number(e.target.value))}
                        className="w-full accent-blue-600 cursor-pointer"
                      />
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold text-slate-500 block mb-1">Contrast: {contrast}%</span>
                      <input
                        type="range"
                        min="70"
                        max="130"
                        value={contrast}
                        onChange={(e) => setContrast(Number(e.target.value))}
                        className="w-full accent-blue-600 cursor-pointer"
                      />
                    </div>
                  </div>
                </div>

                {/* 4. Target File Size Limit */}
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-2">Max Output File Size</label>
                  <div className="grid grid-cols-4 gap-2">
                    {MAX_SIZE_OPTIONS.map((opt) => (
                      <button
                        key={opt.label}
                        onClick={() => setMaxKb(opt)}
                        className={`py-2 rounded-xl text-xs font-bold border text-center transition-all ${
                          maxKb.label === opt.label
                            ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                            : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

              </div>

              {/* Preview & Downloads Column */}
              <div className="md:col-span-6 flex flex-col justify-between bg-slate-50 border border-slate-200 rounded-3xl p-6">
                
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-slate-900">Studio Passport Preview</span>
                    {isProcessing ? (
                      <span className="text-xs font-bold text-blue-600 flex items-center space-x-1 animate-pulse">
                        <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                        <span>AI Studio Processing...</span>
                      </span>
                    ) : (
                      <span className="text-xs font-bold text-emerald-600 flex items-center space-x-1">
                        <CheckCircle className="w-3.5 h-3.5" />
                        <span>{(finalFileSizeBytes / 1024).toFixed(1)} KB</span>
                      </span>
                    )}
                  </div>

                  {/* Preview Container */}
                  <div className="relative flex items-center justify-center min-h-[260px] max-h-[320px] w-full p-4 bg-white rounded-2xl border border-slate-200 shadow-inner overflow-hidden">
                    {isProcessing ? (
                      <div className="flex flex-col items-center justify-center space-y-3 text-blue-600 p-6">
                        <RefreshCw className="w-8 h-8 animate-spin" />
                        <span className="text-xs font-bold text-slate-900">Isolating Portrait & Lighting</span>
                      </div>
                    ) : finalPreviewUrl ? (
                      <div className="flex flex-col items-center">
                        <img
                          src={finalPreviewUrl}
                          alt="Passport Photo Preview"
                          className="max-h-[240px] shadow-lg rounded-sm border border-slate-300"
                        />
                        <span className="text-[11px] font-semibold text-slate-400 mt-2">
                          {selectedSize.width} x {selectedSize.height} px ({selectedSize.ratio})
                        </span>
                      </div>
                    ) : null}
                  </div>
                </div>

                {/* Actions */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                  <button
                    onClick={handleDownloadSingle}
                    disabled={!finalPreviewUrl || isProcessing}
                    className="py-3.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center space-x-2 shadow-md transition-all active:scale-95 disabled:opacity-50"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Single Photo</span>
                  </button>

                  <button
                    onClick={handleDownloadPrintSheet}
                    disabled={!finalPreviewUrl || isProcessing}
                    className="py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center space-x-2 shadow-md transition-all active:scale-95 disabled:opacity-50"
                  >
                    <Printer className="w-4 h-4" />
                    <span>Download 4x6 Print Sheet (8 Photos)</span>
                  </button>
                </div>

              </div>

            </div>
          )}
        </div>

      </div>
    </div>
  );
};
