import React, { useState, useEffect } from 'react';
import { ShieldCheck, Sparkles, Camera, FileText, Share2, Smartphone } from 'lucide-react';

export const Navbar = ({ onOpenPdfStudio, onOpenBgRemover: _onOpenBgRemover, onOpenImageResizer: _onOpenImageResizer, onOpenPassportPhoto, onOpenAbout }) => {
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

  const handleShareApp = async () => {
    const shareData = {
      title: 'SarkariDoc Studio — Free Govt Exam Photo & PDF Suite',
      text: 'Resize photos & compress PDFs to exact KB limits for SSC, NEET, JEE, UPSC, IBPS exams! 100% Free & Private.',
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        if (err.name !== 'AbortError') {
          console.error('Share failed:', err);
        }
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert('SarkariDoc Studio link copied to clipboard! Share it with your friends on WhatsApp or Telegram.');
      } catch {
        alert(`Share link: ${window.location.href}`);
      }
    }
  };

  const handleInstallPwa = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setIsInstalled(true);
      }
      setDeferredPrompt(null);
    } else {
      const userAgent = window.navigator.userAgent.toLowerCase();
      if (/iphone|ipad|ipod/.test(userAgent)) {
        alert('To install SarkariDoc on iPhone/iPad:\n1. Tap the Share button in Safari\n2. Select "Add to Home Screen"');
      } else {
        alert('To install, open browser menu (3 dots) and tap "Add to Home Screen" or "Install App".');
      }
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/96 backdrop-blur-md shadow-[0_1px_3px_rgba(0,0,0,0.06)]" role="banner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

        {/* Logo — keyboard accessible */}
        <div
          className="flex items-center space-x-3 cursor-pointer rounded-lg p-1 -m-1 focus-visible:outline-2 focus-visible:outline-blue-600"
          onClick={onOpenAbout}
          onKeyDown={(e) => e.key === 'Enter' && onOpenAbout()}
          role="button"
          tabIndex={0}
          aria-label="SarkariDoc Studio — About this app"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center shadow-md shadow-blue-500/20 ring-1 ring-white flex-shrink-0">
            <Sparkles className="w-5 h-5 text-white" aria-hidden="true" />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="font-extrabold text-xl tracking-tight text-slate-900" style={{ fontFamily: "'Lexend', sans-serif" }}>
                Sarkari<span className="text-blue-600">Doc</span>
              </span>
              <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200 rounded-full" aria-label="Studio edition">
                Studio
              </span>
            </div>
            <p className="text-[11px] text-slate-500 hidden sm:block font-medium">100% Free &amp; Private Govt Exam Photo &amp; PDF Suite</p>
          </div>
        </div>

        {/* Quick Tools */}
        <nav className="flex items-center space-x-1.5 sm:space-x-2" aria-label="Quick tools">

          <button
            onClick={onOpenPassportPhoto}
            aria-label="Open Passport Photo Studio"
            className="flex items-center space-x-1 px-2.5 sm:px-3 py-1.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-800 border border-blue-200 text-xs font-semibold shadow-xs transition-all active:scale-95"
          >
            <Camera className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" aria-hidden="true" />
            <span className="hidden xs:inline">Passport Photo</span>
            <span className="xs:hidden">Passport</span>
          </button>

          <button
            onClick={onOpenPdfStudio}
            aria-label="Open PDF Resizer tool"
            className="flex items-center space-x-1 px-2.5 sm:px-3 py-1.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-semibold shadow-xs transition-all active:scale-95"
          >
            <FileText className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" aria-hidden="true" />
            <span className="hidden xs:inline">PDF Resizer</span>
            <span className="xs:hidden">PDF</span>
          </button>

          <button
            onClick={onOpenAbout}
            aria-label="About Us — Privacy &amp; Security information"
            className="flex items-center space-x-1 px-2.5 sm:px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 text-xs font-semibold shadow-xs transition-all active:scale-95"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-slate-600 flex-shrink-0" aria-hidden="true" />
            <span className="hidden sm:inline">About Us</span>
          </button>

          <button
            onClick={handleShareApp}
            aria-label="Share SarkariDoc Studio with friends"
            title="Share App with Friends"
            className="flex items-center space-x-1 px-2.5 sm:px-3 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 text-xs font-semibold shadow-xs transition-all active:scale-95"
          >
            <Share2 className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" aria-hidden="true" />
            <span className="hidden sm:inline">Share</span>
          </button>

          {!isInstalled && (
            <button
              onClick={handleInstallPwa}
              aria-label="Install SarkariDoc Studio as an app on your device"
              className="flex items-center space-x-1 px-2.5 sm:px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-md transition-all active:scale-95"
            >
              <Smartphone className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" />
              <span>Install</span>
            </button>
          )}
        </nav>
      </div>
    </header>
  );
};
