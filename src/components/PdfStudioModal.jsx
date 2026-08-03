import React, { useState } from 'react';
import { convertImagesToPdf, compressExistingPdf } from '../utils/pdfEngine';
import confetti from 'canvas-confetti';
import { Upload, Download, X, FileText, CheckCircle, RefreshCw, FilePlus, Layers } from 'lucide-react';

export const PdfStudioModal = ({ onClose }) => {
  const [files, setFiles] = useState([]);
  const [targetMaxKb, setTargetMaxKb] = useState(300);
  const [isProcessing, setIsProcessing] = useState(false);
  const [pdfResult, setPdfResult] = useState(null);

  const handleFilesSelected = async (selectedFiles, customKb = targetMaxKb) => {
    if (!selectedFiles || selectedFiles.length === 0) return;
    const fileList = Array.from(selectedFiles);
    setFiles(fileList);
    setPdfResult(null);

    setIsProcessing(true);
    try {
      if (fileList.length === 1 && fileList[0].type === 'application/pdf') {
        const res = await compressExistingPdf(fileList[0], customKb);
        setPdfResult(res);
      } else {
        const res = await convertImagesToPdf(fileList, customKb);
        setPdfResult(res);
      }
    } catch (err) {
      console.error('PDF Processing Error:', err);
    } finally {
      setIsProcessing(false);
    }
  };

  const handleDownload = () => {
    if (!pdfResult) return;
    const link = document.createElement('a');
    link.href = pdfResult.downloadUrl;
    link.download = `SarkariDoc_Compressed_Document_${Date.now()}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#3b82f6', '#10b981', '#6366f1']
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-3xl glass-panel rounded-3xl border border-slate-800 shadow-2xl overflow-hidden my-auto flex flex-col">
        
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/60">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-bold text-white text-lg font-['Outfit']">PDF Resizer & Converter Studio</h2>
              <p className="text-xs text-slate-400">Compress PDF documents or convert images into a single target PDF</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          
          {/* Target KB Input & Presets */}
          <div className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 space-y-3">
            <div className="flex items-center justify-between">
              <div>
                <label className="block text-xs font-bold text-slate-300">Target Maximum PDF Size</label>
                <p className="text-[11px] text-slate-400">Set exact target KB limit for government forms (e.g. 100KB, 200KB, 300KB, 500KB)</p>
              </div>

              <div className="flex items-center space-x-1 bg-slate-950 px-2.5 py-1 rounded-xl border border-slate-800">
                <input
                  type="number"
                  value={targetMaxKb}
                  onChange={(e) => {
                    const kb = Number(e.target.value);
                    setTargetMaxKb(kb);
                    if (files.length > 0) handleFilesSelected(files, kb);
                  }}
                  className="w-16 text-center text-xs font-bold text-emerald-400 bg-transparent focus:outline-none"
                />
                <span className="text-xs text-slate-400 font-semibold">KB</span>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              {[100, 150, 200, 300, 500].map((kb) => (
                <button
                  key={kb}
                  onClick={() => {
                    setTargetMaxKb(kb);
                    if (files.length > 0) handleFilesSelected(files, kb);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    targetMaxKb === kb
                      ? 'bg-emerald-600 text-white shadow-md shadow-emerald-500/20'
                      : 'bg-slate-800 text-slate-400 hover:text-white'
                  }`}
                >
                  {kb} KB
                </button>
              ))}
            </div>
          </div>

          {files.length === 0 ? (
            <label className="border-2 border-dashed border-slate-700 hover:border-emerald-500/80 rounded-3xl p-8 text-center bg-slate-900/40 hover:bg-emerald-950/20 cursor-pointer transition-all duration-300 flex flex-col items-center justify-center min-h-[220px]">
              <input
                type="file"
                multiple
                accept="application/pdf,image/jpeg,image/png,image/webp"
                className="hidden"
                onChange={(e) => handleFilesSelected(e.target.files)}
              />
              <div className="w-14 h-14 rounded-2xl bg-emerald-600/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-3 shadow-lg shadow-emerald-500/10">
                <FilePlus className="w-7 h-7" />
              </div>
              <h3 className="text-base font-bold text-white mb-1">Upload PDF or Images to Compress</h3>
              <p className="text-xs text-slate-400 max-w-sm">Select single/multiple JPGs, PNGs, or existing PDF files. 100% Client-side privacy.</p>
            </label>
          ) : (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-slate-900/60 border border-slate-800 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Layers className="w-5 h-5 text-emerald-400" />
                  <div>
                    <h4 className="text-sm font-bold text-white">{files.length} File(s) Processed</h4>
                    <p className="text-xs text-slate-400">{files.map(f => f.name).join(', ')}</p>
                  </div>
                </div>

                <button
                  onClick={() => { setFiles([]); setPdfResult(null); }}
                  className="text-xs text-slate-400 hover:text-white underline"
                >
                  Clear Files
                </button>
              </div>

              {isProcessing ? (
                <div className="p-8 text-center flex flex-col items-center justify-center space-y-2 text-emerald-400">
                  <RefreshCw className="w-6 h-6 animate-spin" />
                  <span className="text-xs font-semibold">Compressing PDF to target {targetMaxKb} KB...</span>
                </div>
              ) : pdfResult ? (
                <div className="p-6 rounded-2xl bg-emerald-950/20 border border-emerald-800/40 flex flex-col items-center justify-center space-y-4">
                  <div className="flex items-center space-x-2 text-emerald-400 font-bold text-sm">
                    <CheckCircle className="w-5 h-5" />
                    <span>Compressed Result: {pdfResult.finalKb} KB (Target Limit: {targetMaxKb} KB)</span>
                  </div>

                  <button
                    onClick={handleDownload}
                    className="btn-gradient bg-emerald-600 hover:bg-emerald-500 py-3.5 px-8 rounded-xl text-white font-bold text-sm flex items-center space-x-2 shadow-lg"
                  >
                    <Download className="w-5 h-5" />
                    <span>Download Compressed PDF ({pdfResult.finalKb} KB)</span>
                  </button>
                </div>
              ) : null}
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
