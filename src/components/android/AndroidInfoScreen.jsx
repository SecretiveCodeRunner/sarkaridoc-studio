import React from 'react';
import { ShieldCheck, Cpu, HardDrive, Share2, CheckCircle2, Lock, Sparkles } from 'lucide-react';

export const AndroidInfoScreen = ({ onShare }) => {
  return (
    <div className="space-y-4 px-4 py-3 pb-24 max-w-lg mx-auto select-none">
      
      {/* 1. Privacy Shield Card */}
      <div className="rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 text-white p-5 shadow-lg shadow-blue-600/20">
        <div className="w-12 h-12 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center mb-3">
          <Lock className="w-6 h-6 text-white" />
        </div>
        <h2 className="text-base font-extrabold" style={{ fontFamily: "'Lexend', sans-serif" }}>
          Zero-Upload Privacy Architecture
        </h2>
        <p className="text-xs text-blue-100 mt-1 leading-relaxed">
          SarkariDoc Studio does not have a backend server for photo or document processing. Every single image crop, AI background cutout, and PDF compression executes strictly in your phone's memory.
        </p>

        <div className="mt-4 pt-3 border-t border-white/15 flex items-center justify-between text-xs font-semibold">
          <span className="flex items-center gap-1 text-emerald-300">
            <CheckCircle2 className="w-4 h-4" /> 100% Safe for Govt IDs
          </span>
          <span className="text-blue-200">No Sign-up</span>
        </div>
      </div>

      {/* 2. Bundled Offline Engines Status */}
      <div className="space-y-2">
        <span className="text-[11px] font-bold tracking-wider text-slate-500 uppercase px-1">
          Bundled On-Device Engines
        </span>

        <div className="space-y-2 bg-white rounded-3xl border border-slate-200/90 p-4 shadow-xs">
          <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
            <div className="flex items-center space-x-2.5">
              <Cpu className="w-4 h-4 text-blue-600" />
              <div>
                <p className="text-xs font-bold text-slate-800">MediaPipe Neural Portrait AI</p>
                <p className="text-[10px] text-slate-500">244 KB TFLite Model + SIMD WASM</p>
              </div>
            </div>
            <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
              Bundled
            </span>
          </div>

          <div className="flex items-center justify-between py-1.5 border-b border-slate-100">
            <div className="flex items-center space-x-2.5">
              <HardDrive className="w-4 h-4 text-indigo-600" />
              <div>
                <p className="text-xs font-bold text-slate-800">PDF.js WebAssembly Worker</p>
                <p className="text-[10px] text-slate-500">1.3 MB Local Asset Bundle</p>
              </div>
            </div>
            <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
              Bundled
            </span>
          </div>

          <div className="flex items-center justify-between py-1.5">
            <div className="flex items-center space-x-2.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <div>
                <p className="text-xs font-bold text-slate-800">Local Canvas Binary Optimizer</p>
                <p className="text-[10px] text-slate-500">Target KB Iterative Encoder</p>
              </div>
            </div>
            <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
              Active
            </span>
          </div>
        </div>
      </div>

      {/* 3. App Details & Share */}
      <div className="space-y-2">
        <span className="text-[11px] font-bold tracking-wider text-slate-500 uppercase px-1">
          App Version &amp; Sharing
        </span>

        <div className="bg-white rounded-3xl border border-slate-200/90 p-4 shadow-xs space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span className="text-xs font-bold text-slate-900">SarkariDoc Studio v1.0.0</span>
            </div>
            <span className="text-xs text-slate-500 font-medium">Native Android Release</span>
          </div>

          <p className="text-xs text-slate-500">
            Free forever utility engineered for students, job applicants, and cyber cafes.
          </p>

          <button
            type="button"
            onClick={onShare}
            className="w-full py-3 rounded-2xl bg-blue-50 hover:bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center space-x-2 border border-blue-200 active:scale-95 transition-all"
          >
            <Share2 className="w-4 h-4" />
            <span>Share APK / App with Friends</span>
          </button>
        </div>
      </div>

    </div>
  );
};
