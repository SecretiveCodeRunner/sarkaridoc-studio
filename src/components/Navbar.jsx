import React, { useState, useEffect } from 'react';
import { ShieldCheck, Sparkles, CheckCircle2, Smartphone, FileText, Wand2, SlidersHorizontal, Sun, Moon } from 'lucide-react';

export const Navbar = ({ onOpenPdfStudio, onOpenBgRemover, onOpenImageResizer, isDarkMode, onToggleTheme }) => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    if (window.matchMedia('(display-mode: standalone)').matches) {
      setIsInstalled(true);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallPwa = async () => {
    if (!deferredPrompt) return;
    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    if (outcome === 'accepted') {
      setIsInstalled(true);
    }
    setDeferredPrompt(null);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-slate-950/90 dark:bg-slate-950/90 backdrop-blur-md transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center shadow-lg shadow-blue-500/20 ring-1 ring-white/20">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-extrabold text-xl tracking-tight text-white font-['Outfit']">
                Sarkari<span className="text-blue-400">Doc</span>
              </span>
              <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-blue-500/20 text-blue-300 border border-blue-500/30 rounded-full">
                Studio
              </span>
            </div>
            <p className="text-[11px] text-slate-400 hidden sm:block">100% Free & Private Govt Exam Photo & PDF Suite</p>
          </div>
        </div>

        {/* Quick Tools & Theme Toggle */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          
          <button
            onClick={onOpenPdfStudio}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-semibold shadow-sm transition-all active:scale-95"
          >
            <FileText className="w-3.5 h-3.5 text-emerald-400" />
            <span>PDF Resizer</span>
          </button>

          <button
            onClick={onOpenBgRemover}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs font-semibold shadow-sm transition-all active:scale-95"
          >
            <Wand2 className="w-3.5 h-3.5 text-purple-400" />
            <span>AI BG Remover</span>
          </button>

          <button
            onClick={onOpenImageResizer}
            className="hidden sm:flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 border border-blue-500/30 text-xs font-semibold shadow-sm transition-all active:scale-95"
          >
            <SlidersHorizontal className="w-3.5 h-3.5 text-blue-400" />
            <span>Image Resizer</span>
          </button>

          {deferredPrompt && !isInstalled && (
            <button
              onClick={handleInstallPwa}
              className="hidden md:flex items-center space-x-2 px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-md transition-all active:scale-95"
            >
              <Smartphone className="w-4 h-4" />
              <span>Install App</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );
};
