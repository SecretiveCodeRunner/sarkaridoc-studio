import React, { useState, useRef, useEffect } from 'react';
import { binaryCompressToTargetSize, normalizeImageForProcessing, fastThresholdCutout } from '../utils/imageEngine';
import { getCloudGpuQuota, incrementCloudGpuQuota } from '../utils/cloudQuota';
import confetti from 'canvas-confetti';
import { Upload, Download, X, RefreshCw, Sparkles, CheckCircle, Camera, Crop, Palette, Printer, Sliders, Sun, Image as ImageIcon, ArrowLeft, Zap, Lock, Wand2 } from 'lucide-react';

const PASSPORT_SIZES = [
  { label: 'India Passport (3.5 x 4.5 cm)', width: 413, height: 531, ratio: '3.5:4.5' },
  { label: 'US / Intl Visa (2 x 2 in)', width: 600, height: 600, ratio: '1:1' },
  { label: 'UK / Schengen (3.5 x 4.5 cm)', width: 413, height: 531, ratio: '3.5:4.5' },
  { label: 'Stamp Size (2.5 x 3.0 cm)', width: 295, height: 354, ratio: '2.5:3.0' },
  { label: 'Square ID (1 : 1)', width: 500, height: 500, ratio: '1:1' }
];

const BG_COLOR_PALETTE = [
  { label: 'Original BG', value: 'original', border: 'border-slate-400 bg-slate-100' },
  { label: 'Light Blue', value: '#93C5FD', border: 'border-blue-300' },
  { label: 'White', value: '#FFFFFF', border: 'border-slate-300' },
  { label: 'Royal Blue', value: '#2563EB', border: 'border-blue-600' },
  { label: 'Navy Blue', value: '#1E3A8A', border: 'border-blue-900' },
  { label: 'Off-White', value: '#F3F4F6', border: 'border-slate-300' },
  { label: 'Light Gray', value: '#E2E8F0', border: 'border-slate-400' },
  { label: 'Soft Cream', value: '#FEF3C7', border: 'border-amber-200' },
  { label: 'Crimson Red', value: '#DC2626', border: 'border-red-600' },
  { label: 'Transparent', value: 'transparent', border: 'border-dashed border-slate-400' }
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
  const [aiProgressText, setAiProgressText] = useState('');
  const [aiProgressPercent, setAiProgressPercent] = useState(0);

  const [quotaInfo, setQuotaInfo] = useState(() => getCloudGpuQuota());
  const [elapsedSeconds, setElapsedSeconds] = useState('0.0');

  const [selectedSize, setSelectedSize] = useState(PASSPORT_SIZES[0]);
  const [selectedBg, setSelectedBg] = useState(BG_COLOR_PALETTE[1]); // Default Light Blue for Passport
  const [maxKb, setMaxKb] = useState(MAX_SIZE_OPTIONS[1]); // Default 100KB
  const [brightness, setBrightness] = useState(100);
  const [contrast, setContrast] = useState(100);
  const [finalPreviewUrl, setFinalPreviewUrl] = useState(null);
  const [finalFileSizeBytes, setFinalFileSizeBytes] = useState(0);

  // Version counter ref to prevent race conditions during rapid option clicks
  const runVersionRef = useRef(0);
  const progressTimerRef = useRef(null);
  const liveTimerRef = useRef(null);

  const startLiveTimer = () => {
    if (liveTimerRef.current) clearInterval(liveTimerRef.current);
    const startTime = Date.now();
    setElapsedSeconds('0.0');
    liveTimerRef.current = setInterval(() => {
      setElapsedSeconds(((Date.now() - startTime) / 1000).toFixed(1));
    }, 100);
  };

  const stopLiveTimer = () => {
    if (liveTimerRef.current) {
      clearInterval(liveTimerRef.current);
      liveTimerRef.current = null;
    }
  };

  const startProgressAnimation = (isCloud = false) => {
    if (progressTimerRef.current) clearInterval(progressTimerRef.current);
    setAiProgressPercent(15);
    setAiProgressText(isCloud ? 'Connecting to Cloud Edge GPU...' : 'Running Neural AI Model...');

    progressTimerRef.current = setInterval(() => {
      setAiProgressPercent((prev) => {
        if (prev >= 92) return 92;
        const next = prev + (prev < 40 ? 8 : prev < 70 ? 5 : 2);
        return next;
      });
    }, 250);
  };

  const stopProgressAnimation = () => {
    if (progressTimerRef.current) {
      clearInterval(progressTimerRef.current);
      progressTimerRef.current = null;
    }
    stopLiveTimer();
  };

  const processAiBackgroundRemoval = async (file, currentVersion) => {
    if (!file) return;
    setIsProcessing(true);
    startLiveTimer();
    startProgressAnimation(false);

    try {
      const { removeBackground } = await import('@imgly/background-removal');
      const blob = await removeBackground(file, {
        progress: (key, current, total) => {
          if (runVersionRef.current !== currentVersion) return;
          if (total > 0) {
            const pct = Math.min(95, Math.round((current / total) * 100));
            setAiProgressPercent(pct);
          }
          if (key && key.includes('compute')) {
            setAiProgressText('AI Segmenting Subject from Background...');
          }
        }
      });

      if (runVersionRef.current === currentVersion && blob) {
        stopProgressAnimation();
        setAiProgressPercent(100);
        setAiProgressText('Studio Background AI Cutout Complete!');
        setRemovedBlob(blob);
      }
    } catch (err) {
      console.warn('AI Background Removal error:', err);
    } finally {
      if (runVersionRef.current === currentVersion) {
        stopProgressAnimation();
        setIsProcessing(false);
      }
    }
  };

  const handleFileChange = async (file) => {
    if (!file) return;
    const nextVersion = ++runVersionRef.current;
    setIsProcessing(true);

    // 1. Normalize heavy raw camera photo to max 1200px
    const normalized = await normalizeImageForProcessing(file, 1200);
    setSelectedFile(normalized);
    setRemovedBlob(null);
    setFinalPreviewUrl(null);

    // 2. If user has a studio background selected (not original), run high-precision AI removal
    if (selectedBg.value !== 'original') {
      processAiBackgroundRemoval(normalized, nextVersion);
    } else {
      setIsProcessing(false);
    }
  };

  // Handle color palette click
  const handleSelectBg = (bgOption) => {
    setSelectedBg(bgOption);

    // If user clicked 'original', stop AI processing immediately
    if (bgOption.value === 'original') {
      runVersionRef.current++;
      stopProgressAnimation();
      setIsProcessing(false);
      return;
    }

    // If user selected a studio color and AI cutout doesn't exist yet, trigger AI removal
    if (selectedFile && !removedBlob && !isProcessing) {
      const nextVersion = ++runVersionRef.current;
      processAiBackgroundRemoval(selectedFile, nextVersion);
    }
  };


  // Cleanup timers on unmount
  useEffect(() => {
    return () => stopProgressAnimation();
  }, []);

  // Render composite canvas when settings or photo source changes
  useEffect(() => {
    if (!selectedFile && !removedBlob) return;
    const imgSource = (selectedBg.value !== 'original' && removedBlob) ? removedBlob : selectedFile;
    if (!imgSource) return;

    let isMounted = true;

    const renderComposite = async () => {
      // Yield to UI thread to keep touch scrolling responsive
      await new Promise((r) => setTimeout(r, 0));

      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = async () => {
        const canvas = document.createElement('canvas');
        canvas.width = selectedSize.width;
        canvas.height = selectedSize.height;
        const ctx = canvas.getContext('2d', { willReadFrequently: true });
        ctx.imageSmoothingEnabled = true;
        ctx.imageSmoothingQuality = 'high';

        // 1. Fill studio background color (if not original and not transparent)
        if (selectedBg.value !== 'original' && selectedBg.value !== 'transparent') {
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

        // 4. Precision Binary Compression to land below target maxKB
        const format = selectedBg.value === 'transparent' ? 'image/png' : 'image/jpeg';
        const res = await binaryCompressToTargetSize(
          canvas,
          format,
          0,
          maxKb.maxKB,
          maxKb.maxKB
        );

        if (isMounted) {
          setFinalPreviewUrl(URL.createObjectURL(res.blob));
          setFinalFileSizeBytes(res.blob.size);
        }
      };

      img.src = URL.createObjectURL(imgSource);
    };

    renderComposite();

    return () => {
      isMounted = false;
    };
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
      const ctx = sheet.getContext('2d', { willReadFrequently: true });
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';

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
    <div className="min-h-screen bg-slate-50 flex flex-col font-['Outfit'] text-slate-900 antialiased">
      {/* Sticky Workspace Top Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30 px-4 sm:px-8 py-3.5 flex items-center justify-between shadow-xs">
        <div className="flex items-center space-x-3">
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 flex items-center space-x-1.5 font-bold text-xs transition-all border border-slate-200"
          >
            <ArrowLeft className="w-4 h-4 text-blue-600" />
            <span className="hidden sm:inline">Back to All Tools</span>
            <span className="sm:hidden">Back</span>
          </button>
          <div className="h-4 w-px bg-slate-200" />
          <div className="flex items-center space-x-2">
            <div className="p-1.5 rounded-lg bg-blue-50 text-blue-600 border border-blue-200">
              <Camera className="w-4 h-4" />
            </div>
            <div>
              <h1 className="font-bold text-slate-900 text-sm sm:text-lg">Passport Photo Studio</h1>
              <p className="text-[11px] text-slate-500 font-medium hidden sm:block">Create official passport & ID photos with studio background colors</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Workspace Area */}
      <main className="flex-1 max-w-6xl mx-auto w-full p-4 sm:p-6 space-y-6">

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
                    onClick={() => { setSelectedFile(null); setFinalPreviewUrl(null); setRemovedBlob(null); }}
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
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                      <Palette className="w-3.5 h-3.5 text-blue-600" />
                      <span>Studio Background Color</span>
                    </label>
                    <span className="text-[10px] text-slate-400 font-medium">Select 'Original BG' for instant 0s wait</span>
                  </div>

                  <div className="grid grid-cols-5 gap-2">
                    {BG_COLOR_PALETTE.map((bg) => (
                      <button
                        key={bg.label}
                        onClick={() => handleSelectBg(bg)}
                        title={bg.label}
                        className={`h-10 rounded-xl border flex items-center justify-center transition-all relative ${bg.border} ${
                          selectedBg.label === bg.label ? 'ring-2 ring-blue-600 ring-offset-2 scale-105 shadow-md' : 'hover:scale-95'
                        }`}
                        style={{ backgroundColor: (bg.value === 'transparent' || bg.value === 'original') ? '#FFFFFF' : bg.value }}
                      >
                        {bg.value === 'original' && (
                          <span className="text-[9px] font-bold text-slate-700 text-center leading-tight">ORIGINAL</span>
                        )}
                        {bg.value === 'transparent' && (
                          <span className="text-[10px] font-bold text-slate-500">PNG</span>
                        )}
                        {selectedBg.label === bg.label && bg.value !== 'transparent' && bg.value !== 'original' && (
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
                        <RefreshCw className="w-3.5 h-3.5 animate-gpu-spin" />
                        <span>AI Studio Processing...</span>
                      </span>
                    ) : (
                      <span className="text-xs font-bold text-emerald-600 flex items-center space-x-1">
                        <CheckCircle className="w-3.5 h-3.5" />
                        <span>{(finalFileSizeBytes / 1024).toFixed(1)} KB</span>
                      </span>
                    )}
                  </div>

                  {/* AI Live Progress Bar Overlay Card with Live Timer & Daily Quota */}
                  {isProcessing && (
                    <div className="p-4 mb-4 rounded-2xl bg-blue-50 border border-blue-200 space-y-2.5 shadow-xs">
                      <div className="flex items-center justify-between text-xs font-bold text-blue-900">
                        <span className="flex items-center space-x-1.5">
                          <Sparkles className="w-4 h-4 text-blue-600 animate-gpu-spin" />
                          <span>{aiProgressText || 'Processing AI Portrait...'}</span>
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-blue-600 text-white text-[11px] font-mono font-bold">
                          {elapsedSeconds}s
                        </span>
                      </div>
                      <div className="w-full h-2 bg-blue-200 rounded-full overflow-hidden shadow-inner">
                        <div
                          className="h-full bg-blue-600 rounded-full transition-all duration-300 ease-out"
                          style={{ width: `${aiProgressPercent}%` }}
                        />
                      </div>
                      <div className="flex items-center justify-between text-[11px] font-medium text-slate-500 pt-0.5">
                        <span className="flex items-center space-x-1 text-blue-700 font-semibold">
                          <Zap className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                          <span>Daily Fast Cloud AI Uses: {quotaInfo.usesLeft} of {quotaInfo.maxDaily} left</span>
                        </span>
                        <span>{aiProgressPercent}%</span>
                      </div>
                    </div>
                  )}


                  {/* Preview Container */}
                  <div className={`relative flex items-center justify-center min-h-[260px] max-h-[320px] w-full p-4 rounded-2xl border border-slate-200 shadow-inner overflow-hidden ${selectedBg.value === 'transparent' ? 'bg-checkered' : 'bg-white'}`}>
                    {finalPreviewUrl ? (
                      <div className="flex flex-col items-center">
                        <img
                          src={finalPreviewUrl}
                          alt="Passport Photo Preview"
                          className={`max-h-[240px] shadow-lg rounded-sm border border-slate-300 transition-all duration-300 ${selectedBg.value === 'transparent' ? 'bg-checkered' : ''}`}
                        />
                        <span className="text-[11px] font-semibold text-slate-400 mt-2">
                          {selectedSize.width} x {selectedSize.height} px ({selectedSize.ratio}) — {selectedBg.label}
                        </span>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center space-y-3 text-blue-600 p-6">
                        <RefreshCw className="w-8 h-8 animate-gpu-spin" />
                        <span className="text-xs font-bold text-slate-900">Loading Studio Preview...</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Actions */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6">
                  <button
                    onClick={handleDownloadSingle}
                    disabled={!finalPreviewUrl}
                    className="py-3.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center space-x-2 shadow-md transition-all active:scale-95 disabled:opacity-50"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Single Photo</span>
                  </button>

                  <button
                    onClick={handleDownloadPrintSheet}
                    disabled={!finalPreviewUrl}
                    className="py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center space-x-2 shadow-md transition-all active:scale-95 disabled:opacity-50"
                  >
                    <Printer className="w-4 h-4" />
                    <span>Download 4x6 Print Sheet (8 Photos)</span>
                  </button>
                </div>

              </div>

            </div>
          )}
        </main>
    </div>
  );
};

