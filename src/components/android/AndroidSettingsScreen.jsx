import React, { useState } from 'react';
import { 
  Sun, Moon, Laptop, Share2, FileDown, Lock, 
  ShieldCheck, Cpu, HardDrive, CheckCircle2, Sparkles, Globe 
} from 'lucide-react';
import { getStoredTheme, applyTheme } from '../../utils/themeManager';
import { shareAppApk, shareAppLink } from '../../utils/downloadHelper';
import { Capacitor } from '@capacitor/core';

export const AndroidSettingsScreen = () => {
  const [currentTheme, setCurrentTheme] = useState(() => getStoredTheme());
  const isNative = typeof window !== 'undefined' && Capacitor.isNativePlatform();

  const handleThemeChange = (theme) => {
    setCurrentTheme(theme);
    applyTheme(theme);
  };

  return (
    <div className="space-y-4 px-4 py-3 pb-28 max-w-lg mx-auto select-none">
      
      {/* 1. Theme Selection Card (Dark Mode / White Mode) */}
      <div className="space-y-2">
        <span className="text-[11px] font-bold tracking-wider text-slate-500 dark:text-slate-400 uppercase px-1">
          Appearance &amp; Display
        </span>

        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/90 dark:border-slate-800 p-4 shadow-xs space-y-3 transition-colors duration-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                {currentTheme === 'dark' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
              </div>
              <div>
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">App Color Theme</h3>
                <p className="text-[10px] text-slate-500 dark:text-slate-400">Choose between White mode, Dark mode, or System</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2 pt-1">
            {/* White / Light Mode */}
            <button
              type="button"
              onClick={() => handleThemeChange('light')}
              className={`py-2.5 px-3 rounded-2xl flex flex-col items-center justify-center space-y-1.5 border transition-all active:scale-95 ${
                currentTheme === 'light'
                  ? 'bg-blue-50 dark:bg-blue-900/30 border-blue-600 text-blue-700 dark:text-blue-300 font-extrabold shadow-xs ring-2 ring-blue-500/20'
                  : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100'
              }`}
            >
              <Sun className={`w-4 h-4 ${currentTheme === 'light' ? 'text-amber-500 fill-amber-500' : ''}`} />
              <span className="text-[11px]">White Mode</span>
            </button>

            {/* Dark Mode */}
            <button
              type="button"
              onClick={() => handleThemeChange('dark')}
              className={`py-2.5 px-3 rounded-2xl flex flex-col items-center justify-center space-y-1.5 border transition-all active:scale-95 ${
                currentTheme === 'dark'
                  ? 'bg-blue-50 dark:bg-blue-900/30 border-blue-600 text-blue-700 dark:text-blue-300 font-extrabold shadow-xs ring-2 ring-blue-500/20'
                  : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100'
              }`}
            >
              <Moon className={`w-4 h-4 ${currentTheme === 'dark' ? 'text-blue-400 fill-blue-400' : ''}`} />
              <span className="text-[11px]">Dark Mode</span>
            </button>

            {/* System Auto */}
            <button
              type="button"
              onClick={() => handleThemeChange('system')}
              className={`py-2.5 px-3 rounded-2xl flex flex-col items-center justify-center space-y-1.5 border transition-all active:scale-95 ${
                currentTheme === 'system'
                  ? 'bg-blue-50 dark:bg-blue-900/30 border-blue-600 text-blue-700 dark:text-blue-300 font-extrabold shadow-xs ring-2 ring-blue-500/20'
                  : 'bg-slate-50 dark:bg-slate-800/60 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-100'
              }`}
            >
              <Laptop className="w-4 h-4" />
              <span className="text-[11px]">System Auto</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Share App & APK Distribution */}
      <div className="space-y-2">
        <span className="text-[11px] font-bold tracking-wider text-slate-500 dark:text-slate-400 uppercase px-1">
          Share &amp; Distribution
        </span>

        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/90 dark:border-slate-800 p-4 shadow-xs space-y-3 transition-colors duration-200">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-xs font-bold text-slate-900 dark:text-white">Help Friends &amp; Students</span>
          </div>

          <p className="text-xs text-slate-500 dark:text-slate-400">
            Share SarkariDoc Studio with fellow applicants preparing for SSC, UPSC, Railway, NEET, or State exams.
          </p>

          <div className="space-y-2 pt-1">
            {/* Share APK Button (Native Android Only) */}
            {isNative && (
              <button
                type="button"
                onClick={shareAppApk}
                className="w-full py-3 px-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 hover:bg-emerald-100 dark:hover:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 text-xs font-bold flex items-center justify-between border border-emerald-200 dark:border-emerald-800/60 active:scale-98 transition-all"
              >
                <div className="flex items-center space-x-2.5">
                  <FileDown className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-left">Send APK File Directly (Offline Transfer)</span>
                </div>
                <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-200/60 dark:bg-emerald-800/60 text-emerald-800 dark:text-emerald-200">
                  .apk
                </span>
              </button>
            )}

            {/* Share Web Link */}
            <button
              type="button"
              onClick={shareAppLink}
              className="w-full py-3 px-4 rounded-2xl bg-blue-50 dark:bg-blue-950/40 hover:bg-blue-100 dark:hover:bg-blue-900/50 text-blue-700 dark:text-blue-300 text-xs font-bold flex items-center justify-between border border-blue-200 dark:border-blue-800/60 active:scale-98 transition-all"
            >
              <div className="flex items-center space-x-2.5">
                <Globe className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Share Official Web App Link</span>
              </div>
              <Share2 className="w-3.5 h-3.5 opacity-70" />
            </button>
          </div>
        </div>
      </div>

      {/* 3. Zero-Upload Privacy Guarantee */}
      <div className="rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-blue-700 text-white p-5 shadow-lg shadow-blue-600/20">
        <div className="w-11 h-11 rounded-2xl bg-white/15 border border-white/20 flex items-center justify-center mb-3">
          <Lock className="w-5 h-5 text-white" />
        </div>
        <h2 className="text-sm font-extrabold" style={{ fontFamily: "'Lexend', sans-serif" }}>
          Zero-Upload Privacy Architecture
        </h2>
        <p className="text-xs text-blue-100 mt-1 leading-relaxed">
          SarkariDoc Studio has NO backend server for file processing. All photo cropping, signature isolating, and PDF compressing execute strictly in your phone's memory.
        </p>

        <div className="mt-4 pt-3 border-t border-white/15 flex items-center justify-between text-xs font-semibold">
          <span className="flex items-center gap-1 text-emerald-300">
            <CheckCircle2 className="w-4 h-4" /> 100% Safe for Aadhaar &amp; Govt IDs
          </span>
          <span className="text-blue-200">No Sign-up</span>
        </div>
      </div>

      {/* 4. Bundled Offline Engines Status */}
      <div className="space-y-2">
        <span className="text-[11px] font-bold tracking-wider text-slate-500 dark:text-slate-400 uppercase px-1">
          Bundled On-Device Engines
        </span>

        <div className="space-y-2 bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/90 dark:border-slate-800 p-4 shadow-xs transition-colors duration-200">
          <div className="flex items-center justify-between py-1.5 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center space-x-2.5">
              <Cpu className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              <div>
                <p className="text-xs font-bold text-slate-800 dark:text-slate-200">MediaPipe Neural Portrait AI</p>
                <p className="text-[10px] text-slate-500 dark:text-slate-400">244 KB TFLite Model + SIMD WASM</p>
              </div>
            </div>
            <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
              Bundled
            </span>
          </div>

          <div className="flex items-center justify-between py-1.5 border-b border-slate-100 dark:border-slate-800">
            <div className="flex items-center space-x-2.5">
              <HardDrive className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <div>
                <p className="text-xs font-bold text-slate-800 dark:text-slate-200">PDF.js WebAssembly Worker</p>
                <p className="text-[10px] text-slate-500 dark:text-slate-400">1.3 MB Local Asset Bundle</p>
              </div>
            </div>
            <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
              Bundled
            </span>
          </div>

          <div className="flex items-center justify-between py-1.5">
            <div className="flex items-center space-x-2.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <div>
                <p className="text-xs font-bold text-slate-800 dark:text-slate-200">Local Canvas Binary Optimizer</p>
                <p className="text-[10px] text-slate-500 dark:text-slate-400">Target KB Iterative Encoder</p>
              </div>
            </div>
            <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800">
              Active
            </span>
          </div>
        </div>
      </div>

      {/* 5. Version Info */}
      <div className="text-center py-2">
        <p className="text-[11px] font-bold text-slate-500 dark:text-slate-400">SarkariDoc Studio v1.1.0</p>
        <p className="text-[10px] text-slate-400 dark:text-slate-500">Fast, Offline &amp; Free Forever &middot; Built for Bharat</p>
      </div>

    </div>
  );
};
