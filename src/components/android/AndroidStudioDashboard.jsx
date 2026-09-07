import React from 'react';
import { 
  Camera, FileText, Sliders, Merge, FilePlus, Wand2, 
  SlidersHorizontal, Sparkles, ArrowRight 
} from 'lucide-react';
import { EXAM_PRESETS } from '../../data/presets';

export const AndroidStudioDashboard = ({
  onOpenPassportPhoto,
  onOpenImageToPdf,
  onOpenPdfCompressor,
  onOpenMergePdf,
  onOpenPdfToJpg,
  onOpenBgRemover,
  onOpenImageResizer,
  onSelectPreset,
  onViewAllPresets,
}) => {
  // Top 6 popular presets for quick access
  const popularPresets = EXAM_PRESETS.slice(0, 6);

  return (
    <div className="space-y-4 px-4 py-3 pb-24 max-w-lg mx-auto select-none">
      
      {/* 1. Featured Hero Tool: Passport Size Photo Maker */}
      <div className="space-y-1.5 pt-1">
        <div className="flex items-center justify-between px-1">
          <span className="text-[11px] font-bold tracking-wider text-slate-500 dark:text-slate-400 uppercase">
            Featured Studio Tool
          </span>
          <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400">Updated for 2026 Rules</span>
        </div>

        <button
          type="button"
          onClick={onOpenPassportPhoto}
          className="w-full text-left rounded-3xl bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 dark:from-blue-700 dark:via-blue-800 dark:to-indigo-950 text-white p-5 shadow-lg shadow-blue-600/25 dark:shadow-blue-950/40 border border-blue-500/20 active:scale-[0.98] transition-transform duration-150 relative overflow-hidden group"
        >
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 -mr-6 -mt-6 w-32 h-32 bg-white/10 dark:bg-white/5 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10">
            <div className="flex items-center justify-between mb-3">
              <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-inner">
                <Camera className="w-6 h-6" />
              </div>
              <span className="px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[11px] font-bold border border-white/30 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-amber-300" /> AI Fast Cutout
              </span>
            </div>

            <h3 className="text-lg font-extrabold tracking-tight" style={{ fontFamily: "'Lexend', sans-serif" }}>
              Passport Size Photo Maker
            </h3>
            <p className="text-xs text-blue-100 dark:text-blue-200 mt-1 leading-relaxed">
              Official 3.5×4.5 cm, 2×2″, stamp size crop with instant studio background replacement.
            </p>

            <div className="mt-4 flex items-center justify-between pt-3 border-t border-white/15">
              <div className="flex items-center gap-1.5 text-[11px] font-semibold text-blue-100 dark:text-blue-200">
                <span className="px-2 py-0.5 rounded-lg bg-white/15">3.5×4.5 cm</span>
                <span className="px-2 py-0.5 rounded-lg bg-white/15">2×2″ Visa</span>
                <span className="px-2 py-0.5 rounded-lg bg-white/15">Studio Colors</span>
              </div>
              <div className="w-8 h-8 rounded-full bg-white text-blue-700 flex items-center justify-center font-bold shadow-sm">
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </button>
      </div>

      {/* 2. Document & PDF Tools (Bento Grid) */}
      <div className="space-y-2">
        <div className="flex items-center justify-between px-1 pt-1">
          <span className="text-[11px] font-bold tracking-wider text-slate-500 dark:text-slate-400 uppercase">
            Document &amp; PDF Tools
          </span>
          <span className="text-[10px] font-semibold text-slate-400 dark:text-slate-500">Zero File Size Limits</span>
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          
          {/* Image to PDF */}
          <button
            type="button"
            onClick={onOpenImageToPdf}
            className="text-left p-4 rounded-3xl bg-emerald-50/70 hover:bg-emerald-50 dark:bg-slate-900 dark:hover:bg-slate-850 border border-emerald-200/80 dark:border-slate-800 active:scale-[0.97] transition-all flex flex-col justify-between min-h-[135px] shadow-xs group"
          >
            <div className="flex items-center justify-between w-full">
              <div className="w-10 h-10 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-md shadow-emerald-600/20">
                <FileText className="w-5 h-5" />
              </div>
              <span className="text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-emerald-200/60 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 border border-emerald-300/40 dark:border-emerald-800/60">
                Popular
              </span>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white text-sm mt-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors" style={{ fontFamily: "'Lexend', sans-serif" }}>
                Image to PDF
              </h4>
              <p className="text-[11px] text-slate-600 dark:text-slate-400 line-clamp-2 mt-0.5 font-medium leading-tight">
                Combine marksheets under 200KB.
              </p>
            </div>
          </button>

          {/* PDF Compressor */}
          <button
            type="button"
            onClick={onOpenPdfCompressor}
            className="text-left p-4 rounded-3xl bg-indigo-50/70 hover:bg-indigo-50 dark:bg-slate-900 dark:hover:bg-slate-850 border border-indigo-200/80 dark:border-slate-800 active:scale-[0.97] transition-all flex flex-col justify-between min-h-[135px] shadow-xs group"
          >
            <div className="flex items-center justify-between w-full">
              <div className="w-10 h-10 rounded-2xl bg-indigo-600 text-white flex items-center justify-center shadow-md shadow-indigo-600/20">
                <Sliders className="w-5 h-5" />
              </div>
              <span className="text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-indigo-200/60 dark:bg-indigo-950/80 text-indigo-800 dark:text-indigo-300 border border-indigo-300/40 dark:border-indigo-800/60">
                Target KB
              </span>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white text-sm mt-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors" style={{ fontFamily: "'Lexend', sans-serif" }}>
                PDF Compressor
              </h4>
              <p className="text-[11px] text-slate-600 dark:text-slate-400 line-clamp-2 mt-0.5 font-medium leading-tight">
                Reduce size to exact KB limit.
              </p>
            </div>
          </button>

          {/* Merge PDF */}
          <button
            type="button"
            onClick={onOpenMergePdf}
            className="text-left p-4 rounded-3xl bg-cyan-50/70 hover:bg-cyan-50 dark:bg-slate-900 dark:hover:bg-slate-850 border border-cyan-200/80 dark:border-slate-800 active:scale-[0.97] transition-all flex flex-col justify-between min-h-[135px] shadow-xs group"
          >
            <div className="w-10 h-10 rounded-2xl bg-cyan-600 text-white flex items-center justify-center shadow-md shadow-cyan-600/20">
              <Merge className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white text-sm mt-2 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" style={{ fontFamily: "'Lexend', sans-serif" }}>
                Merge PDF
              </h4>
              <p className="text-[11px] text-slate-600 dark:text-slate-400 line-clamp-2 mt-0.5 font-medium leading-tight">
                Join multiple PDFs into 1 file.
              </p>
            </div>
          </button>

          {/* PDF to JPG */}
          <button
            type="button"
            onClick={onOpenPdfToJpg}
            className="text-left p-4 rounded-3xl bg-amber-50/70 hover:bg-amber-50 dark:bg-slate-900 dark:hover:bg-slate-850 border border-amber-200/80 dark:border-slate-800 active:scale-[0.97] transition-all flex flex-col justify-between min-h-[135px] shadow-xs group"
          >
            <div className="w-10 h-10 rounded-2xl bg-amber-600 text-white flex items-center justify-center shadow-md shadow-amber-600/20">
              <FilePlus className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white text-sm mt-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors" style={{ fontFamily: "'Lexend', sans-serif" }}>
                PDF to JPG
              </h4>
              <p className="text-[11px] text-slate-600 dark:text-slate-400 line-clamp-2 mt-0.5 font-medium leading-tight">
                Extract high-resolution pages.
              </p>
            </div>
          </button>

        </div>
      </div>

      {/* 3. Photo & Signature Utilities */}
      <div className="space-y-2">
        <div className="flex items-center justify-between px-1 pt-1">
          <span className="text-[11px] font-bold tracking-wider text-slate-500 dark:text-slate-400 uppercase">
            Photo &amp; Signature Utilities
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          {/* Background Remover */}
          <button
            type="button"
            onClick={onOpenBgRemover}
            className="text-left p-4 rounded-3xl bg-purple-50/70 hover:bg-purple-50 dark:bg-slate-900 dark:hover:bg-slate-850 border border-purple-200/80 dark:border-slate-800 active:scale-[0.97] transition-all flex flex-col justify-between min-h-[125px] shadow-xs group"
          >
            <div className="w-10 h-10 rounded-2xl bg-purple-600 text-white flex items-center justify-center shadow-md shadow-purple-600/20">
              <Wand2 className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white text-sm mt-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors" style={{ fontFamily: "'Lexend', sans-serif" }}>
                Background Remover
              </h4>
              <p className="text-[11px] text-slate-600 dark:text-slate-400 line-clamp-2 mt-0.5 font-medium leading-tight">
                AI Neural Portrait Cutout.
              </p>
            </div>
          </button>

          {/* Custom Resizer */}
          <button
            type="button"
            onClick={onOpenImageResizer}
            className="text-left p-4 rounded-3xl bg-slate-100/70 hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-850 border border-slate-200 dark:border-slate-800 active:scale-[0.97] transition-all flex flex-col justify-between min-h-[125px] shadow-xs group"
          >
            <div className="w-10 h-10 rounded-2xl bg-slate-700 dark:bg-slate-800 text-white flex items-center justify-center shadow-md shadow-slate-700/20">
              <SlidersHorizontal className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-slate-900 dark:text-white text-sm mt-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" style={{ fontFamily: "'Lexend', sans-serif" }}>
                Custom Resizer
              </h4>
              <p className="text-[11px] text-slate-600 dark:text-slate-400 line-clamp-2 mt-0.5 font-medium leading-tight">
                Exact cm/px &amp; target KB limits.
              </p>
            </div>
          </button>
        </div>
      </div>

      {/* 4. Popular Govt Exam Presets (Fast Rail) */}
      <div className="space-y-2 pt-1">
        <div className="flex items-center justify-between px-1">
          <span className="text-[11px] font-bold tracking-wider text-slate-500 dark:text-slate-400 uppercase">
            Fast-Track Exam Presets
          </span>
          <button
            type="button"
            onClick={onViewAllPresets}
            className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center gap-0.5"
          >
            <span>See All 45+</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        <div className="space-y-2">
          {popularPresets.map((preset) => (
            <button
              key={preset.id}
              type="button"
              onClick={() => onSelectPreset(preset)}
              className="w-full text-left p-3.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/90 dark:border-slate-800 hover:border-blue-500 dark:hover:border-blue-500 active:scale-[0.98] transition-all shadow-xs flex items-center justify-between group"
            >
              <div className="flex items-center space-x-3 min-w-0">
                <div className="w-9 h-9 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/60 text-blue-700 dark:text-blue-300 font-bold text-xs flex items-center justify-center flex-shrink-0">
                  {preset.exam.slice(0, 3).toUpperCase()}
                </div>
                <div className="min-w-0">
                  <h4 className="font-bold text-slate-900 dark:text-white text-xs truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {preset.name}
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate">
                    {preset.widthMm && preset.heightMm 
                      ? `${preset.widthMm}×${preset.heightMm} mm` 
                      : `${preset.widthPx}×${preset.heightPx} px`}
                    {' '}&middot;{' '}Max {preset.maxKb} KB
                  </p>
                </div>
              </div>

              <div className="px-2.5 py-1 rounded-lg bg-slate-50 dark:bg-slate-800 group-hover:bg-blue-50 dark:group-hover:bg-blue-950/80 text-[11px] font-bold text-slate-600 dark:text-slate-300 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors flex items-center gap-1 flex-shrink-0 border border-transparent dark:border-slate-700">
                <span>Select</span>
                <ArrowRight className="w-3 h-3 text-slate-400 dark:text-slate-500 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
              </div>
            </button>
          ))}
        </div>
      </div>

    </div>
  );
};
