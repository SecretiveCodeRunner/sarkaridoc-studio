import React from 'react';
import { FileText, Sliders, Merge, FilePlus, ArrowRight, ShieldCheck } from 'lucide-react';

export const AndroidPdfSuiteScreen = ({
  onOpenImageToPdf,
  onOpenPdfCompressor,
  onOpenMergePdf,
  onOpenPdfToJpg,
}) => {
  const pdfTools = [
    {
      id: 'image-to-pdf',
      title: 'Image to PDF Converter',
      badge: 'Most Popular',
      desc: 'Combine multiple images, marksheets, and certificates into a single official PDF with target size (e.g. Under 200 KB).',
      icon: FileText,
      color: 'emerald',
      action: onOpenImageToPdf,
    },
    {
      id: 'compress-pdf',
      title: 'PDF Compressor',
      badge: 'Target KB',
      desc: 'Reduce PDF file size to exact portal limits (100KB, 200KB, 300KB) using multi-tier binary search compression.',
      icon: Sliders,
      color: 'indigo',
      action: onOpenPdfCompressor,
    },
    {
      id: 'merge-pdf',
      title: 'Merge PDF Documents',
      badge: 'Multi-file',
      desc: 'Combine 2 or more PDF documents into a single contiguous file in custom order directly on device.',
      icon: Merge,
      color: 'cyan',
      action: onOpenMergePdf,
    },
    {
      id: 'pdf-to-jpg',
      title: 'PDF to JPG Extractor',
      badge: 'High-Res',
      desc: 'Extract individual pages from any PDF document and save them as high-clarity JPG/PNG images.',
      icon: FilePlus,
      color: 'amber',
      action: onOpenPdfToJpg,
    },
  ];

  return (
    <div className="space-y-3 px-4 py-3 pb-24 max-w-lg mx-auto select-none">
      
      {/* Privacy Guarantee Card */}
      <div className="rounded-2xl bg-emerald-50/80 border border-emerald-200/80 p-3.5 flex items-center space-x-3">
        <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center flex-shrink-0">
          <ShieldCheck className="w-4 h-4" />
        </div>
        <div className="min-w-0">
          <h3 className="text-xs font-bold text-emerald-950">100% Client-Side PDF Engine</h3>
          <p className="text-[11px] text-emerald-800">Your documents are never uploaded to any server or cloud.</p>
        </div>
      </div>

      {/* PDF Tool Cards List */}
      <div className="space-y-3 pt-1">
        {pdfTools.map((tool) => {
          const Icon = tool.icon;
          return (
            <button
              key={tool.id}
              type="button"
              onClick={tool.action}
              className="w-full text-left p-4 rounded-3xl bg-white border border-slate-200/90 hover:border-blue-500 shadow-xs active:scale-[0.98] transition-all group"
            >
              <div className="flex items-start justify-between mb-2">
                <div className={`w-11 h-11 rounded-2xl flex items-center justify-center text-white shadow-md ${
                  tool.color === 'emerald' ? 'bg-emerald-600 shadow-emerald-600/20' :
                  tool.color === 'indigo' ? 'bg-indigo-600 shadow-indigo-600/20' :
                  tool.color === 'cyan' ? 'bg-cyan-600 shadow-cyan-600/20' :
                  'bg-amber-600 shadow-amber-600/20'
                }`}>
                  <Icon className="w-5 h-5" />
                </div>
                <span className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full ${
                  tool.color === 'emerald' ? 'bg-emerald-100 text-emerald-800' :
                  tool.color === 'indigo' ? 'bg-indigo-100 text-indigo-800' :
                  tool.color === 'cyan' ? 'bg-cyan-100 text-cyan-800' :
                  'bg-amber-100 text-amber-800'
                }`}>
                  {tool.badge}
                </span>
              </div>

              <h4 className="font-bold text-slate-900 text-sm group-hover:text-blue-600 transition-colors" style={{ fontFamily: "'Lexend', sans-serif" }}>
                {tool.title}
              </h4>
              <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                {tool.desc}
              </p>

              <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-blue-600">
                <span>Open Tool</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          );
        })}
      </div>

    </div>
  );
};
