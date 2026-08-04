import React, { useState, useEffect, useRef } from 'react';
import { processSarkariImage } from '../utils/imageEngine';
import confetti from 'canvas-confetti';
import { 
  Upload, Download, X, RefreshCw, Sliders, Calendar, User, 
  CheckCircle, Sparkles, Wand2, ArrowRight, ZoomIn, Palette
} from 'lucide-react';

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

  // Default Background Removal = ON for passport photos and custom presets
  const [changeBg, setChangeBg] = useState(preset.defaultChangeBg !== undefined ? preset.defaultChangeBg : (preset.type === 'photo' || preset.id === 'custom-resizer'));
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
  const [customTargetKb, setCustomTargetKb] = useState(preset.targetKb);

  const fileInputRef = useRef(null);

  const [cachedSubjectBlob, setCachedSubjectBlob] = useState(null);

  const colorOptions = [
    { label: 'White', value: '#FFFFFF' },
    { label: 'Royal Blue', value: '#2563EB' },
    { label: 'Sky Blue', value: '#93C5FD' },
    { label: 'Transparent', value: 'transparent' },
  ];

  const handleFileChange = (file) => {
    if (!file) return;
    setSelectedFile(file);
    setCachedSubjectBlob(null);
    setResult(null);
  };

  useEffect(() => {
    if (!selectedFile) return;

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
          bgColor,
          changeBg,
          zoomScale,
          panX,
          panY,
          preExtractedSubjectBlob: cachedSubjectBlob
        });

        if (isMounted) {
          setResult(processed);
          if (processed.extractedSubjectBlob) {
            setCachedSubjectBlob(processed.extractedSubjectBlob);
          }
        }
      } catch (err) {
        console.error('Processing failed:', err);
      } finally {
        if (isMounted) setIsProcessing(false);
      }
    };

    const timeout = setTimeout(runProcessing, 150);
    return () => {
      isMounted = false;
      clearTimeout(timeout);
    };
  }, [
    selectedFile, preset, showNameDate, candidateName, photoDate, enhanceSignature, 
    bgColor, changeBg, zoomScale, panX, panY, cachedSubjectBlob,
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/40 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden my-auto max-h-[94vh] flex flex-col text-slate-900">
        
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-200 flex items-center justify-between bg-slate-50/80">
          <div>
            <div className="flex items-center space-x-2">
              <h2 className="font-bold text-slate-900 text-lg font-['Outfit']">{preset.name}</h2>
              <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-blue-50 text-blue-700 border border-blue-200">
                {preset.exam}
              </span>
            </div>
            <p className="text-xs text-slate-500 font-medium">Target Range: {customMinKb || preset.minKb}KB – {customMaxKb || preset.maxKb}KB • {customWidth || preset.widthPx} × {customHeight || preset.heightPx} px</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-900 hover:bg-slate-200 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 bg-white">
          {!selectedFile ? (
            <div
              onClick={() => fileInputRef.current?.click()}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault();
                if (e.dataTransfer.files?.[0]) handleFileChange(e.dataTransfer.files[0]);
              }}
              className="border-2 border-dashed border-slate-300 hover:border-blue-600 rounded-3xl p-8 text-center bg-slate-50 hover:bg-blue-50/50 cursor-pointer transition-all duration-300 group flex flex-col items-center justify-center min-h-[280px]"
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
              <h3 className="text-lg font-bold text-slate-900 mb-1">
                Drop your photo or signature here
              </h3>
              <p className="text-xs text-slate-500 max-w-sm mb-4 font-medium">
                Supports JPG, PNG, WEBP. Processed 100% locally inside your browser memory.
              </p>
              <span className="btn-gradient px-5 py-2.5 rounded-xl text-white font-semibold text-xs inline-flex items-center space-x-2">
                <span>Browse File</span>
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Controls */}
              <div className="lg:col-span-5 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Controls & Framing</span>
                  <button
                    onClick={() => setSelectedFile(null)}
                    className="text-xs text-blue-600 hover:underline flex items-center space-x-1 font-semibold"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>Change Image</span>
                  </button>
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

                {/* Signature Pure White Paper Cleanup Toggle */}
                {preset.type === 'signature' && (
                  <div className="p-4 rounded-2xl bg-purple-50 border border-purple-200 flex items-center justify-between">
                    <div className="space-y-0.5">
                      <div className="flex items-center space-x-2 text-xs font-bold text-purple-700">
                        <Wand2 className="w-4 h-4" />
                        <span>Pure White Paper Cleanup</span>
                      </div>
                      <p className="text-[11px] text-slate-600 font-medium">Converts gray paper shadows to 100% pure white paper</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={enhanceSignature}
                        onChange={(e) => setEnhanceSignature(e.target.checked)}
                        className="sr-only peer"
                      />
                      <div className="w-9 h-5 bg-slate-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-purple-600"></div>
                    </label>
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
                      <span className="text-xs font-semibold">Running AI segmentation & canvas compression...</span>
                    </div>
                  ) : result ? (
                    <img
                      src={result.downloadUrl}
                      alt="Processed Preview"
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
        </div>
      </div>
    </div>
  );
};
