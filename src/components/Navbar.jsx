import React, { useState, useEffect } from 'react';
import { ShieldCheck, Sparkles, CheckCircle2, Smartphone, FileText, Wand2, SlidersHorizontal, Camera } from 'lucide-react';

export const Navbar = ({ onOpenPdfStudio, onOpenBgRemover, onOpenImageResizer, onOpenPassportPhoto }) => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    if (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone) {
      setIsInstalled(true);
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallPwa = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setIsInstalled(true);
      }
      setDeferredPrompt(null);
    } else {
      // Trigger iOS or custom prompt if banner isn't active
      const userAgent = window.navigator.userAgent.toLowerCase();
      if (/iphone|ipad|ipod/.test(userAgent)) {
        alert('To install SarkariDoc on iPhone/iPad:\n1. Tap the Share button in Safari\n2. Select "Add to Home Screen"');
      } else {
        alert('To install, open browser menu (3 dots) and tap "Add to Home Screen" or "Install App".');
      }
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md shadow-xs font-['Outfit']">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center shadow-md shadow-blue-500/20 ring-1 ring-white">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-extrabold text-xl tracking-tight text-slate-900">
                Sarkari<span className="text-blue-600">Doc</span>
              </span>
              <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200 rounded-full">
                Studio
              </span>
            </div>
            <p className="text-[11px] text-slate-500 hidden sm:block font-medium">100% Free & Private Govt Exam Photo & PDF Suite</p>
          </div>
        </div>

        {/* Quick Tools */}
        <div className="flex items-center space-x-1.5 sm:space-x-2">
          
          <button
            onClick={onOpenPassportPhoto}
            className="flex items-center space-x-1 px-2.5 sm:px-3 py-1.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-800 border border-blue-200 text-xs font-semibold shadow-xs transition-all active:scale-95"
          >
            <Camera className="w-3.5 h-3.5 text-blue-600" />
            <span className="hidden xs:inline">Passport Photo</span>
            <span className="xs:hidden">Passport</span>
          </button>

          <button
            onClick={onOpenPdfStudio}
            className="flex items-center space-x-1 px-2.5 sm:px-3 py-1.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-semibold shadow-xs transition-all active:scale-95"
          >
            <FileText className="w-3.5 h-3.5 text-emerald-600" />
            <span className="hidden xs:inline">PDF Resizer</span>
            <span className="xs:hidden">PDF</span>
          </button>

          <button
            onClick={onOpenBgRemover}
            className="hidden sm:flex items-center space-x-1 px-2.5 sm:px-3 py-1.5 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-800 border border-purple-200 text-xs font-semibold shadow-xs transition-all active:scale-95"
          >
            <Wand2 className="w-3.5 h-3.5 text-purple-600" />
            <span>AI BG Remover</span>
          </button>

          {!isInstalled && (
            <button
              onClick={handleInstallPwa}
              className="flex items-center space-x-1 px-2.5 sm:px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-md transition-all active:scale-95"
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Install</span>
            </button>
          )}
        </div>
      </div>
    </header>
  );

};
