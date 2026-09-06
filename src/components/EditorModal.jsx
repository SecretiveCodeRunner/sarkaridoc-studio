import React, { useState, useEffect, useRef } from 'react';
import { processSarkariImage, normalizeImageForProcessing } from '../utils/imageEngine';
import confetti from 'canvas-confetti';
import { 
  Upload, Download, RefreshCw, Sliders, 
  CheckCircle, Sparkles, Wand2, ArrowRight, ZoomIn, Palette, ArrowLeft, Crop, Zap
} from 'lucide-react';
import { ImageCropModal } from './ImageCropModal';
import { ProcessingStepsGuide } from './ProcessingStepsGuide';



export const EditorModal = ({ preset, onClose }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [result, setResult] = useState(null);

  // Form Inputs & Optional Name/Date Toggle
  const [showNameDate, setShowNameDate] = useState(preset.requiresNameDate || false);
  const [candidateName, setCandidateName] = useState('');
  const [photoDate, setPhotoDate] = useState(() => new Date().toISOString().split('T')[0]);

  // Default Signature Cleanup = ON by default for pure white paper
  const [enhanceSignature, setEnhanceSignature] = useState(true);
  const [signatureEngine, setSignatureEngine] = useState('neural'); // 'neural' (verified neural AI) | 'adaptive' (canvas normalizer)

  // Default AI Background Removal = OFF by default for fast 0.05s exam photo resizing! (User can toggle ON)
  const [changeBg, setChangeBg] = useState(preset.defaultChangeBg || false);
  const [bgColor, setBgColor] = useState(preset.defaultBgColor || '#FFFFFF');

  // Interactive Framing & Zoom Controls
  const [zoomScale, setZoomScale] = useState(1.0);
  const [panX, setPanX] = useState(0);
  const [panY, setPanY] = useState(0);
  
  // Custom Controls (if Custom Preset)
  const [customWidth, setCustomWidth] = useState(preset.widthPx);
  const [customHeight, setCustomHeight] = useState(preset.heightPx);
  const [customMinKb, setCustomMinKb] = useState(preset.minKb);
  const [customMaxKb, setCustomMaxKb] = useState(preset.maxKb);
  const [customTargetKb, _setCustomTargetKb] = useState(preset.targetKb);

  const fileInputRef = useRef(null);
  const cachedSubjectBlobRef = useRef(null);
  const runVersionRef = useRef(0);

  const colorOptions = [
    { label: 'White', value: '#FFFFFF' },
    { label: 'Royal Blue', value: '#2563EB' },
    { label: 'Sky Blue', value: '#93C5FD' },
    { label: 'Transparent', value: 'transparent' },
  ];

  // Interactive Cropper Modal state
  const [cropModalOpen, setCropModalOpen] = useState(false);
  const [cropSourceUrl, setCropSourceUrl] = useState(null);

  const handleFileChange = async (file) => {
    if (!file) return;
    runVersionRef.current++;
    cachedSubjectBlobRef.current = null;
    setResult(null);

    // Normalize raw camera photo to max 1600px for cropping
    const normalized = await normalizeImageForProcessing(file, 1600);
    const objectUrl = URL.createObjectURL(normalized);
    setCropSourceUrl(objectUrl);
    setCropModalOpen(true);
  };

  const handleCropComplete = async (croppedBlob) => {
    setCropModalOpen(false);
    const normalized = await normalizeImageForProcessing(croppedBlob, 1200);
    setSelectedFile(normalized);
  };


  useEffect(() => {
    if (!selectedFile) return;

    const currentVersion = ++runVersionRef.current;
    let isMounted = true;

    const runProcessing = async () => {
      setIsProcessing(true);
      try {
        const customSettings = preset.id === 'custom-resizer' ? {
          widthPx: Number(customWidth),
          heightPx: Number(customHeight),
          minKb: Number(customMinKb),
          maxKb: Number(customMaxKb),
          targetKb: Number(customTargetKb),
          format: 'image/jpeg'
        } : null;

        const processed = await processSarkariImage({
          imageFile: selectedFile,
          preset,
          customSettings,
          candidateName: showNameDate ? candidateName : '',
          photoDate: showNameDate ? photoDate : '',
          enhanceSignature,
          signatureEngine,
          bgColor,
          changeBg,
          zoomScale,
          panX,
          panY,
          preExtractedSubjectBlob: cachedSubjectBlobRef.current
        });

        if (isMounted && runVersionRef.current === currentVersion) {
          setResult(processed);
          if (processed.extractedSubjectBlob) {
            cachedSubjectBlobRef.current = processed.extractedSubjectBlob;
          }
        }
      } catch (err) {
        console.error('Processing failed:', err);
      } finally {
        if (isMounted && runVersionRef.current === currentVersion) {
          setIsProcessing(false);
        }
      }
    };

    const timeout = setTimeout(runProcessing, 100);
    return () => {
      isMounted = false;
      clearTimeout(timeout);
    };
  }, [
    selectedFile, preset, showNameDate, candidateName, photoDate, enhanceSignature, signatureEngine,
    bgColor, changeBg, zoomScale, panX, panY,
    customWidth, customHeight, customMinKb, customMaxKb, customTargetKb
  ]);

  const handleDownload = () => {
    if (!result) return;
    const link = document.createElement('a');
    link.href = result.downloadUrl;
    link.download = `SarkariDoc_${preset.id}_${Date.now()}.${result.format || 'jpg'}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.8 },
      colors: ['#2563eb', '#38bdf8', '#34d399', '#f59e0b']
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-['Outfit'] text-slate-900 antialiased">
      {/* Sticky Workspace Top Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30 px-4 sm:px-8 py-3.5 flex items-center justify-between shadow-xs safe-area-top">
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
          <div>
            <div className="flex items-center space-x-2">
              <h1 className="font-bold text-slate-900 text-sm sm:text-lg">{preset.name}</h1>
              <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                {preset.exam}
              </span>
            </div>
            <p className="text-[11px] text-slate-500 font-medium hidden sm:block">Target Range: {customMinKb || preset.minKb}KB – {customMaxKb || preset.maxKb}KB • {customWidth || preset.widthPx} × {customHeight || preset.heightPx} px</p>
          </div>
        </div>
      </header>

      {/* Main Workspace Area */}
      <main className="flex-1 max-w-6xl mx-auto w-full p-4 sm:p-6 space-y-6">

          {!selectedFile ? (
            <div className="space-y-6">
              <div
                onClick={() => fileInputRef.current?.click()}
                onDragOver={(e) => e.preventDefault()}
                onDrop={(e) => {
                  e.preventDefault();
                  if (e.dataTransfer.files?.[0]) handleFileChange(e.dataTransfer.files[0]);
                }}
                className="border-2 border-dashed border-slate-300 hover:border-blue-600 rounded-3xl p-8 text-center bg-slate-50 hover:bg-blue-50/50 cursor-pointer transition-all duration-300 group flex flex-col items-center justify-center min-h-[260px]"
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/jpeg,image/png,image/webp"
                  className="hidden"
                  onChange={(e) => e.target.files?.[0] && handleFileChange(e.target.files[0])}
                />
                <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform mb-4 shadow-sm">
                  <Upload className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-1" style={{ fontFamily: "'Lexend', sans-serif" }}>
                  {preset.type === 'signature' ? 'Upload Signature Image' : 'Upload Candidate Photo'}
                </h3>
                <p className="text-xs text-slate-500 max-w-sm mb-4 font-medium">
                  {preset.type === 'signature'
                    ? 'Take a photo of your signature signed with blue/black pen on white paper.'
                    : 'Supports JPG, PNG, WEBP. Processed 100% locally inside your browser memory.'}
                </p>
                <span className="btn-gradient px-5 py-2.5 rounded-xl text-white font-semibold text-xs inline-flex items-center space-x-2">
                  <span>Browse File</span>
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>

              {/* Step-by-Step Workflow Guide Below Upload Button */}
              <ProcessingStepsGuide
                mode={preset.type}
                presetName={preset.name}
                targetRatio={`${preset.widthPx} × ${preset.heightPx} px`}
                targetKb={`${preset.minKb} – ${preset.maxKb} KB`}
              />
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Controls */}
              <div className="lg:col-span-5 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Controls & Framing</span>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => {
                        if (selectedFile) {
                          setCropSourceUrl(URL.createObjectURL(selectedFile));
                          setCropModalOpen(true);
                        }
                      }}
                      className="text-xs text-blue-700 bg-blue-50 border border-blue-200 px-2.5 py-1 rounded-lg hover:bg-blue-100 flex items-center space-x-1 font-semibold shadow-xs"
                    >
                      <Crop className="w-3.5 h-3.5 text-blue-600" />
                      <span>Re-crop</span>
                    </button>
                    <button
                      onClick={() => setSelectedFile(null)}
                      className="text-xs text-slate-500 hover:text-slate-800 hover:underline flex items-center space-x-1 font-semibold"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>Change</span>
                    </button>
                  </div>
                </div>

                {/* AI Background Removal & Color Controls for Photos & Custom */}
                {(preset.type === 'photo' || preset.id === 'custom-resizer') && (
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-xs font-bold text-blue-600">
                        <Palette className="w-4 h-4" />
                        <span>AI Background Removal</span>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={changeBg}
                          onChange={(e) => setChangeBg(e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-9 h-5 bg-slate-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>

                    {changeBg && (
                      <div className="grid grid-cols-4 gap-1.5 pt-1">
                        {colorOptions.map((c) => (
                          <button
                            key={c.value}
                            onClick={() => setBgColor(c.value)}
                            className={`py-1.5 rounded-lg text-[10px] font-bold border transition-all flex items-center justify-center space-x-1 ${
                              bgColor === c.value
                                ? 'ring-2 ring-blue-600 border-blue-500 text-slate-900 bg-white shadow-xs'
                                : 'border-slate-200 text-slate-600 hover:text-slate-900 bg-white'
                            }`}
                          >
                            <span className="w-2.5 h-2.5 rounded-full border border-slate-300" style={{ backgroundColor: c.value }} />
                            <span>{c.label}</span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Custom Dimensions Controls (if Custom Preset) */}
                {preset.id === 'custom-resizer' && (
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                    <div className="flex items-center space-x-2 text-xs font-bold text-emerald-600">
                      <Sliders className="w-4 h-4" />
                      <span>Custom Dimensions & Target KB</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-[10px] font-medium text-slate-500 mb-1">Width (px)</label>
                        <input
                          type="number"
                          value={customWidth}
                          onChange={(e) => setCustomWidth(e.target.value)}
                          className="w-full px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 text-xs text-slate-900 font-semibold"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-medium text-slate-500 mb-1">Height (px)</label>
                        <input
                          type="number"
                          value={customHeight}
                          onChange={(e) => setCustomHeight(e.target.value)}
                          className="w-full px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 text-xs text-slate-900 font-semibold"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="block text-[10px] font-medium text-slate-500 mb-1">Min KB</label>
                        <input
                          type="number"
                          value={customMinKb}
                          onChange={(e) => setCustomMinKb(e.target.value)}
                          className="w-full px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 text-xs text-slate-900 font-semibold"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-medium text-slate-500 mb-1">Max KB</label>
                        <input
                          type="number"
                          value={customMaxKb}
                          onChange={(e) => setCustomMaxKb(e.target.value)}
                          className="w-full px-2.5 py-1.5 rounded-lg bg-white border border-slate-200 text-xs text-slate-900 font-semibold"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Signature Verified Engine & Pure White Paper Cleanup */}
                {preset.type === 'signature' && (
                  <div className="p-4 rounded-2xl bg-purple-50/80 border border-purple-200 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="space-y-0.5">
                        <div className="flex items-center space-x-2 text-xs font-bold text-purple-700">
                          <Wand2 className="w-4 h-4" />
                          <span>Verified Signature Engine</span>
                        </div>
                        <p className="text-[11px] text-slate-600 font-medium">Converts paper shadows to 100% pure white paper</p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={enhanceSignature}
                          onChange={(e) => {
                            cachedSubjectBlobRef.current = null;
                            setEnhanceSignature(e.target.checked);
                          }}
                          className="sr-only peer"
                        />
                        <div className="w-9 h-5 bg-slate-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-purple-600"></div>
                      </label>
                    </div>

                    {enhanceSignature && (
                      <div className="grid grid-cols-2 gap-2 pt-1">
                        <button
                          type="button"
                          onClick={() => {
                            cachedSubjectBlobRef.current = null;
                            setSignatureEngine('neural');
                          }}
                          className={`p-2.5 rounded-xl text-left border transition-all ${
                            signatureEngine === 'neural'
                              ? 'bg-white border-purple-600 ring-2 ring-purple-500/20 shadow-xs'
                              : 'bg-white/60 border-purple-200 hover:bg-white text-slate-700'
                          }`}
                        >
                          <div className="flex items-center space-x-1.5 text-purple-700 font-bold text-xs mb-0.5">
                            <Sparkles className="w-3.5 h-3.5 text-purple-600" />
                            <span>Neural AI (Zero Marks)</span>
                          </div>
                          <p className="text-[10px] text-slate-500 leading-tight">Clean ink stroke isolation without markings</p>
                        </button>

                        <button
                          type="button"
                          onClick={() => {
                            cachedSubjectBlobRef.current = null;
                            setSignatureEngine('adaptive');
                          }}
                          className={`p-2.5 rounded-xl text-left border transition-all ${
                            signatureEngine === 'adaptive'
                              ? 'bg-white border-purple-600 ring-2 ring-purple-500/20 shadow-xs'
                              : 'bg-white/60 border-purple-200 hover:bg-white text-slate-700'
                          }`}
                        >
                          <div className="flex items-center space-x-1.5 text-slate-800 font-bold text-xs mb-0.5">
                            <Zap className="w-3.5 h-3.5 text-emerald-600" />
                            <span>Instant Whitener</span>
                          </div>
                          <p className="text-[10px] text-slate-500 leading-tight">Fast canvas paper whitening (sub-second)</p>
                        </button>
                      </div>
                    )}
                  </div>
                )}

                {/* Zoom & Pan Controls */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                  <div className="flex items-center space-x-2 text-xs font-bold text-emerald-600">
                    <ZoomIn className="w-4 h-4" />
                    <span>Framing & Zoom</span>
                  </div>

                  <div>
                    <div className="flex justify-between text-[10px] text-slate-500 font-medium mb-1">
                      <span>Zoom Scale</span>
                      <span>{Math.round(zoomScale * 100)}%</span>
                    </div>
                    <input
                      type="range"
                      min="0.8"
                      max="2.5"
                      step="0.05"
                      value={zoomScale}
                      onChange={(e) => setZoomScale(Number(e.target.value))}
                      className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <div className="flex justify-between text-[10px] text-slate-500 font-medium mb-1">
                        <span>Horizontal Pan</span>
                        <span>{panX}%</span>
                      </div>
                      <input
                        type="range"
                        min="-50"
                        max="50"
                        value={panX}
                        onChange={(e) => setPanX(Number(e.target.value))}
                        className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                      />
                    </div>
                    <div>
                      <div className="flex justify-between text-[10px] text-slate-500 font-medium mb-1">
                        <span>Vertical Pan</span>
                        <span>{panY}%</span>
                      </div>
                      <input
                        type="range"
                        min="-50"
                        max="50"
                        value={panY}
                        onChange={(e) => setPanY(Number(e.target.value))}
                        className="w-full h-1 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                      />
                    </div>
                  </div>
                </div>

                {/* Optional Name & Date Stamp Toggle */}
                {(preset.requiresNameDate || preset.type === 'photo') && (
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-xs font-bold text-blue-600">
                        <Sparkles className="w-4 h-4" />
                        <span>Name & Date Stamp Overlay</span>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={showNameDate}
                          onChange={(e) => setShowNameDate(e.target.checked)}
                          className="sr-only peer"
                        />
                        <div className="w-9 h-5 bg-slate-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-blue-600"></div>
                      </label>
                    </div>

                    {showNameDate && (
                      <div className="space-y-2 pt-1">
                        <div>
                          <label className="block text-[10px] font-medium text-slate-500 mb-1">Candidate Name</label>
                          <input
                            type="text"
                            value={candidateName}
                            onChange={(e) => setCandidateName(e.target.value)}
                            placeholder="e.g., APURBA KUMAR"
                            className="w-full px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs text-slate-900 font-semibold placeholder-slate-400 focus:border-blue-600 focus:outline-none"
                          />
                        </div>
                        <div>
                          <label className="block text-[10px] font-medium text-slate-500 mb-1">Photo Date (D.O.P)</label>
                          <input
                            type="date"
                            value={photoDate}
                            onChange={(e) => setPhotoDate(e.target.value)}
                            className="w-full px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs text-slate-900 font-semibold focus:border-blue-600 focus:outline-none"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Live Preview */}
              <div className="lg:col-span-7 flex flex-col items-center justify-between bg-slate-50 border border-slate-200 rounded-2xl p-6">
                <div className="w-full flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-slate-900">Live Preview</span>
                  {result && (
                    <div className={`flex items-center space-x-1.5 px-3 py-1 rounded-full text-xs font-bold border ${
                      result.finalKb >= (customMinKb || preset.minKb) && result.finalKb <= (customMaxKb || preset.maxKb)
                        ? 'bg-emerald-50 text-emerald-700 border-emerald-300'
                        : 'bg-amber-50 text-amber-700 border-amber-300'
                    }`}>
                      <CheckCircle className="w-4 h-4" />
                      <span>{result.finalKb} KB (Target: {customMinKb || preset.minKb}-{customMaxKb || preset.maxKb} KB)</span>
                    </div>
                  )}
                </div>

                <div className={`relative flex-1 flex items-center justify-center min-h-[260px] max-h-[340px] w-full p-4 rounded-xl border border-slate-200 shadow-inner ${bgColor === 'transparent' ? 'bg-checkered' : 'bg-white'}`}>
                  {isProcessing ? (
                    <div className="flex flex-col items-center space-y-2 text-blue-600">
                      <RefreshCw className="w-6 h-6 animate-gpu-spin" />
                      <span className="text-xs font-semibold">
                        {preset.type === 'signature'
                          ? (signatureEngine === 'neural' ? '⚡ Verified Neural AI Isolating Signature Strokes...' : 'Cleaning paper background...')
                          : 'Running AI segmentation & canvas compression...'}
                      </span>
                    </div>
                  ) : result ? (
                    <img
                      src={result.downloadUrl}
                      alt="Processed Preview"
                      loading="lazy"
                      decoding="async"
                      className={`max-h-[280px] max-w-full object-contain rounded shadow-md border border-slate-200 ${bgColor === 'transparent' ? 'bg-checkered' : ''}`}
                    />
                  ) : null}
                </div>

                <div className="w-full mt-6 flex items-center space-x-3">
                  <button
                    onClick={handleDownload}
                    disabled={!result || isProcessing}
                    className="w-full btn-gradient py-3.5 px-6 rounded-xl text-white font-bold text-sm flex items-center justify-center space-x-2 shadow-lg disabled:opacity-50"
                  >
                    <Download className="w-5 h-5" />
                    <span>Download Formatted Image ({result?.finalKb || 0} KB)</span>
                  </button>
                </div>

              </div>
            </div>
          )}
        </main>

      {/* Interactive Crop & Align Modal */}
      {cropModalOpen && cropSourceUrl && (
        <ImageCropModal
          imageSrc={cropSourceUrl}
          initialAspect={(preset.widthPx && preset.heightPx) ? (preset.widthPx / preset.heightPx) : (3.5 / 4.5)}
          aspectOptions={[
            { label: `Preset Ratio (${preset.widthPx}×${preset.heightPx})`, value: (preset.widthPx && preset.heightPx) ? (preset.widthPx / preset.heightPx) : (3.5 / 4.5) },
            { label: 'Passport (3.5:4.5)', value: 3.5 / 4.5 },
            { label: 'Square (1:1)', value: 1 / 1 },
            { label: 'Signature (7:2)', value: 7 / 2 },
            { label: 'Freeform', value: null }
          ]}
          title={`Crop & Frame for ${preset.name}`}
          subtitle={`Position subject inside the required ${preset.widthPx} × ${preset.heightPx} px area`}
          onCropComplete={handleCropComplete}
          onCancel={() => setCropModalOpen(false)}
        />
      )}
    </div>
  );
};


