import React from 'react';
import { Sparkles, Share2, Settings } from 'lucide-react';

export const AndroidTopBar = ({ onOpenSettings, onShare }) => {
  return (
    <header className="sticky top-0 z-30 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200/80 dark:border-slate-800/80 px-4 py-2.5 flex items-center justify-between safe-area-top shadow-xs transition-colors duration-200">
      {/* App Identity */}
      <div className="flex items-center space-x-2.5">
        <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-blue-700 flex items-center justify-center shadow-md shadow-blue-500/25 ring-1 ring-blue-500/20 flex-shrink-0">
          <Sparkles className="w-4.5 h-4.5 text-white" aria-hidden="true" />
        </div>
        <div>
          <div className="flex items-center space-x-1.5">
            <span className="font-extrabold text-base tracking-tight text-slate-900 dark:text-white" style={{ fontFamily: "'Lexend', sans-serif" }}>
              Sarkari<span className="text-blue-600 dark:text-blue-400">Doc</span>
            </span>
            <span className="px-1.5 py-0.2 rounded-md text-[9px] font-extrabold bg-blue-600 text-white uppercase tracking-wider">
              Studio
            </span>
          </div>
          <p className="text-[10px] text-slate-500 dark:text-slate-400 font-medium leading-none">100% On-Device &middot; Offline</p>
        </div>
      </div>

      {/* Trailing Actions */}
      <div className="flex items-center space-x-1.5">
        {/* Offline Badge */}
        <div className="flex items-center space-x-1 px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800/60 text-emerald-700 dark:text-emerald-400 text-[11px] font-bold">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
          <span>Offline Ready</span>
        </div>

        {/* Share Button */}
        <button
          type="button"
          onClick={onShare}
          aria-label="Share App Website Link"
          className="w-8 h-8 rounded-full flex items-center justify-center text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 active:scale-95 transition-all border border-slate-200 dark:border-slate-800"
        >
          <Share2 className="w-3.5 h-3.5 text-slate-600 dark:text-slate-300" />
        </button>

        {/* Settings Button */}
        <button
          type="button"
          onClick={onOpenSettings}
          aria-label="Open App Settings"
          className="w-8 h-8 rounded-full flex items-center justify-center text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 active:scale-95 transition-all border border-slate-200 dark:border-slate-800"
        >
          <Settings className="w-4 h-4 text-slate-700 dark:text-slate-300" />
        </button>
      </div>
    </header>
  );
};
