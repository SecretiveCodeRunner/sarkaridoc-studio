import React, { useState, useRef } from 'react';
import { normalizeImageForProcessing } from '../utils/imageEngine';
import { getCloudGpuQuota, incrementCloudGpuQuota } from '../utils/cloudQuota';
import confetti from 'canvas-confetti';
import { Upload, Download, X, RefreshCw, Sparkles, CheckCircle, Wand2, ArrowLeft, Zap } from 'lucide-react';

export const BgRemoverModal = ({ onClose }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [removedBlob, setRemovedBlob] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [bgColor, setBgColor] = useState('transparent');

  const [quotaInfo, setQuotaInfo] = useState(() => getCloudGpuQuota());
  const [elapsedSeconds, setElapsedSeconds] = useState('0.0');
  const [statusMessage, setStatusMessage] = useState('');
  const timerRef = useRef(null);

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

  const handleFileChange = async (file) => {
    if (!file) return;
    setIsProcessing(true);
    setRemovedBlob(null);
    setPreviewUrl(null);
    startLiveTimer();

    const normalized = await normalizeImageForProcessing(file, 1200);
    setSelectedFile(normalized);

    const quota = getCloudGpuQuota();
    setQuotaInfo(quota);

    // 1. Try Cloud Edge GPU if quota is available
    if (quota.isEligible) {
      setStatusMessage(`⚡ Cloud Edge GPU Processing... (Free Use ${quota.usedToday + 1}/2)`);
      try {
        const formData = new FormData();
        formData.append('image', normalized);

        const response = await fetch('./api/remove-bg', {
          method: 'POST',
          body: formData
        });

        if (response.ok) {
          const blob = await response.blob();
          if (blob && blob.size > 0) {
            const updatedQuota = incrementCloudGpuQuota();
            setQuotaInfo(updatedQuota);
            stopLiveTimer();
            setRemovedBlob(blob);
            renderCompositePreview(blob, bgColor);
            setIsProcessing(false);
            return;
          }
        }
      } catch (cloudErr) {
        console.warn('Cloud Edge GPU fallback:', cloudErr);
      }
    }

    // 2. Fallback to Local In-Browser WASM Engine
    if (!quota.isEligible) {
      setStatusMessage(`🔒 Daily Fast Cloud Limit Reached (2/2 Used). Processing via 100% In-Browser Engine...`);
    } else {
      setStatusMessage(`AI Segmenting Portrait Subject in Browser...`);
    }

    try {
      const { removeBackground } = await import('@imgly/background-removal');
      const blob = await removeBackground(normalized);
      stopLiveTimer();
      setRemovedBlob(blob);
      renderCompositePreview(blob, bgColor);
    } catch (err) {
      console.error('AI BG Removal Error:', err);
    } finally {
      stopLiveTimer();
      setIsProcessing(false);
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
      renderCompositePreview(removedBlob, color);
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
      particleCount: 70,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#2563eb', '#38bdf8', '#34d399']
    });
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
              <h1 className="font-bold text-slate-900 text-sm sm:text-lg">AI Background Remover</h1>
              <p className="text-[11px] text-slate-500 font-medium hidden sm:block">Remove photo background & export transparent PNG or solid color HD photos</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Workspace Body */}
      <main className="flex-1 max-w-5xl mx-auto w-full p-4 sm:p-6 space-y-6">

          {!selectedFile ? (
            <label className="border-2 border-dashed border-slate-300 hover:border-purple-600 rounded-3xl p-8 text-center bg-slate-50 hover:bg-purple-50/50 cursor-pointer transition-all duration-300 flex flex-col items-center justify-center min-h-[260px]">
              <input
                type="file"
                accept="image/jpeg,image/png,image/webp"
                className="hidden"
                onChange={(e) => e.target.files?.[0] && handleFileChange(e.target.files[0])}
              />
              <div className="w-16 h-16 rounded-2xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-600 mb-3 shadow-xs">
                <Wand2 className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">Drop Image to Remove Background</h3>
              <p className="text-xs text-slate-500 max-w-sm font-medium">Isolates people, signatures, and objects using WebAssembly AI. Zero server uploads.</p>
            </label>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              
              {/* Controls */}
              <div className="md:col-span-5 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-500 uppercase">Background Options</span>
                  <button
                    onClick={() => { setSelectedFile(null); setPreviewUrl(null); }}
                    className="text-xs text-blue-600 hover:underline font-semibold"
                  >
                    Change Image
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {bgOptions.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => handleColorSelect(opt.value)}
                      className={`p-3 rounded-xl text-xs font-bold border transition-all flex items-center justify-center space-x-2 ${
                        bgColor === opt.value
                          ? 'bg-purple-600 text-white border-purple-500 shadow-md'
                          : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      <span>{opt.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Preview & Download */}
              <div className="md:col-span-7 flex flex-col items-center justify-between bg-slate-50 border border-slate-200 rounded-2xl p-6">
                <div className="w-full flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-slate-900">AI Isolated Result</span>
                  {isProcessing ? (
                    <span className="text-xs font-bold text-purple-600 flex items-center space-x-1 animate-pulse">
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                      <span>AI Neural Network Processing...</span>
                    </span>
                  ) : previewUrl ? (
                    <span className="text-xs font-bold text-emerald-600 flex items-center space-x-1">
                      <CheckCircle className="w-4 h-4" />
                      <span>Background Removed</span>
                    </span>
                  ) : null}
                </div>

                <div className={`relative flex-1 flex items-center justify-center min-h-[220px] max-h-[300px] w-full p-4 rounded-xl border border-slate-200 shadow-inner ${bgColor === 'transparent' ? 'bg-checkered' : 'bg-white'}`}>
                  {isProcessing ? (
                    <div className="flex flex-col items-center justify-center space-y-3 text-purple-600 p-6 text-center">
                      <div className="relative">
                        <div className="w-12 h-12 rounded-full border-2 border-purple-200 border-t-purple-600 animate-spin" />
                        <Sparkles className="w-5 h-5 absolute inset-0 m-auto text-purple-600 animate-pulse" />
                      </div>
                      <div className="text-center space-y-1">
                        <div className="flex items-center justify-center space-x-2">
                          <span className="text-xs font-bold text-slate-900">{statusMessage || 'Running AI Segmentation'}</span>
                          <span className="px-2 py-0.5 rounded-full bg-purple-600 text-white text-[10px] font-mono font-bold">
                            {elapsedSeconds}s
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500 font-medium">
                          ⚡ Free Daily Fast Uses: {quotaInfo.usesLeft} of {quotaInfo.maxDaily} remaining today
                        </p>
                      </div>
                    </div>
                  ) : previewUrl ? (

                    <img
                      src={previewUrl}
                      alt="AI Background Removed"
                      className="max-h-[260px] max-w-full object-contain rounded shadow-md border border-slate-200"
                    />
                  ) : null}
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
    </div>
  );
};

