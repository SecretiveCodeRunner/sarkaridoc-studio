import React, { useState, useEffect } from 'react';
import { binaryCompressToTargetSize, loadImage } from '../utils/imageEngine';
import { Upload, Download, RefreshCw, SlidersHorizontal, CheckCircle, ArrowLeft, Crop } from 'lucide-react';
import { ImageCropModal } from './ImageCropModal';
import { ProcessingStepsGuide } from './ProcessingStepsGuide';
import { downloadFile } from '../utils/downloadHelper';
import { formatFileSize } from '../utils/formatUtils';


export const ImageResizerModal = ({ onClose }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState(null);

  // Controls
  const [targetKb, setTargetKb] = useState(100);
  const [targetWidth, setTargetWidth] = useState(800);
  const [targetHeight, setTargetHeight] = useState(600);
  const [format, setFormat] = useState('image/jpeg');

  // Interactive Cropper Modal state
  const [cropModalOpen, setCropModalOpen] = useState(false);
  const [cropSourceUrl, setCropSourceUrl] = useState(null);

  const handleFileSelect = async (file) => {
    if (!file) return;
    const objectUrl = URL.createObjectURL(file);
    setCropSourceUrl(objectUrl);
    setCropModalOpen(true);
  };

  const handleCropComplete = async (croppedBlob) => {
    setCropModalOpen(false);
    setSelectedFile(croppedBlob);

    const img = await loadImage(croppedBlob);
    setTargetWidth(img.width);
    setTargetHeight(img.height);
    setResult(null);
  };


  useEffect(() => {
    if (!selectedFile) return;

    let isMounted = true;
    const processResizing = async () => {
      setIsProcessing(true);
      // Yield to browser UI thread so touch scrolling and spinner render smoothly
      await new Promise((r) => setTimeout(r, 40));

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
          0,
          targetKb,
          targetKb
        );

        if (isMounted) {
          setResult({
            ...res,
            downloadUrl: URL.createObjectURL(res.blob),
            ext: format === 'image/png' ? 'png' : 'jpg'
          });
        }
      } catch (err) {
        console.error('Image Resizer Error:', err);
      } finally {
        if (isMounted) setIsProcessing(false);
      }
    };

    const timeout = setTimeout(processResizing, 200);
    return () => {
      isMounted = false;
      clearTimeout(timeout);
    };
  }, [selectedFile, targetKb, targetWidth, targetHeight, format]);

  const handleDownload = async () => {
    if (!result) return;
    const filename = `SarkariDoc_Resized_${Date.now()}.${result.ext}`;
    await downloadFile({
      blob: result.blob,
      blobUrl: result.downloadUrl,
      filename,
      mimeType: result.ext === 'png' ? 'image/png' : result.ext === 'webp' ? 'image/webp' : 'image/jpeg',
      historyMeta: {
        tool: 'resizer',
        toolName: 'Custom Image Resizer',
        presetName: `${targetWidth}×${targetHeight} (${targetKb} KB)`,
      }
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col font-['Outfit'] text-slate-900 dark:text-slate-100 antialiased">
      {/* Sticky Workspace Top Header */}
      <header className="bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 sticky top-0 z-30 px-4 sm:px-8 py-3.5 flex items-center justify-between shadow-xs safe-area-top">
        <div className="flex items-center space-x-3">
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 flex items-center space-x-1.5 font-bold text-xs transition-all border border-slate-200 dark:border-slate-700"
          >
            <ArrowLeft className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="hidden sm:inline">Back to All Tools</span>
            <span className="sm:hidden">Back</span>
          </button>
          <div className="h-4 w-px bg-slate-200 dark:bg-slate-700" />
          <div className="flex items-center space-x-2">
            <div className="p-1.5 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800/60">
              <SlidersHorizontal className="w-4 h-4" />
            </div>
            <div>
              <h1 className="font-bold text-slate-900 dark:text-white text-sm sm:text-lg">Custom Image KB & Pixel Resizer</h1>
              <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium hidden sm:block">Resize photo file size (KB/MB) and custom pixel dimensions for any document</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Workspace Body */}
      <main className="flex-1 max-w-5xl mx-auto w-full p-4 sm:p-6 space-y-6">

          {!selectedFile ? (
            <div className="space-y-6">
              <label className="border-2 border-dashed border-slate-300 dark:border-slate-700 hover:border-blue-600 dark:hover:border-blue-500 rounded-3xl p-8 text-center bg-white dark:bg-slate-900 hover:bg-blue-50/40 dark:hover:bg-blue-950/20 cursor-pointer transition-all duration-300 flex flex-col items-center justify-center min-h-[260px] shadow-xs">
                <input
                  type="file"
                  accept="image/jpeg,image/png,image/webp"
                  className="hidden"
                  onChange={(e) => e.target.files?.[0] && handleFileSelect(e.target.files[0])}
                />
                <div className="w-16 h-16 rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/60 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-3 shadow-xs">
                  <Upload className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1" style={{ fontFamily: "'Lexend', sans-serif" }}>Upload Image to Resize</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 max-w-sm font-medium">Supports JPG, PNG, WEBP. Instant client-side compression to exact KB.</p>
              </label>

              {/* Step-by-Step Workflow Guide Below Upload Button */}
              <ProcessingStepsGuide
                mode="photo"
                presetName="Custom Resizer"
                targetRatio="Custom / Freeform"
                targetKb="Any exact KB (e.g. 20 KB, 50 KB, 100 KB)"
              />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              
              {/* Resizer Form Controls */}
              <div className="md:col-span-5 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase">Target Dimensions & KB</span>
                  <button
                    onClick={() => setSelectedFile(null)}
                    className="text-xs text-blue-600 dark:text-blue-400 hover:underline font-semibold"
                  >
                    Change Image
                  </button>
                </div>

                {/* KB Slider & Input */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 space-y-3">
                  <div className="flex justify-between items-center text-xs font-bold text-slate-900 dark:text-white">
                    <span>Target File Size</span>
                    <div className="flex items-center space-x-1">
                      <input
                        type="number"
                        value={targetKb}
                        onChange={(e) => setTargetKb(Number(e.target.value))}
                        className="w-20 px-2 py-1 rounded bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-bold text-blue-600 dark:text-blue-400 text-center shadow-xs focus:border-blue-600 outline-none"
                      />
                      <span className="text-slate-500 dark:text-slate-400">KB</span>
                    </div>
                  </div>

                  <input
                    type="range"
                    min="10"
                    max="5000"
                    step="10"
                    value={targetKb}
                    onChange={(e) => setTargetKb(Number(e.target.value))}
                    className="w-full h-1.5 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-600"
                  />

                  <div className="flex items-center space-x-1.5 pt-1">
                    {[100, 200, 300, 500, 1000].map((kbVal) => (
                      <button
                        key={kbVal}
                        onClick={() => setTargetKb(kbVal)}
                        className={`flex-1 py-1 rounded-lg text-[11px] font-bold border transition-all ${
                          targetKb === kbVal
                            ? 'bg-blue-600 text-white border-blue-600 shadow-xs'
                            : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
                        }`}
                      >
                        {kbVal}KB
                      </button>
                    ))}
                  </div>
                </div>

                {/* Pixel Dimensions */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 space-y-3">
                  <span className="text-xs font-bold text-slate-900 dark:text-white">Pixel Dimensions</span>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-[10px] font-medium text-slate-500 dark:text-slate-400 mb-1">Width (px)</label>
                      <input
                        type="number"
                        value={targetWidth}
                        onChange={(e) => setTargetWidth(Number(e.target.value))}
                        className="w-full px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white font-semibold focus:border-blue-600 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] font-medium text-slate-500 dark:text-slate-400 mb-1">Height (px)</label>
                      <input
                        type="number"
                        value={targetHeight}
                        onChange={(e) => setTargetHeight(Number(e.target.value))}
                        className="w-full px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white font-semibold focus:border-blue-600 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Format Output Selector */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 space-y-2">
                  <span className="text-xs font-bold text-slate-900 dark:text-white">Export Format</span>
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
                            : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
                        }`}
                      >
                        {fmt.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Preview & Download */}
              <div className="md:col-span-7 flex flex-col items-center justify-between bg-slate-50 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-2xl p-6">
                <div className="w-full flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-bold text-slate-900 dark:text-white">Live Preview</span>
                    <button
                      onClick={() => {
                        if (selectedFile) {
                          setCropSourceUrl(URL.createObjectURL(selectedFile));
                          setCropModalOpen(true);
                        }
                      }}
                      className="px-2.5 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/60 hover:bg-blue-100 dark:hover:bg-blue-900/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800/60 text-xs font-bold flex items-center space-x-1 transition-all shadow-xs"
                    >
                      <Crop className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                      <span>Crop / Frame</span>
                    </button>
                  </div>
                  {result && (
                    <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 flex items-center space-x-1">
                      <CheckCircle className="w-4 h-4" />
                      <span>{formatFileSize(result.finalKb, 'kb')}</span>
                    </span>
                  )}
                </div>

                <div className="relative flex-1 flex items-center justify-center min-h-[220px] max-h-[300px] w-full p-4 bg-white dark:bg-slate-950 rounded-xl border border-slate-200 dark:border-slate-800 shadow-inner">
                  {isProcessing ? (
                    <div className="flex flex-col items-center space-y-2 text-blue-600 dark:text-blue-400">
                      <RefreshCw className="w-6 h-6 animate-spin" />
                      <span className="text-xs font-semibold">Resizing image...</span>
                    </div>
                  ) : result ? (
                    <img
                      src={result.downloadUrl}
                      alt="Resized Result"
                      className="max-h-[260px] max-w-full object-contain rounded shadow-md border border-slate-200 dark:border-slate-800"
                    />
                  ) : null}
                </div>

                <button
                  onClick={handleDownload}
                  disabled={!result || isProcessing}
                  className="w-full mt-6 btn-gradient py-3.5 px-6 rounded-xl text-white font-bold text-sm flex items-center justify-center space-x-2 shadow-lg disabled:opacity-50"
                >
                  <Download className="w-5 h-5" />
                  <span>Download Resized Image ({formatFileSize(result?.finalKb || 0, 'kb')})</span>
                </button>
              </div>

            </div>
          )}
        </main>

      {/* Interactive Crop & Align Modal */}
      {cropModalOpen && cropSourceUrl && (
        <ImageCropModal
          imageSrc={cropSourceUrl}
          initialAspect={null}
          aspectOptions={[
            { label: 'Freeform', value: null },
            { label: 'Square (1:1)', value: 1 / 1 },
            { label: 'Passport (3.5:4.5)', value: 3.5 / 4.5 },
            { label: 'Landscape (4:3)', value: 4 / 3 },
            { label: 'Widescreen (16:9)', value: 16 / 9 },
          ]}
          title="Crop & Frame Image"
          subtitle="Drag to select and position the area to resize"
          onCropComplete={handleCropComplete}
          onCancel={() => setCropModalOpen(false)}
        />
      )}
    </div>
  );
};

