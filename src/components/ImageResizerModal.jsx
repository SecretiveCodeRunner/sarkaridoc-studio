import React, { useState, useEffect } from 'react';
import { binaryCompressToTargetSize, loadImage } from '../utils/imageEngine';
import confetti from 'canvas-confetti';
import { Upload, Download, X, RefreshCw, SlidersHorizontal, CheckCircle } from 'lucide-react';

export const ImageResizerModal = ({ onClose }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState(null);

  // Controls
  const [targetKb, setTargetKb] = useState(100);
  const [targetWidth, setTargetWidth] = useState(800);
  const [targetHeight, setTargetHeight] = useState(600);
  const [format, setFormat] = useState('image/jpeg');

  const handleFileSelect = async (file) => {
    if (!file) return;
    setSelectedFile(file);

    const img = await loadImage(file);
    setTargetWidth(img.width);
    setTargetHeight(img.height);
    setResult(null);
  };

  useEffect(() => {
    if (!selectedFile) return;

    let isMounted = true;
    const processResizing = async () => {
      setIsProcessing(true);
      try {
        const img = await loadImage(selectedFile);
        const canvas = document.createElement('canvas');
        canvas.width = Number(targetWidth) || img.width;
        canvas.height = Number(targetHeight) || img.height;
        const ctx = canvas.getContext('2d');

        ctx.fillStyle = '#FFFFFF';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        const res = await binaryCompressToTargetSize(
          canvas,
          format,
          Math.max(5, targetKb - 20),
          targetKb + 20,
          targetKb
        );

        if (isMounted) {
          setResult({
            ...res,
            downloadUrl: URL.createObjectURL(res.blob),
            ext: format === 'image/png' ? 'png' : format === 'image/webp' ? 'webp' : 'jpg'
          });
        }
      } catch (err) {
        console.error('Image resizer error:', err);
      } finally {
        if (isMounted) setIsProcessing(false);
      }
    };

    const timeout = setTimeout(processResizing, 150);
    return () => {
      isMounted = false;
      clearTimeout(timeout);
    };
  }, [selectedFile, targetKb, targetWidth, targetHeight, format]);

  const handleDownload = () => {
    if (!result) return;
    const link = document.createElement('a');
    link.href = result.downloadUrl;
    link.download = `SarkariDoc_Resized_${Date.now()}.${result.ext}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#2563eb', '#10b981', '#f59e0b']
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/40 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden my-auto flex flex-col text-slate-900">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 border border-blue-200">
              <SlidersHorizontal className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-bold text-slate-900 text-lg font-['Outfit']">General Image Resizer & Format Converter</h2>
              <p className="text-xs text-slate-500 font-medium">Resize any JPG, PNG, WEBP image to exact KB file size or pixel dimensions</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-900 hover:bg-slate-200 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6 bg-white">
          {!selectedFile ? (
            <label className="border-2 border-dashed border-slate-300 hover:border-blue-600 rounded-3xl p-8 text-center bg-slate-50 hover:bg-blue-50/50 cursor-pointer transition-all duration-300 flex flex-col items-center justify-center min-h-[260px]">
              <input
                type="file"
                accept="image/jpeg,image/png,image/webp"
                className="hidden"
                onChange={(e) => e.target.files?.[0] && handleFileSelect(e.target.files[0])}
              />
              <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 mb-3 shadow-xs">
                <Upload className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">Upload Image to Resize</h3>
              <p className="text-xs text-slate-500 max-w-sm font-medium">Supports JPG, PNG, WEBP. Instant client-side compression.</p>
            </label>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              
              {/* Resizer Form Controls */}
              <div className="md:col-span-5 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-500 uppercase">Target Dimensions & KB</span>
                  <button
                    onClick={() => setSelectedFile(null)}
                    className="text-xs text-blue-600 hover:underline font-semibold"
                  >
                    Change Image
                  </button>
                </div>

                {/* KB Slider & Input */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex justify-between items-center text-xs font-bold text-slate-900">
                    <span>Target File Size</span>
                    <div className="flex items-center space-x-1">
                      <input
                        type="number"
                        value={targetKb}
                        onChange={(e) => setTargetKb(Number(e.target.value))}
                        className="w-16 px-2 py-1 rounded bg-white border border-slate-200 text-xs font-bold text-blue-600 text-center shadow-xs"
                      />
                      <span className="text-slate-500">KB</span>
                    </div>
                  </div>

                  <input
                    type="range"
                    min="10"
                    max="1000"
                    step="10"
                    value={targetKb}
                    onChange={(e) => setTargetKb(Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />
                </div>

                {/* Pixel Dimensions */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                  <span className="text-xs font-bold text-slate-900">Pixel Dimensions</span>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[10px] font-medium text-slate-500 mb-1">Width (px)</label>
                      <input
                        type="number"
                        value={targetWidth}
                        onChange={(e) => setTargetWidth(Number(e.target.value))}
                        className="w-full px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs text-slate-900 font-semibold"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-medium text-slate-500 mb-1">Height (px)</label>
                      <input
                        type="number"
                        value={targetHeight}
                        onChange={(e) => setTargetHeight(Number(e.target.value))}
                        className="w-full px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs text-slate-900 font-semibold"
                      />
                    </div>
                  </div>
                </div>

                {/* Format Output Selector */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <span className="text-xs font-bold text-slate-900">Export Format</span>
                  <div className="flex space-x-2">
                    {[
                      { label: 'JPG', val: 'image/jpeg' },
                      { label: 'PNG', val: 'image/png' },
                      { label: 'WEBP', val: 'image/webp' },
                    ].map((fmt) => (
                      <button
                        key={fmt.val}
                        onClick={() => setFormat(fmt.val)}
                        className={`flex-1 py-2 rounded-xl text-xs font-bold transition-all ${
                          format === fmt.val
                            ? 'bg-blue-600 text-white shadow-md'
                            : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {fmt.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Preview & Download */}
              <div className="md:col-span-7 flex flex-col items-center justify-between bg-slate-50 border border-slate-200 rounded-2xl p-6">
                <div className="w-full flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-slate-900">Live Preview</span>
                  {result && (
                    <span className="text-xs font-bold text-emerald-600 flex items-center space-x-1">
                      <CheckCircle className="w-4 h-4" />
                      <span>{result.finalKb} KB</span>
                    </span>
                  )}
                </div>

                <div className="relative flex-1 flex items-center justify-center min-h-[220px] max-h-[300px] w-full p-4 bg-white rounded-xl border border-slate-200 shadow-inner">
                  {isProcessing ? (
                    <div className="flex flex-col items-center space-y-2 text-blue-600">
                      <RefreshCw className="w-6 h-6 animate-spin" />
                      <span className="text-xs font-semibold">Resizing image...</span>
                    </div>
                  ) : result ? (
                    <img
                      src={result.downloadUrl}
                      alt="Resized Result"
                      className="max-h-[260px] max-w-full object-contain rounded shadow-md border border-slate-200"
                    />
                  ) : null}
                </div>

                <button
                  onClick={handleDownload}
                  disabled={!result || isProcessing}
                  className="w-full mt-6 btn-gradient py-3.5 px-6 rounded-xl text-white font-bold text-sm flex items-center justify-center space-x-2 shadow-lg disabled:opacity-50"
                >
                  <Download className="w-5 h-5" />
                  <span>Download Resized Image ({result?.finalKb || 0} KB)</span>
                </button>
              </div>

            </div>
          )}
        </div>

      </div>
    </div>
  );
};
