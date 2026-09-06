import React, { useState, useRef, useEffect } from 'react';
import { convertImagesToPdf, compressExistingPdf, mergePdfFiles, convertPdfToImages } from '../utils/pdfEngine';
import confetti from 'canvas-confetti';
import { 
  Upload, Download, FileText, CheckCircle, RefreshCw, FilePlus, 
  Layers, ArrowLeft, Camera, Sliders, Image as ImageIcon, Merge, 
  Trash2, ArrowUp, ArrowDown, Sparkles
} from 'lucide-react';
import { downloadFile } from '../utils/downloadHelper';
import { formatFileSize } from '../utils/formatUtils';

const TOOL_CONFIG = {
  'image-to-pdf': {
    id: 'image-to-pdf',
    title: 'Image to PDF Converter',
    shortTitle: 'Image to PDF',
    subtitle: 'Combine photos, marksheets & certificates into an official PDF document',
    icon: ImageIcon,
    urlParam: 'image-to-pdf',
  },
  'compress-pdf': {
    id: 'compress-pdf',
    title: 'PDF Compressor',
    shortTitle: 'Compress PDF',
    subtitle: 'Reduce PDF file size to exact KB limits for portal and document uploads',
    icon: Sliders,
    urlParam: 'pdf-compressor',
  },
  'merge-pdf': {
    id: 'merge-pdf',
    title: 'Merge PDF Documents',
    shortTitle: 'Merge PDF',
    subtitle: 'Combine multiple PDF files into one clean, seamless document',
    icon: Merge,
    urlParam: 'merge-pdf',
  },
  'pdf-to-jpg': {
    id: 'pdf-to-jpg',
    title: 'PDF to JPG Converter',
    shortTitle: 'PDF to JPG',
    subtitle: 'Extract high-resolution JPG images from multi-page PDF documents',
    icon: FilePlus,
    urlParam: 'pdf-to-jpg',
  },
};

const TOOL_LIST = Object.values(TOOL_CONFIG);

