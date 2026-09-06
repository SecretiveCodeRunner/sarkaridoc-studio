import React, { useState, useRef } from 'react';
import { normalizeImageForProcessing, fastThresholdCutout, cleanSignatureDocument } from '../utils/imageEngine';
import { getCloudGpuQuota, incrementCloudGpuQuota } from '../utils/cloudQuota';
import confetti from 'canvas-confetti';
import { Upload, Download, RefreshCw, Sparkles, CheckCircle, Wand2, ArrowLeft, Crop, FileText, User } from 'lucide-react';
import { ImageCropModal } from './ImageCropModal';
import { ProcessingStepsGuide } from './ProcessingStepsGuide';

export const BgRemoverModal = ({ onClose }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [removedBlob, setRemovedBlob] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [bgColor, setBgColor] = useState('transparent');
  const [cutoutMode, setCutoutMode] = useState('portrait'); // 'portrait' (MediaPipe) | 'signature' (Adaptive Scanner) | 'object' (Deep AI)

  // Interactive Cropper Modal state
  const [cropModalOpen, setCropModalOpen] = useState(false);
  const [cropSourceUrl, setCropSourceUrl] = useState(null);

  const [elapsedSeconds, setElapsedSeconds] = useState('0.0');
  const [statusMessage, setStatusMessage] = useState('');
  const timerRef = useRef(null);
  const isCancelledRef = useRef(false);

  const startLiveTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    const startTime = Date.now();
    setElapsedSeconds('0.0');
    timerRef.current = setInterval(() => {
      setElapsedSeconds(((Date.now() - startTime) / 1000).toFixed(1));
    }, 100);
  };

  const stopLiveTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const bgOptions = [
    { label: 'Transparent', value: 'transparent' },
    { label: 'White', value: '#FFFFFF' },
    { label: 'Royal Blue', value: '#2563EB' },
    { label: 'Sky Blue', value: '#93C5FD' },
  ];

  // When user selects a file, open Interactive Cropper first
  const handleFileChange = async (file) => {
    if (!file) return;
    const normalized = await normalizeImageForProcessing(file, 1600);
    const objectUrl = URL.createObjectURL(normalized);
    setCropSourceUrl(objectUrl);
    setCropModalOpen(true);
  };

  // Called after crop is applied
  const handleCropComplete = async (croppedBlob) => {
    setCropModalOpen(false);
    const normalized = await normalizeImageForProcessing(croppedBlob, 1200);
    setSelectedFile(normalized);
    setRemovedBlob(null);
    setPreviewUrl(null);

    // Dispatch to chosen cutout mode
    if (cutoutMode === 'signature') {
      runSignatureCutout(normalized, bgColor);
    } else if (cutoutMode === 'portrait') {
      runPortraitCutout(normalized, bgColor);
    } else {
      runDeepAiCutout(normalized, bgColor);
    }
  };

  // 1. High-speed neural portrait cutout (<1s, local 244KB model, zero network lag)
  const runPortraitCutout = async (file, color) => {
    setIsProcessing(true);
    setStatusMessage('⚡ Running Neural Portrait Cutout (MediaPipe AI)...');
    startLiveTimer();

    try {
      const { removePortraitBackground } = await import('../utils/aiSegmentation');
      const blob = await removePortraitBackground(file, 'transparent');
      setRemovedBlob(blob);
      renderCompositePreview(blob, color);
    } catch (err) {
      console.warn('MediaPipe error, falling back to threshold:', err);
      const fallbackBlob = await fastThresholdCutout(file, 42);
      setRemovedBlob(fallbackBlob);
      renderCompositePreview(fallbackBlob, color);
    } finally {
      stopLiveTimer();
      setIsProcessing(false);
    }
  };

  // 2. Adaptive signature & document paper cleaner (CamScanner style, 5ms, never vanishes ink!)
  const runSignatureCutout = async (file, color) => {
    setIsProcessing(true);
    setStatusMessage('✍️ Cleaning Paper Shadows & Enhancing Ink...');
    startLiveTimer();

    try {
      const img = new Image();
      const url = URL.createObjectURL(file);
      await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = reject;
        img.src = url;
      });

      const canvas = document.createElement('canvas');
      canvas.width = img.naturalWidth || img.width;
      canvas.height = img.naturalHeight || img.height;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0);

      // Clean paper shadows into pure white and preserve bold ink
      cleanSignatureDocument(ctx, canvas.width, canvas.height, color === 'transparent');

      canvas.toBlob(
        (blob) => {
          setRemovedBlob(blob);
          renderCompositePreview(blob, color);
          stopLiveTimer();
          setIsProcessing(false);
        },
        color === 'transparent' ? 'image/png' : 'image/jpeg',
        0.96
      );
    } catch (err) {
      console.warn('Signature clean error:', err);
      stopLiveTimer();
      setIsProcessing(false);
    }
  };

  // 3. High-precision neural network model (for complex general non-person objects)
  const runDeepAiCutout = async (file, color) => {
    isCancelledRef.current = false;
    setIsProcessing(true);
    setRemovedBlob(null);
    setPreviewUrl(null);
    startLiveTimer();

    const quota = getCloudGpuQuota();

    // Try Cloud Edge GPU first if quota is available
    if (quota.isEligible) {
      setStatusMessage(`⚡ Cloud Edge GPU Processing... (Free Use ${quota.usedToday + 1}/2)`);
      try {
        const formData = new FormData();
        formData.append('image', file);

        const response = await fetch('./api/remove-bg', {
          method: 'POST',
          body: formData
        });

        if (response.ok && !isCancelledRef.current) {
          const blob = await response.blob();
          if (blob && blob.size > 0) {
            incrementCloudGpuQuota();
            stopLiveTimer();
            setRemovedBlob(blob);
            renderCompositePreview(blob, color);
            setIsProcessing(false);
            return;
          }
        }
      } catch (cloudErr) {
        console.warn('Cloud Edge GPU fallback:', cloudErr);
      }
    }

    if (isCancelledRef.current) {
      stopLiveTimer();
      setIsProcessing(false);
      return;
    }

    setStatusMessage('Downloading AI Model & Segmenting Subject...');

    try {
      const { removeBackground } = await import('@imgly/background-removal');
      const blob = await removeBackground(file, {
        model: 'isnet_quint8', // 8-bit quantized: 4x smaller and faster
        device: 'gpu'
      });
      if (isCancelledRef.current) return;
      setRemovedBlob(blob);
      renderCompositePreview(blob, color);
    } catch (err) {
      console.error('AI BG Removal Error:', err);
    } finally {
      stopLiveTimer();
      setIsProcessing(false);
    }
  };

  const handleCancelAi = () => {
    isCancelledRef.current = true;
    stopLiveTimer();
    setIsProcessing(false);
    if (selectedFile) {
      runPortraitCutout(selectedFile, bgColor);
    }
  };

  const renderCompositePreview = (fgBlob, color) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext('2d');

      if (color !== 'transparent') {
        ctx.fillStyle = color;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }

      ctx.drawImage(img, 0, 0);
      setPreviewUrl(canvas.toDataURL(color === 'transparent' ? 'image/png' : 'image/jpeg', 0.95));
    };
    img.src = URL.createObjectURL(fgBlob);
  };

  const handleColorSelect = (color) => {
    setBgColor(color);
    if (removedBlob) {
      if (cutoutMode === 'signature') {
        if (selectedFile) runSignatureCutout(selectedFile, color);
      } else {
        renderCompositePreview(removedBlob, color);
      }
    }
  };

  const handleDownload = () => {
    if (!previewUrl) return;
    const link = document.createElement('a');
    link.href = previewUrl;
    link.download = `SarkariDoc_BgRemoved_${Date.now()}.${bgColor === 'transparent' ? 'png' : 'jpg'}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#a855f7', '#ec4899', '#3b82f6']
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col text-slate-900 antialiased">
      {/* Sticky Top Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30 px-4 sm:px-8 py-3.5 flex items-center justify-between shadow-xs">
        <div className="flex items-center space-x-3">
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 flex items-center space-x-1.5 font-bold text-xs transition-all border border-slate-200"
          >
            <ArrowLeft className="w-4 h-4 text-purple-600" />
            <span className="hidden sm:inline">Back to All Tools</span>
            <span className="sm:hidden">Back</span>
          </button>
          <div className="h-4 w-px bg-slate-200" />
          <div className="flex items-center space-x-2">
            <div className="p-1.5 rounded-lg bg-purple-50 text-purple-600 border border-purple-200">
              <Wand2 className="w-4 h-4" />
            </div>
            <div>
              <h1 className="font-bold text-slate-900 text-sm sm:text-lg" style={{ fontFamily: "'Lexend', sans-serif" }}>AI Background Remover</h1>
              <p className="text-[11px] text-slate-500 font-medium hidden sm:block">Instant neural portrait, signature paper whitening &amp; object cutout</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Workspace Area */}
      <main className="flex-1 max-w-5xl mx-auto w-full p-4 sm:p-6 space-y-6">
        {!selectedFile ? (
          <div className="space-y-6">
            <div className="border-2 border-dashed border-slate-300 rounded-3xl p-8 text-center bg-white space-y-4">
              <div className="w-16 h-16 rounded-2xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-600 mx-auto shadow-xs">
                <Wand2 className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-1" style={{ fontFamily: "'Lexend', sans-serif" }}>Select Image to Remove Background</h3>
                <p className="text-xs text-slate-500 max-w-sm mx-auto font-medium">Includes interactive cropping, instant portrait cutout (sub-second), and signature paper whitening.</p>
              </div>

              {/* Pre-Upload Mode Selection */}
              <div className="inline-flex p-1 bg-slate-100 rounded-2xl border border-slate-200 gap-1 flex-wrap justify-center">
                <button
                  type="button"
                  onClick={() => setCutoutMode('portrait')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 ${
                    cutoutMode === 'portrait' ? 'bg-white text-purple-700 shadow-xs border border-purple-200' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <User className="w-3.5 h-3.5 text-purple-600" />
                  <span>Portrait Photo</span>
                </button>
                <button
                  type="button"
                  onClick={() => setCutoutMode('signature')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 ${
                    cutoutMode === 'signature' ? 'bg-white text-purple-700 shadow-xs border border-purple-200' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <FileText className="w-3.5 h-3.5 text-purple-600" />
                  <span>Signature / Document</span>
                </button>
                <button
                  type="button"
                  onClick={() => setCutoutMode('object')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center space-x-1.5 ${
                    cutoutMode === 'object' ? 'bg-white text-purple-700 shadow-xs border border-purple-200' : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                  <span>General Object</span>
                </button>
              </div>

              <div>
                <label className="inline-flex px-6 py-3.5 rounded-2xl bg-purple-600 hover:bg-purple-700 text-white text-xs font-bold items-center space-x-2 cursor-pointer shadow-md shadow-purple-600/20 transition-all active:scale-95">
                  <input
                    type="file"
                    accept="image/jpeg,image/png,image/webp"
                    className="hidden"
                    onChange={(e) => e.target.files?.[0] && handleFileChange(e.target.files[0])}
                  />
                  <Upload className="w-4 h-4" />
                  <span>
                    {cutoutMode === 'signature' ? 'Choose Signature to Whiten & Clean' : 'Choose Photo to Cutout'}
                  </span>
                </label>
              </div>
            </div>

            {/* Workflow Guide Below Upload Box */}
            <ProcessingStepsGuide mode={cutoutMode === 'signature' ? 'signature' : 'bg-remover'} />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Controls Column */}
            <div className="md:col-span-5 space-y-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Settings</span>
                <button
                  onClick={() => { setSelectedFile(null); setRemovedBlob(null); setPreviewUrl(null); }}
                  className="text-xs text-purple-600 hover:underline font-semibold"
                >
                  Upload New Photo
                </button>
              </div>

              {/* Mode Switcher: Portrait vs Signature vs Deep AI */}
              <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-3">
                <label className="text-xs font-bold text-slate-700 block">Content Type / Engine</label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => {
                      setCutoutMode('portrait');
                      if (selectedFile) runPortraitCutout(selectedFile, bgColor);
                    }}
                    className={`p-2.5 rounded-xl text-left border transition-all ${
                      cutoutMode === 'portrait'
                        ? 'bg-purple-50 border-purple-500 ring-2 ring-purple-500/20'
                        : 'bg-white border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <div className="flex items-center space-x-1 text-purple-700 font-bold text-xs mb-0.5">
                      <User className="w-3.5 h-3.5 text-purple-600" />
                      <span>Portrait</span>
                    </div>
                    <p className="text-[10px] text-slate-500 leading-tight">Neural AI (0.8s)</p>
                  </button>

                  <button
                    onClick={() => {
                      setCutoutMode('signature');
                      if (selectedFile) runSignatureCutout(selectedFile, bgColor);
                    }}
                    className={`p-2.5 rounded-xl text-left border transition-all ${
                      cutoutMode === 'signature'
                        ? 'bg-purple-50 border-purple-500 ring-2 ring-purple-500/20'
                        : 'bg-white border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <div className="flex items-center space-x-1 text-purple-700 font-bold text-xs mb-0.5">
                      <FileText className="w-3.5 h-3.5 text-purple-600" />
                      <span>Signature</span>
                    </div>
                    <p className="text-[10px] text-slate-500 leading-tight">Pure White Paper</p>
                  </button>

                  <button
                    onClick={() => {
                      setCutoutMode('object');
                      if (selectedFile) runDeepAiCutout(selectedFile, bgColor);
                    }}
                    className={`p-2.5 rounded-xl text-left border transition-all ${
                      cutoutMode === 'object'
                        ? 'bg-purple-50 border-purple-500 ring-2 ring-purple-500/20'
                        : 'bg-white border-slate-200 hover:bg-slate-100'
                    }`}
                  >
                    <div className="flex items-center space-x-1 text-purple-700 font-bold text-xs mb-0.5">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Object</span>
                    </div>
                    <p className="text-[10px] text-slate-500 leading-tight">Deep Model</p>
                  </button>
                </div>
              </div>

              {/* Output Background Palette */}
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-2">New Background</label>
                <div className="grid grid-cols-2 gap-2">
                  {bgOptions.map((opt) => (
                    <button
                      key={opt.label}
                      onClick={() => handleColorSelect(opt.value)}
                      className={`p-3 rounded-xl border text-xs font-bold flex items-center justify-between transition-all ${
                        bgColor === opt.value
                          ? 'border-purple-600 bg-purple-50/50 text-purple-700 ring-1 ring-purple-600'
                          : 'border-slate-200 hover:bg-slate-50 text-slate-700 bg-white'
                      }`}
                    >
                      <div className="flex items-center space-x-2">
                        <span
                          className={`w-4 h-4 rounded-full border border-slate-300 ${opt.value === 'transparent' ? 'bg-checkered' : ''}`}
                          style={{ backgroundColor: opt.value !== 'transparent' ? opt.value : undefined }}
                        />
                        <span>{opt.label}</span>
                      </div>
                      {bgColor === opt.value && <CheckCircle className="w-4 h-4 text-purple-600" />}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Preview Column */}
            <div className="md:col-span-7 flex flex-col justify-between bg-slate-50 border border-slate-200 rounded-3xl p-6">
              
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-bold text-slate-900">Cutout Preview</span>
                    <button
                      onClick={() => {
                        if (selectedFile) {
                          setCropSourceUrl(URL.createObjectURL(selectedFile));
                          setCropModalOpen(true);
                        }
                      }}
                      className="px-2.5 py-1 rounded-lg bg-purple-50 hover:bg-purple-100 text-purple-700 border border-purple-200 text-xs font-bold flex items-center space-x-1 transition-all shadow-xs"
                    >
                      <Crop className="w-3.5 h-3.5 text-purple-600" />
                      <span>Crop / Frame</span>
                    </button>
                  </div>

                  {isProcessing && (
                    <button
                      onClick={handleCancelAi}
                      className="px-2.5 py-1 rounded-lg bg-red-50 hover:bg-red-100 text-red-700 border border-red-200 text-xs font-bold transition-all"
                    >
                      Cancel
                    </button>
                  )}
                </div>

                {/* Preview Container */}
                <div className={`relative flex-1 flex items-center justify-center min-h-[240px] max-h-[340px] w-full p-4 rounded-2xl border border-slate-200 shadow-inner overflow-hidden ${bgColor === 'transparent' ? 'bg-checkered' : 'bg-white'}`}>
                  {isProcessing ? (
                    <div className="flex flex-col items-center justify-center space-y-3 text-purple-600 p-6 text-center">
                      <RefreshCw className="w-8 h-8 animate-gpu-spin" />
                      <div className="space-y-1">
                        <span className="text-xs font-bold text-slate-900 block">{statusMessage || 'Processing Cutout...'}</span>
                        <span className="px-2 py-0.5 rounded-full bg-purple-600 text-white text-[10px] font-mono font-bold inline-block">
                          {elapsedSeconds}s
                        </span>
                      </div>
                    </div>
                  ) : previewUrl ? (
                    <img
                      src={previewUrl}
                      alt="Clean Background Removed Preview"
                      loading="lazy"
                      decoding="async"
                      className="max-h-[280px] max-w-full object-contain rounded shadow-md border border-slate-200"
                    />
                  ) : null}
                </div>
              </div>

              <button
                onClick={handleDownload}
                disabled={!previewUrl || isProcessing}
                className="w-full mt-6 btn-gradient bg-purple-600 hover:bg-purple-500 py-3.5 px-6 rounded-xl text-white font-bold text-sm flex items-center justify-center space-x-2 shadow-lg disabled:opacity-50"
              >
                <Download className="w-5 h-5" />
                <span>Download Clean Image</span>
              </button>
            </div>

          </div>
        )}
      </main>

      {/* Interactive Crop & Align Modal */}
      {cropModalOpen && cropSourceUrl && (
        <ImageCropModal
          imageSrc={cropSourceUrl}
          initialAspect={cutoutMode === 'signature' ? 7 / 2 : null}
          aspectOptions={[
            { label: 'Freeform', value: null },
            { label: 'Signature (7:2)', value: 7 / 2 },
            { label: 'Passport (3.5:4.5)', value: 3.5 / 4.5 },
            { label: 'Square (1:1)', value: 1 / 1 },
            { label: '16:9', value: 16 / 9 },
          ]}
          title="Crop & Frame Subject"
          subtitle="Align the subject inside the frame before removing background"
          onCropComplete={handleCropComplete}
          onCancel={() => setCropModalOpen(false)}
        />
      )}
    </div>
  );
};
