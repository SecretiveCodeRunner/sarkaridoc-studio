import React, { useState } from 'react';
import { removeBackground } from '@imgly/background-removal';
import confetti from 'canvas-confetti';
import { Upload, Download, X, RefreshCw, Sparkles, CheckCircle, Wand2 } from 'lucide-react';

export const BgRemoverModal = ({ onClose }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [removedBlob, setRemovedBlob] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [bgColor, setBgColor] = useState('transparent');

  const bgOptions = [
    { label: 'Transparent', value: 'transparent' },
    { label: 'White', value: '#FFFFFF' },
    { label: 'Royal Blue', value: '#2563EB' },
    { label: 'Sky Blue', value: '#93C5FD' },
  ];

  const handleFileChange = async (file) => {
    if (!file) return;
    setSelectedFile(file);
    setIsProcessing(true);
    setRemovedBlob(null);
    setPreviewUrl(null);

    try {
      // Run AI Background Removal
      const blob = await removeBackground(file);
      setRemovedBlob(blob);
      renderCompositePreview(blob, bgColor);
    } catch (err) {
      console.error('AI BG Removal Error:', err);
    } finally {
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
      const compositeUrl = canvas.toDataURL(color === 'transparent' ? 'image/png' : 'image/jpeg', 0.95);
      setPreviewUrl(compositeUrl);
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl glass-panel rounded-3xl border border-slate-800 shadow-2xl overflow-hidden my-auto flex flex-col">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/60">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/20">
              <Wand2 className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-bold text-white text-lg font-['Outfit']">Standalone AI Background Remover</h2>
              <p className="text-xs text-slate-400">100% In-Browser AI Neural Network — Removes photo backgrounds in 1 click</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6">
          {!selectedFile ? (
            <label className="border-2 border-dashed border-slate-700 hover:border-purple-500/80 rounded-3xl p-8 text-center bg-slate-900/40 hover:bg-purple-950/20 cursor-pointer transition-all duration-300 flex flex-col items-center justify-center min-h-[260px]">
              <input
                type="file"
                accept="image/jpeg,image/png,image/webp"
                className="hidden"
                onChange={(e) => e.target.files?.[0] && handleFileChange(e.target.files[0])}
              />
              <div className="w-16 h-16 rounded-2xl bg-purple-600/10 border border-purple-500/20 flex items-center justify-center text-purple-400 mb-3 shadow-lg shadow-purple-500/10">
                <Wand2 className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-white mb-1">Drop Image to Remove Background</h3>
              <p className="text-xs text-slate-400 max-w-sm">Isolates people, signatures, and objects using WebAssembly AI. Zero server uploads.</p>
            </label>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              
              {/* Controls */}
              <div className="md:col-span-5 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-400 uppercase">Background Options</span>
                  <button
                    onClick={() => { setSelectedFile(null); setPreviewUrl(null); }}
                    className="text-xs text-blue-400 hover:underline"
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
                          ? 'bg-purple-600 text-white border-purple-400 shadow-md'
                          : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
                      }`}
                    >
                      <span>{opt.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Preview & Download */}
              <div className="md:col-span-7 flex flex-col items-center justify-between bg-slate-900/40 border border-slate-800 rounded-2xl p-6">
                <div className="w-full flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-slate-300">AI Isolated Result</span>
                  {isProcessing ? (
                    <span className="text-xs font-bold text-purple-400 flex items-center space-x-1 animate-pulse">
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                      <span>AI Neural Network Processing...</span>
                    </span>
                  ) : previewUrl ? (
                    <span className="text-xs font-bold text-emerald-400 flex items-center space-x-1">
                      <CheckCircle className="w-4 h-4" />
                      <span>Background Removed</span>
                    </span>
                  ) : null}
                </div>

                <div className="relative flex-1 flex items-center justify-center min-h-[220px] max-h-[300px] w-full p-4 bg-slate-950/80 rounded-xl border border-slate-800 shadow-inner">
                  {isProcessing ? (
                    <div className="flex flex-col items-center justify-center space-y-3 text-purple-400 p-6">
                      <div className="relative">
                        <div className="w-12 h-12 rounded-full border-2 border-purple-500/20 border-t-purple-500 animate-spin" />
                        <Sparkles className="w-5 h-5 absolute inset-0 m-auto text-purple-400 animate-pulse" />
                      </div>
                      <div className="text-center">
                        <span className="text-xs font-bold text-white block mb-0.5">Running AI Segmentation</span>
                        <span className="text-[11px] text-slate-400">Processing image in local browser memory...</span>
                      </div>
                    </div>
                  ) : previewUrl ? (
                    <img
                      src={previewUrl}
                      alt="AI Background Removed"
                      className="max-h-[260px] max-w-full object-contain rounded shadow-lg"
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
        </div>

      </div>
    </div>
  );
};