export const PdfStudioModal = ({ onClose, initialTab = 'image-to-pdf' }) => {
  const [activeTab, setActiveTab] = useState(initialTab); // 'image-to-pdf' | 'compress-pdf' | 'merge-pdf' | 'pdf-to-jpg'

  // --- 1. Image to PDF State ---
  const [imageFiles, setImageFiles] = useState([]); // Array of { file, previewUrl, id }
  const [imgPageSize, setImgPageSize] = useState('fit'); // 'fit' (edge-to-edge / official standard) | 'a4'
  const [imgMargin, setImgMargin] = useState(0); // 0 (edge-to-edge) | 15 (clean margins)
  const [imgOrientation] = useState('auto'); // 'auto' | 'portrait' | 'landscape'
  const [imgTargetKb, setImgTargetKb] = useState(null); // null = High Quality (Full Resolution, no limit)
  const [imgPdfResult, setImgPdfResult] = useState(null);
  const [isImgProcessing, setIsImgProcessing] = useState(false);
  const [imgProgress, setImgProgress] = useState(null);

  // --- 2. Compress PDF State ---
  const [compressFile, setCompressFile] = useState(null);
  const [compressTargetKb, setCompressTargetKb] = useState(300);
  const [compressResult, setCompressResult] = useState(null);
  const [isCompressProcessing, setIsCompressProcessing] = useState(false);
  const [compressProgress, setCompressProgress] = useState(null);

  // --- 3. Merge PDF State ---
  const [mergeFiles, setMergeFiles] = useState([]);
  const [mergeResult, setMergeResult] = useState(null);
  const [isMergeProcessing, setIsMergeProcessing] = useState(false);
  const [mergeProgress, setMergeProgress] = useState(null);

  // --- 4. PDF to JPG State ---
  const [pdfToJpgFile, setPdfToJpgFile] = useState(null);
  const [pdfDpiScale, setPdfDpiScale] = useState(2.0); // 1.5 = ~110 DPI, 2.0 = ~144 DPI, 3.0 = ~216 DPI
  const [extractedImages, setExtractedImages] = useState([]);
  const [isPdfToJpgProcessing, setIsPdfToJpgProcessing] = useState(false);
  const [pdfToJpgProgress, setPdfToJpgProgress] = useState(null);

  const debounceTimerRef = useRef(null);

  useEffect(() => {
    return () => {
      if (debounceTimerRef.current) clearTimeout(debounceTimerRef.current);
    };
  }, []);

  // Update activeTab if initialTab changes
  useEffect(() => {
    if (initialTab) setActiveTab(initialTab);
  }, [initialTab]);

  const switchTool = (id) => {
    setActiveTab(id);
    const tool = TOOL_CONFIG[id];
    if (tool) {
      window.history.replaceState({ toolType: id }, '', `?tool=${tool.urlParam}`);
    }
  };

  const currentTool = TOOL_CONFIG[activeTab] || TOOL_CONFIG['image-to-pdf'];
  const ActiveIcon = currentTool.icon;

  // Clean up object URLs on unmount
  useEffect(() => {
    return () => {
      imageFiles.forEach((item) => URL.revokeObjectURL(item.previewUrl));
      extractedImages.forEach((img) => URL.revokeObjectURL(img.url));
      if (imgPdfResult?.downloadUrl) URL.revokeObjectURL(imgPdfResult.downloadUrl);
      if (compressResult?.downloadUrl) URL.revokeObjectURL(compressResult.downloadUrl);
      if (mergeResult?.downloadUrl) URL.revokeObjectURL(mergeResult.downloadUrl);
    };
  }, [imageFiles, extractedImages, imgPdfResult, compressResult, mergeResult]);

  // ==========================================
  // HANDLERS: Image to PDF
  // ==========================================
  const handleImageFilesSelected = (fileList) => {
    if (!fileList || fileList.length === 0) return;
    const newItems = Array.from(fileList).map((file) => ({
      file,
      previewUrl: URL.createObjectURL(file),
      id: `${file.name}-${file.size}-${Date.now()}-${Math.random()}`
    }));
    setImageFiles((prev) => [...prev, ...newItems]);
    setImgPdfResult(null);
  };

  const moveImage = (index, direction) => {
    const targetIdx = index + direction;
    if (targetIdx < 0 || targetIdx >= imageFiles.length) return;
    const updated = [...imageFiles];
    const [moved] = updated.splice(index, 1);
    updated.splice(targetIdx, 0, moved);
    setImageFiles(updated);
    setImgPdfResult(null);
  };

  const removeImage = (index) => {
    const item = imageFiles[index];
    if (item?.previewUrl) URL.revokeObjectURL(item.previewUrl);
    setImageFiles((prev) => prev.filter((_, i) => i !== index));
    setImgPdfResult(null);
  };

  const runImageToPdf = async () => {
    if (imageFiles.length === 0) return;
    setIsImgProcessing(true);
    setImgProgress({ current: 0, total: imageFiles.length, percent: 5, text: 'Preparing images...' });

    try {
      const rawFiles = imageFiles.map((item) => item.file);
      const res = await convertImagesToPdf(rawFiles, imgTargetKb, setImgProgress, {
        pageSize: imgPageSize,
        margin: imgMargin,
        orientation: imgOrientation
      });
      setImgPdfResult(res);
      triggerCelebration();
    } catch (err) {
      console.error('Image to PDF error:', err);
      alert('Error creating PDF. Please ensure your images are valid JPG/PNG files.');
    } finally {
      setIsImgProcessing(false);
    }
  };

  // ==========================================
  // HANDLERS: Compress PDF
  // ==========================================
  const handleCompressFileSelected = (file) => {
    if (!file) return;
    setCompressFile(file);
    setCompressResult(null);
    runPdfCompression(file, compressTargetKb);
  };

  const runPdfCompression = async (file, maxKb) => {
    setIsCompressProcessing(true);
    setCompressProgress({ current: 0, total: 1, percent: 5, text: `Optimizing PDF for max ${maxKb} KB...` });

    try {
      const res = await compressExistingPdf(file, maxKb, setCompressProgress);
      setCompressResult(res);
      triggerCelebration();
    } catch (err) {
      console.error('Compress PDF error:', err);
      alert('Could not compress this PDF. Ensure it is not password protected.');
    } finally {
      setIsCompressProcessing(false);
    }
  };

  // ==========================================
  // HANDLERS: Merge PDF
  // ==========================================
  const handleMergeFilesSelected = (fileList) => {
    if (!fileList || fileList.length === 0) return;
    const newFiles = Array.from(fileList).filter((f) => f.type === 'application/pdf' || f.name.endsWith('.pdf'));
    setMergeFiles((prev) => [...prev, ...newFiles]);
    setMergeResult(null);
  };

  const moveMergeFile = (index, direction) => {
    const targetIdx = index + direction;
    if (targetIdx < 0 || targetIdx >= mergeFiles.length) return;
    const updated = [...mergeFiles];
    const [moved] = updated.splice(index, 1);
    updated.splice(targetIdx, 0, moved);
    setMergeFiles(updated);
    setMergeResult(null);
  };

  const removeMergeFile = (index) => {
    setMergeFiles((prev) => prev.filter((_, i) => i !== index));
    setMergeResult(null);
  };

  const runMergePdfs = async () => {
    if (mergeFiles.length < 2) {
      alert('Please add at least 2 PDF files to merge.');
    }
    setIsMergeProcessing(true);
    setMergeProgress({ current: 0, total: mergeFiles.length, percent: 5, text: 'Combining PDF documents...' });

    try {
      const res = await mergePdfFiles(mergeFiles, setMergeProgress);
      setMergeResult(res);
      triggerCelebration();
    } catch (err) {
      console.error('Merge PDF error:', err);
      alert('Error merging PDFs. Ensure none of the documents are encrypted.');
    } finally {
      setIsMergeProcessing(false);
    }
  };

  // ==========================================
  // HANDLERS: PDF to JPG
  // ==========================================
  const handlePdfToJpgSelected = async (file) => {
    if (!file) return;
    setPdfToJpgFile(file);
    setExtractedImages([]);
    setIsPdfToJpgProcessing(true);
    setPdfToJpgProgress({ current: 0, total: 1, percent: 5, text: 'Extracting pages as high-resolution images...' });

    try {
      const images = await convertPdfToImages(file, pdfDpiScale, setPdfToJpgProgress);
      setExtractedImages(images);
      triggerCelebration();
    } catch (err) {
      console.error('PDF to JPG error:', err);
      alert('Could not extract images from this PDF.');
    } finally {
      setIsPdfToJpgProcessing(false);
    }
  };

  const triggerCelebration = () => {
    confetti({
      particleCount: 65,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#10b981', '#3b82f6', '#6366f1']
    });
  };

  const downloadBlob = async (blobUrl, filename) => {
    await downloadFile({
      blobUrl,
      filename,
      mimeType: filename.endsWith('.jpg') || filename.endsWith('.jpeg') ? 'image/jpeg' : 'application/pdf',
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col text-slate-900 antialiased" style={{ fontFamily: "'Lexend', sans-serif" }}>
      
      {/* Sticky Standalone Workspace Header */}
      <header className="bg-white/95 backdrop-blur-md border-b border-slate-200 sticky top-0 z-30 px-3 sm:px-6 py-3 flex items-center justify-between shadow-xs safe-area-top">
        <div className="flex items-center space-x-2 sm:space-x-3 min-w-0">
          <button
            onClick={onClose}
            className="p-1.5 sm:p-2 rounded-xl text-slate-700 hover:bg-slate-100 flex items-center space-x-1.5 font-bold text-xs transition-all border border-slate-200 flex-shrink-0"
            aria-label="Back to All Tools"
          >
            <ArrowLeft className="w-4 h-4 text-emerald-600" />
            <span className="hidden sm:inline">Back to All Tools</span>
            <span className="sm:hidden">Back</span>
          </button>
          <div className="h-4 w-px bg-slate-200 flex-shrink-0" />
          <div className="flex items-center space-x-2 min-w-0">
            <div className="p-1.5 rounded-lg bg-emerald-50 text-emerald-600 border border-emerald-200 flex-shrink-0">
              <ActiveIcon className="w-4 h-4" />
            </div>
            <div className="min-w-0">
              <h1 className="font-bold text-slate-900 text-sm sm:text-base leading-tight truncate">
                {currentTool.title}
              </h1>
              <p className="text-[11px] text-slate-500 font-medium hidden sm:block truncate">
                {currentTool.subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Quick Privacy Badge */}
        <div className="hidden md:flex items-center space-x-1.5 text-xs text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full font-semibold flex-shrink-0">
          <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
          <span>Zero Server Uploads · 100% Client-Side</span>
        </div>
      </header>

      {/* Sleek Dedicated Sibling Tool Switcher */}
      <div className="bg-white border-b border-slate-200/80 px-3 sm:px-6 py-2">
        <div className="max-w-4xl mx-auto flex items-center justify-between gap-2">
          <div className="flex items-center space-x-1 sm:space-x-1.5 overflow-x-auto scrollbar-none py-0.5">
            {TOOL_LIST.map((tool) => {
              const Icon = tool.icon;
              const isActive = activeTab === tool.id;
              return (
                <button
                  key={tool.id}
                  onClick={() => switchTool(tool.id)}
                  className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-emerald-400' : 'text-slate-400'}`} />
                  <span>{tool.shortTitle}</span>
                </button>
              );
            })}
          </div>

          <span className="hidden md:inline-flex items-center text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200 flex-shrink-0">
            Offline &amp; Safe
          </span>
        </div>
      </div>

      {/* Main Workspace Body */}
      <main className="flex-1 max-w-4xl mx-auto w-full p-4 sm:p-6 space-y-6">

        {/* ========================================================= */}
        {/* TAB 1: IMAGE TO PDF                                      */}
        {/* ========================================================= */}
        {activeTab === 'image-to-pdf' && (
          <div className="space-y-6">
            
            {/* Top Config Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 space-y-4 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h2 className="text-sm font-bold text-slate-900 flex items-center space-x-1.5">
                    <ImageIcon className="w-4 h-4 text-emerald-600" />
                    <span>Document Layout &amp; Quality Settings</span>
                  </h2>
                  <p className="text-[11px] text-slate-500 font-medium">
                    Combine photos, certificates &amp; scanned documents into one official PDF
                  </p>
                </div>

                <div className="flex items-center space-x-2">
                  <span className="text-xs font-bold text-slate-600">Output Quality:</span>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-lg ${
                    !imgTargetKb 
                      ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' 
                      : 'bg-amber-50 text-amber-700 border border-amber-200'
                  }`}>
                    {!imgTargetKb ? 'Full High-Res (No Limit)' : `Target: Under ${imgTargetKb} KB`}
                  </span>
                </div>
              </div>

              {/* Document Size Compression Options (Optional) */}
              <div className="pt-2 border-t border-slate-100 space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-700 font-bold">Compress to Target Size (Optional):</span>
                  {imgTargetKb && (
                    <button
                      type="button"
                      onClick={() => setImgTargetKb(null)}
                      className="text-[11px] text-emerald-600 hover:text-emerald-700 font-bold hover:underline"
                    >
                      Reset to Full Quality
                    </button>
                  )}
                </div>

                <div className="flex items-center space-x-2 flex-wrap gap-y-2">
                  <button
                    type="button"
                    onClick={() => setImgTargetKb(null)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      imgTargetKb === null
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }`}
                  >
                    High Quality (Default · No Size Limit)
                  </button>

                  {[
                    { kb: 200, label: 'Under 200 KB' },
                    { kb: 300, label: 'Under 300 KB' },
                    { kb: 500, label: 'Under 500 KB' },
                    { kb: 100, label: 'Under 100 KB' },
                  ].map((preset) => (
                    <button
                      key={preset.kb}
                      type="button"
                      onClick={() => setImgTargetKb(preset.kb)}
                      className={`px-2.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                        imgTargetKb === preset.kb
                          ? 'bg-emerald-600 text-white shadow-xs'
                          : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                      }`}
                    >
                      {preset.label}
                    </button>
                  ))}

                  {/* Custom KB Input */}
                  <div className="flex items-center space-x-1 bg-slate-50 hover:bg-slate-100 px-2 py-1 rounded-xl border border-slate-200 text-xs">
                    <span className="text-slate-500 font-medium">Custom:</span>
                    <input
                      type="number"
                      min="30"
                      max="10000"
                      placeholder="KB"
                      value={imgTargetKb && ![100, 200, 300, 500].includes(imgTargetKb) ? imgTargetKb : ''}
                      onChange={(e) => {
                        const val = e.target.value ? Number(e.target.value) : null;
                        setImgTargetKb(val);
                      }}
                      className="w-14 text-center font-bold text-slate-800 bg-transparent focus:outline-none"
                    />
                    <span className="text-slate-500 font-semibold">KB</span>
                  </div>
                </div>
              </div>

              {/* Layout controls */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 border-t border-slate-100 text-xs">
                <div>
                  <label className="block text-slate-700 font-bold mb-1">Page Format</label>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setImgPageSize('fit')}
                      className={`flex-1 py-1.5 px-2 rounded-xl font-bold border transition-all ${
                        imgPageSize === 'fit'
                          ? 'bg-emerald-50 border-emerald-500 text-emerald-700'
                          : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      Fit Image (Edge-to-Edge · Recommended)
                    </button>
                    <button
                      type="button"
                      onClick={() => setImgPageSize('a4')}
                      className={`flex-1 py-1.5 px-2 rounded-xl font-bold border transition-all ${
                        imgPageSize === 'a4'
                          ? 'bg-emerald-50 border-emerald-500 text-emerald-700'
                          : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      Standard A4 Sheet
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 font-bold mb-1">Margins</label>
                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setImgMargin(0)}
                      className={`flex-1 py-1.5 px-2 rounded-xl font-bold border transition-all ${
                        imgMargin === 0
                          ? 'bg-emerald-50 border-emerald-500 text-emerald-700'
                          : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      No Margins (Edge-to-Edge)
                    </button>
                    <button
                      type="button"
                      onClick={() => setImgMargin(15)}
                      className={`flex-1 py-1.5 px-2 rounded-xl font-bold border transition-all ${
                        imgMargin === 15
                          ? 'bg-emerald-50 border-emerald-500 text-emerald-700'
                          : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      Clean Margins (15pt)
                    </button>
                  </div>
                </div>
              </div>

            </div>

            {/* Upload Box / Image List */}
            {imageFiles.length === 0 ? (
              <div className="border-2 border-dashed border-slate-300 rounded-3xl p-6 sm:p-10 text-center bg-white space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mx-auto shadow-xs">
                  <ImageIcon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">Upload Photos or Marksheet Images</h3>
                  <p className="text-xs text-slate-500 max-w-md mx-auto font-medium">
                    {imgTargetKb
                      ? `Upload multiple JPG, PNG, or WebP images (e.g. Aadhaar Front & Back, 10th & 12th Marksheets). They will be stitched into a single PDF under ${imgTargetKb} KB.`
                      : 'Upload multiple JPG, PNG, or WebP images (e.g. Aadhaar Front & Back, Marksheets & Certificates). They will be stitched into a crystal-clear, high-resolution PDF without quality loss.'}
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                  <label className="w-full sm:w-auto px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center justify-center space-x-2 cursor-pointer shadow-md shadow-emerald-600/20 transition-all active:scale-95">
                    <input
                      type="file"
                      multiple
                      accept="image/jpeg,image/png,image/webp"
                      className="hidden"
                      onChange={(e) => handleImageFilesSelected(e.target.files)}
                    />
                    <Upload className="w-4 h-4" />
                    <span>Select Images from Device</span>
                  </label>

                  <label className="w-full sm:w-auto px-5 py-3 rounded-2xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold flex items-center justify-center space-x-2 cursor-pointer border border-slate-200 transition-all active:scale-95">
                    <input
                      type="file"
                      accept="image/*"
                      capture="environment"
                      className="hidden"
                      onChange={(e) => handleImageFilesSelected(e.target.files)}
                    />
                    <Camera className="w-4 h-4 text-slate-600" />
                    <span>Scan with Camera</span>
                  </label>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                
                {/* Images Reorder List */}
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900 flex items-center space-x-1.5">
                      <Layers className="w-4 h-4 text-emerald-600" />
                      <span>{imageFiles.length} Image(s) in PDF Sequence</span>
                    </span>

                    <div className="flex items-center space-x-2">
                      <label className="text-xs text-emerald-700 hover:text-emerald-800 font-bold cursor-pointer flex items-center space-x-1 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                        <input
                          type="file"
                          multiple
                          accept="image/jpeg,image/png,image/webp"
                          className="hidden"
                          onChange={(e) => handleImageFilesSelected(e.target.files)}
                        />
                        <FilePlus className="w-3.5 h-3.5" />
                        <span>Add More Images</span>
                      </label>

                      <button
                        onClick={() => {
                          imageFiles.forEach(item => URL.revokeObjectURL(item.previewUrl));
                          setImageFiles([]);
                          setImgPdfResult(null);
                        }}
                        className="text-xs text-red-600 hover:text-red-700 font-semibold px-2 py-1 rounded-lg hover:bg-red-50"
                      >
                        Clear All
                      </button>
                    </div>
                  </div>

                  {/* Thumbnail Row / Cards */}
                  <div className="space-y-2 max-h-80 overflow-y-auto pr-1">
                    {imageFiles.map((item, idx) => (
                      <div
                        key={item.id}
                        className="flex items-center justify-between p-2.5 bg-slate-50 border border-slate-200 rounded-xl hover:bg-slate-100/60 transition-colors"
                      >
                        <div className="flex items-center space-x-3 min-w-0">
                          <span className="w-6 h-6 rounded-lg bg-slate-200 text-slate-700 font-bold text-xs flex items-center justify-center flex-shrink-0">
                            {idx + 1}
                          </span>
                          <img
                            src={item.previewUrl}
                            alt={`Page ${idx + 1}`}
                            className="w-12 h-12 object-cover rounded-lg border border-slate-300 flex-shrink-0 bg-white"
                          />
                          <div className="min-w-0">
                            <p className="text-xs font-bold text-slate-800 truncate">{item.file.name}</p>
                            <p className="text-[11px] text-slate-500">{formatFileSize(item.file.size)}</p>
                          </div>
                        </div>

                        {/* Reorder and Delete controls */}
                        <div className="flex items-center space-x-1 flex-shrink-0">
                          <button
                            type="button"
                            disabled={idx === 0}
                            onClick={() => moveImage(idx, -1)}
                            className="p-1.5 rounded-lg text-slate-600 hover:bg-white disabled:opacity-30 disabled:hover:bg-transparent"
                            title="Move Page Up"
                          >
                            <ArrowUp className="w-4 h-4" />
                          </button>
                          <button
                            type="button"
                            disabled={idx === imageFiles.length - 1}
                            onClick={() => moveImage(idx, 1)}
                            className="p-1.5 rounded-lg text-slate-600 hover:bg-white disabled:opacity-30 disabled:hover:bg-transparent"
                            title="Move Page Down"
                          >
                            <ArrowDown className="w-4 h-4" />
                          </button>
                          <button
                            type="button"
                            onClick={() => removeImage(idx)}
                            className="p-1.5 rounded-lg text-red-600 hover:bg-red-50"
                            title="Remove Image"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Primary Convert Button */}
                  <div className="pt-2">
                    <button
                      type="button"
                      disabled={isImgProcessing}
                      onClick={runImageToPdf}
                      className="w-full py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white font-bold text-sm flex items-center justify-center space-x-2 shadow-md shadow-emerald-600/20 transition-all active:scale-98"
                    >
                      {isImgProcessing ? (
                        <>
                          <RefreshCw className="w-4 h-4 animate-spin" />
                          <span>Generating PDF...</span>
                        </>
                      ) : (
                        <>
                          <FileText className="w-4 h-4" />
                          <span>
                            {imgTargetKb
                              ? `Convert ${imageFiles.length} Image(s) to PDF (Under ${imgTargetKb} KB)`
                              : `Convert ${imageFiles.length} Image(s) to High-Res PDF`}
                          </span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Progress bar */}
                {isImgProcessing && imgProgress && (
                  <div className="p-5 rounded-2xl bg-emerald-50/80 border border-emerald-200 space-y-3">
                    <div className="flex items-center justify-between text-xs font-bold text-emerald-900">
                      <span className="flex items-center space-x-2">
                        <RefreshCw className="w-3.5 h-3.5 animate-spin text-emerald-600" />
                        <span>{imgProgress.text}</span>
                      </span>
                      <span>{imgProgress.percent}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-emerald-600 transition-all duration-200"
                        style={{ width: `${imgProgress.percent}%` }}
                      />
                    </div>
                  </div>
                )}

                {/* PDF Result Box */}
                {imgPdfResult && !isImgProcessing && (
                  <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-300 flex flex-col items-center justify-center space-y-4 animate-in fade-in zoom-in-95">
                    <div className="flex items-center space-x-2 text-emerald-800 font-bold text-sm">
                      <CheckCircle className="w-5 h-5 text-emerald-600" />
                      <span>
                        {imgTargetKb
                          ? `PDF Created Successfully! Exact Size: ${formatFileSize(imgPdfResult.finalKb, 'kb')} (Target: Under ${formatFileSize(imgTargetKb, 'kb')})`
                          : `PDF Created Successfully! Exact Size: ${formatFileSize(imgPdfResult.finalKb, 'kb')} (Original High Resolution)`}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => downloadBlob(imgPdfResult.downloadUrl, `SarkariDoc_Document_${Date.now()}.pdf`)}
                      className="py-3.5 px-8 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center space-x-2 shadow-lg shadow-emerald-600/25 transition-all active:scale-95"
                    >
                      <Download className="w-5 h-5" />
                      <span>Download PDF Document ({formatFileSize(imgPdfResult.finalKb, 'kb')})</span>
                    </button>
                  </div>
                )}

              </div>
            )}

          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 2: COMPRESS PDF                                       */}
        {/* ========================================================= */}
        {activeTab === 'compress-pdf' && (
          <div className="space-y-6">
            
            {/* Target KB Slider Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 space-y-4 shadow-xs">
              <div className="flex items-center justify-between">
                <div>
                  <label className="text-xs font-bold text-slate-900 flex items-center space-x-1.5">
                    <Sliders className="w-4 h-4 text-emerald-600" />
                    <span>Target Maximum PDF Size</span>
                  </label>
                  <p className="text-[11px] text-slate-500 font-medium">Select target maximum file size in KB for your documents</p>
                </div>

                <div className="flex items-center space-x-1 bg-emerald-50 px-3 py-1 rounded-xl border border-emerald-200">
                  <input
                    type="number"
                    min="20"
                    max="5000"
                    value={compressTargetKb}
                    onChange={(e) => {
                      const val = Number(e.target.value);
                      setCompressTargetKb(val);
                      if (compressFile && val >= 20) {
                        if (debounceTimerRef.current) clearTimeout(debounceTimerRef.current);
                        debounceTimerRef.current = setTimeout(() => runPdfCompression(compressFile, val), 300);
                      }
                    }}
                    className="w-16 text-center text-xs font-bold text-emerald-700 bg-transparent focus:outline-none"
                  />
                  <span className="text-xs text-emerald-800 font-bold">KB</span>
                </div>
              </div>

              {/* Slider */}
              <input
                type="range"
                min="50"
                max="1000"
                step="10"
                value={compressTargetKb}
                onChange={(e) => {
                  const val = Number(e.target.value);
                  setCompressTargetKb(val);
                  if (compressFile && val >= 20) {
                    if (debounceTimerRef.current) clearTimeout(debounceTimerRef.current);
                    debounceTimerRef.current = setTimeout(() => runPdfCompression(compressFile, val), 300);
                  }
                }}
                className="w-full accent-emerald-600 cursor-pointer h-2 bg-slate-100 rounded-lg"
              />

              {/* Quick Caps */}
              <div className="flex items-center space-x-2 pt-1 flex-wrap gap-y-2">
                {[100, 200, 300, 500, 1000].map((kb) => (
                  <button
                    key={kb}
                    type="button"
                    onClick={() => {
                      setCompressTargetKb(kb);
                      if (compressFile) runPdfCompression(compressFile, kb);
                    }}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      Number(compressTargetKb) === kb
                        ? 'bg-emerald-600 text-white shadow-xs'
                        : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200'
                    }`}
                  >
                    {kb === 1000 ? '1 MB (1000 KB)' : `${kb} KB`}
                  </button>
                ))}
              </div>
            </div>

            {/* Upload Box */}
            {!compressFile ? (
              <div className="border-2 border-dashed border-slate-300 rounded-3xl p-6 sm:p-10 text-center bg-white space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mx-auto shadow-xs">
                  <FileText className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">Select Existing PDF Document</h3>
                  <p className="text-xs text-slate-500 max-w-md mx-auto font-medium">
                    Upload any PDF file. Our binary quality engine will compress and optimize pages to stay strictly under {compressTargetKb} KB.
                  </p>
                </div>

                <label className="inline-flex px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold items-center space-x-2 cursor-pointer shadow-md shadow-emerald-600/20 transition-all active:scale-95">
                  <input
                    type="file"
                    accept="application/pdf"
                    className="hidden"
                    onChange={(e) => e.target.files?.[0] && handleCompressFileSelected(e.target.files[0])}
                  />
                  <Upload className="w-4 h-4" />
                  <span>Browse PDF File</span>
                </label>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-center justify-between shadow-xs">
                  <div className="flex items-center space-x-3">
                    <FileText className="w-5 h-5 text-emerald-600" />
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900">{compressFile.name}</h4>
                      <p className="text-[11px] text-slate-500 font-medium">Original: {formatFileSize(compressFile.size)}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => { setCompressFile(null); setCompressResult(null); }}
                    className="text-xs text-slate-500 hover:text-slate-900 underline font-medium"
                  >
                    Change File
                  </button>
                </div>

                {isCompressProcessing && compressProgress && (
                  <div className="p-6 rounded-2xl bg-emerald-50/70 border border-emerald-200 flex flex-col items-center justify-center space-y-4">
                    <div className="flex items-center space-x-3 text-emerald-700">
                      <RefreshCw className="w-5 h-5 animate-spin text-emerald-600" />
                      <span className="text-sm font-bold">{compressProgress.text}</span>
                    </div>

                    <div className="w-full max-w-md space-y-1.5">
                      <div className="flex justify-between items-center text-xs font-bold text-slate-700">
                        <span>Page {compressProgress.current} of {compressProgress.total}</span>
                        <span className="text-emerald-700">{compressProgress.percent}%</span>
                      </div>
                      <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-emerald-600 transition-all duration-300"
                          style={{ width: `${compressProgress.percent}%` }}
                        />
                      </div>
                    </div>
                  </div>
                )}

                {compressResult && !isCompressProcessing && (
                  <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 flex flex-col items-center justify-center space-y-4">
                    <div className="flex items-center space-x-2 text-emerald-700 font-bold text-sm">
                      <CheckCircle className="w-5 h-5" />
                      <span>Compressed: {formatFileSize(compressResult.finalKb, 'kb')} (Target: {formatFileSize(compressTargetKb, 'kb')})</span>
                    </div>

                    <button
                      onClick={() => downloadBlob(compressResult.downloadUrl, `SarkariDoc_Compressed_${compressFile.name}`)}
                      className="py-3 px-8 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center space-x-2 shadow-lg shadow-emerald-600/25 transition-all active:scale-95"
                    >
                      <Download className="w-5 h-5" />
                      <span>Download Compressed PDF ({formatFileSize(compressResult.finalKb, 'kb')})</span>
                    </button>
                  </div>
                )}
              </div>
            )}

          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 3: MERGE PDF                                          */}
        {/* ========================================================= */}
        {activeTab === 'merge-pdf' && (
          <div className="space-y-6">
            
            {mergeFiles.length === 0 ? (
              <div className="border-2 border-dashed border-slate-300 rounded-3xl p-6 sm:p-10 text-center bg-white space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mx-auto shadow-xs">
                  <Merge className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">Merge Multiple PDF Files</h3>
                  <p className="text-xs text-slate-500 max-w-md mx-auto font-medium">
                    Combine two or more PDF documents into a single consolidated file with zero quality loss.
                  </p>
                </div>

                <label className="inline-flex px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold items-center space-x-2 cursor-pointer shadow-md shadow-emerald-600/20 transition-all active:scale-95">
                  <input
                    type="file"
                    multiple
                    accept="application/pdf"
                    className="hidden"
                    onChange={(e) => handleMergeFilesSelected(e.target.files)}
                  />
                  <Upload className="w-4 h-4" />
                  <span>Select Multiple PDF Files</span>
                </label>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-900 flex items-center space-x-1.5">
                      <Merge className="w-4 h-4 text-emerald-600" />
                      <span>{mergeFiles.length} PDF Documents to Merge</span>
                    </span>

                    <div className="flex items-center space-x-2">
                      <label className="text-xs text-emerald-700 hover:text-emerald-800 font-bold cursor-pointer flex items-center space-x-1 bg-emerald-50 px-2.5 py-1 rounded-lg border border-emerald-200">
                        <input
                          type="file"
                          multiple
                          accept="application/pdf"
                          className="hidden"
                          onChange={(e) => handleMergeFilesSelected(e.target.files)}
                        />
                        <FilePlus className="w-3.5 h-3.5" />
                        <span>Add PDF</span>
                      </label>
                      <button
                        onClick={() => { setMergeFiles([]); setMergeResult(null); }}
                        className="text-xs text-red-600 hover:text-red-700 font-semibold px-2 py-1 rounded-lg hover:bg-red-50"
                      >
                        Clear
                      </button>
                    </div>
                  </div>

                  {/* List of PDFs */}
                  <div className="space-y-2">
                    {mergeFiles.map((file, idx) => (
                      <div
                        key={`${file.name}-${idx}`}
                        className="flex items-center justify-between p-3 bg-slate-50 border border-slate-200 rounded-xl"
                      >
                        <div className="flex items-center space-x-3 min-w-0">
                          <span className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-800 font-bold text-xs flex items-center justify-center flex-shrink-0">
                            {idx + 1}
                          </span>
                          <div className="min-w-0">
                            <p className="text-xs font-bold text-slate-800 truncate">{file.name}</p>
                            <p className="text-[11px] text-slate-500">{formatFileSize(file.size)}</p>
                          </div>
                        </div>

                        <div className="flex items-center space-x-1">
                          <button
                            type="button"
                            disabled={idx === 0}
                            onClick={() => moveMergeFile(idx, -1)}
                            className="p-1.5 rounded-lg text-slate-600 hover:bg-white disabled:opacity-30"
                          >
                            <ArrowUp className="w-4 h-4" />
                          </button>
                          <button
                            type="button"
                            disabled={idx === mergeFiles.length - 1}
                            onClick={() => moveMergeFile(idx, 1)}
                            className="p-1.5 rounded-lg text-slate-600 hover:bg-white disabled:opacity-30"
                          >
                            <ArrowDown className="w-4 h-4" />
                          </button>
                          <button
                            type="button"
                            onClick={() => removeMergeFile(idx)}
                            className="p-1.5 rounded-lg text-red-600 hover:bg-red-50"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="pt-2">
                    <button
                      type="button"
                      disabled={isMergeProcessing}
                      onClick={runMergePdfs}
                      className="w-full py-3.5 rounded-2xl bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white font-bold text-sm flex items-center justify-center space-x-2 shadow-md shadow-emerald-600/20 transition-all active:scale-98"
                    >
                      {isMergeProcessing ? (
                        <>
                          <RefreshCw className="w-4 h-4 animate-spin" />
                          <span>Merging Documents...</span>
                        </>
                      ) : (
                        <>
                          <Merge className="w-4 h-4" />
                          <span>Merge {mergeFiles.length} PDF Documents</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {isMergeProcessing && mergeProgress && (
                  <div className="p-5 rounded-2xl bg-emerald-50/80 border border-emerald-200 space-y-3">
                    <div className="flex items-center justify-between text-xs font-bold text-emerald-900">
                      <span className="flex items-center space-x-2">
                        <RefreshCw className="w-3.5 h-3.5 animate-spin text-emerald-600" />
                        <span>{mergeProgress.text}</span>
                      </span>
                      <span>{mergeProgress.percent}%</span>
                    </div>
                    <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-emerald-600 transition-all duration-200"
                        style={{ width: `${mergeProgress.percent}%` }}
                      />
                    </div>
                  </div>
                )}

                {mergeResult && !isMergeProcessing && (
                  <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-300 flex flex-col items-center justify-center space-y-4">
                    <div className="flex items-center space-x-2 text-emerald-800 font-bold text-sm">
                      <CheckCircle className="w-5 h-5 text-emerald-600" />
                      <span>Merged PDF Ready! Total Pages: {mergeResult.pageCount} ({formatFileSize(mergeResult.finalKb, 'kb')})</span>
                    </div>

                    <button
                      type="button"
                      onClick={() => downloadBlob(mergeResult.downloadUrl, `SarkariDoc_Merged_${Date.now()}.pdf`)}
                      className="py-3 px-8 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm flex items-center space-x-2 shadow-lg shadow-emerald-600/25 transition-all active:scale-95"
                    >
                      <Download className="w-5 h-5" />
                      <span>Download Merged PDF ({formatFileSize(mergeResult.finalKb, 'kb')})</span>
                    </button>
                  </div>
                )}
              </div>
            )}

          </div>
        )}

        {/* ========================================================= */}
        {/* TAB 4: PDF TO JPG                                         */}
        {/* ========================================================= */}
        {activeTab === 'pdf-to-jpg' && (
          <div className="space-y-6">
            
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 space-y-3 shadow-xs">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-xs font-bold text-slate-900 flex items-center space-x-1.5">
                    <FilePlus className="w-4 h-4 text-emerald-600" />
                    <span>PDF to JPG Converter</span>
                  </h3>
                  <p className="text-[11px] text-slate-500 font-medium">Extract high-resolution JPG images from multi-page PDF documents</p>
                </div>

                <div className="flex items-center space-x-1 text-xs">
                  <span className="font-bold text-slate-600 mr-1">Quality:</span>
                  <button
                    type="button"
                    onClick={() => setPdfDpiScale(1.5)}
                    className={`px-2.5 py-1 rounded-xl font-bold transition-all ${
                      pdfDpiScale === 1.5 ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    110 DPI
                  </button>
                  <button
                    type="button"
                    onClick={() => setPdfDpiScale(2.0)}
                    className={`px-2.5 py-1 rounded-xl font-bold transition-all ${
                      pdfDpiScale === 2.0 ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-700'
                    }`}
                  >
                    150 DPI (Sharp)
                  </button>
                </div>
              </div>
            </div>

            {!pdfToJpgFile ? (
              <div className="border-2 border-dashed border-slate-300 rounded-3xl p-6 sm:p-10 text-center bg-white space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 mx-auto shadow-xs">
                  <FilePlus className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">Upload PDF to Extract Images</h3>
                  <p className="text-xs text-slate-500 max-w-md mx-auto font-medium">
                    Converts each page of your PDF into an individual clean JPG image ready for portal upload.
                  </p>
                </div>

                <label className="inline-flex px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold items-center space-x-2 cursor-pointer shadow-md shadow-emerald-600/20 transition-all active:scale-95">
                  <input
                    type="file"
                    accept="application/pdf"
                    className="hidden"
                    onChange={(e) => e.target.files?.[0] && handlePdfToJpgSelected(e.target.files[0])}
                  />
                  <Upload className="w-4 h-4" />
                  <span>Choose PDF File</span>
                </label>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-white border border-slate-200 flex items-center justify-between shadow-xs">
                  <div className="flex items-center space-x-3">
                    <FileText className="w-5 h-5 text-emerald-600" />
                    <div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900">{pdfToJpgFile.name}</h4>
                      <p className="text-[11px] text-slate-500 font-medium">Extracted {extractedImages.length} image page(s)</p>
                    </div>
                  </div>

                  <button
                    onClick={() => { setPdfToJpgFile(null); setExtractedImages([]); }}
                    className="text-xs text-slate-500 hover:text-slate-900 underline font-medium"
                  >
                    Change PDF
                  </button>
                </div>

                {isPdfToJpgProcessing && pdfToJpgProgress && (
                  <div className="p-6 rounded-2xl bg-emerald-50/70 border border-emerald-200 flex flex-col items-center justify-center space-y-3">
                    <div className="flex items-center space-x-3 text-emerald-700">
                      <RefreshCw className="w-5 h-5 animate-spin text-emerald-600" />
                      <span className="text-sm font-bold">{pdfToJpgProgress.text}</span>
                    </div>
                    <div className="w-full max-w-md h-2 bg-slate-200 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-600" style={{ width: `${pdfToJpgProgress.percent}%` }} />
                    </div>
                  </div>
                )}

                {extractedImages.length > 0 && !isPdfToJpgProcessing && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {extractedImages.map((img) => (
                        <div key={img.pageNumber} className="p-3 bg-white border border-slate-200 rounded-2xl shadow-xs space-y-2">
                          <img
                            src={img.url}
                            alt={`Page ${img.pageNumber}`}
                            className="w-full h-44 object-contain bg-slate-50 rounded-xl border border-slate-100"
                          />
                          <div className="flex items-center justify-between text-xs">
                            <span className="font-bold text-slate-800">Page {img.pageNumber}</span>
                            <span className="text-slate-500 font-semibold">{img.kb} KB</span>
                          </div>
                          <button
                            type="button"
                            onClick={() => downloadBlob(img.url, `Page_${img.pageNumber}_${pdfToJpgFile.name.replace('.pdf', '')}.jpg`)}
                            className="w-full py-2 rounded-xl bg-slate-100 hover:bg-emerald-600 hover:text-white text-slate-700 text-xs font-bold flex items-center justify-center space-x-1.5 transition-colors"
                          >
                            <Download className="w-3.5 h-3.5" />
                            <span>Download JPG</span>
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            )}

          </div>
        )}

        {/* Sleek Apple-style sibling discovery footer */}
        <div className="pt-6 pb-2 border-t border-slate-200/80">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
            <span className="font-medium">Need another document tool?</span>
            <div className="flex items-center space-x-2 flex-wrap gap-y-1">
              {TOOL_LIST.filter((t) => t.id !== activeTab).map((tool) => (
                <button
                  key={tool.id}
                  type="button"
                  onClick={() => switchTool(tool.id)}
                  className="text-emerald-700 hover:text-emerald-800 font-bold px-2.5 py-1 rounded-lg bg-emerald-50 hover:bg-emerald-100/70 transition-colors"
                >
                  {tool.shortTitle}
                </button>
              ))}
            </div>
          </div>
        </div>

      </main>
    </div>
  );
};


