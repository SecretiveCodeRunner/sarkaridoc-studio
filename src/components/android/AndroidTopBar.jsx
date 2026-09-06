import React from 'react';
import { Sparkles, Share2, ShieldCheck } from 'lucide-react';

export const AndroidTopBar = ({ onOpenInfo, onShare }) => {
  return (
    <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200/80 px-4 py-2.5 flex items-center justify-between safe-area-top shadow-xs">
      {/* App Identity */}
      <div className="flex items-center space-x-2.5">
        <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-blue-700 flex items-center justify-center shadow-md shadow-blue-500/25 ring-1 ring-blue-500/20 flex-shrink-0">
          <Sparkles className="w-4.5 h-4.5 text-white" aria-hidden="true" />
        </div>
        <div>
          <div className="flex items-center space-x-1.5">
            <span className="font-extrabold text-base tracking-tight text-slate-900" style={{ fontFamily: "'Lexend', sans-serif" }}>
              Sarkari<span className="text-blue-600">Doc</span>
            </span>
            <span className="px-1.5 py-0.2 rounded-md text-[9px] font-extrabold bg-blue-600 text-white uppercase tracking-wider">
              Studio
            </span>
          </div>
          <p className="text-[10px] text-slate-500 font-medium leading-none">100% On-Device &middot; Offline</p>
        </div>
      </div>

      {/* Trailing Actions */}
      <div className="flex items-center space-x-1.5">
        {/* Offline Badge */}
        <div className="flex items-center space-x-1 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-[11px] font-bold">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
          <span>Offline Ready</span>
        </div>

        {/* Share Button */}
        <button
          type="button"
          onClick={onShare}
          aria-label="Share App with Friends"
          className="w-8 h-8 rounded-full flex items-center justify-center text-slate-700 hover:bg-slate-100 active:scale-95 transition-all border border-slate-200"
        >
          <Share2 className="w-3.5 h-3.5 text-slate-600" />
        </button>

        {/* Info / Privacy Button */}
        <button
          type="button"
          onClick={onOpenInfo}
          aria-label="Privacy & Security Diagnostics"
          className="w-8 h-8 rounded-full flex items-center justify-center text-slate-700 hover:bg-slate-100 active:scale-95 transition-all border border-slate-200"
        >
          <ShieldCheck className="w-4 h-4 text-blue-600" />
        </button>
      </div>
    </header>
  );
};
