import React, { useState, useEffect } from 'react';
import { ShieldCheck, Sparkles, Camera, FileText, Share2, Smartphone, MoreVertical, Wand2 } from 'lucide-react';

export const Navbar = ({ 
  onOpenPdfStudio, 
  onOpenBgRemover, 
  onOpenImageResizer: _onOpenImageResizer, 
  onOpenPassportPhoto, 
  onOpenAbout,
  onOpenImageToPdf 
}) => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 flex items-center justify-between relative">

        {/* Logo — keyboard accessible */}
        <div
          className="flex items-center space-x-2 sm:space-x-3 cursor-pointer rounded-lg p-1 -m-1 focus-visible:outline-2 focus-visible:outline-blue-600 flex-shrink-0"
          onClick={onOpenAbout}
          onKeyDown={(e) => e.key === 'Enter' && onOpenAbout()}
          role="button"
          tabIndex={0}
          aria-label="SarkariDoc Studio — About this app"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center shadow-md shadow-blue-500/20 ring-1 ring-white flex-shrink-0">
            <Sparkles className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-white" aria-hidden="true" />
          </div>
          <div>
            <div className="flex items-center space-x-1.5 sm:space-x-2">
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-slate-900" style={{ fontFamily: "'Lexend', sans-serif" }}>
                Sarkari<span className="text-blue-600">Doc</span>
              </span>
              <span className="hidden sm:inline-flex px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-blue-700 border border-blue-200 rounded-full" aria-label="Studio edition">
                Studio
              </span>
            </div>
            <p className="text-[11px] text-slate-500 hidden sm:block font-medium">100% Free &amp; Private Govt Exam Photo &amp; PDF Suite</p>
          </div>
        </div>

        {/* Quick Tools */}
        <nav className="flex items-center space-x-1 sm:space-x-2" aria-label="Quick tools">

          <button
            onClick={onOpenPassportPhoto}
            aria-label="Open Passport Size Photo Maker"
            title="Passport Size Photo Maker (3.5×4.5cm, 2×2″, Studio Colors)"
            className="flex items-center space-x-1 px-2 sm:px-3 py-1.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-800 border border-blue-200 text-xs font-semibold shadow-xs transition-all active:scale-95 flex-shrink-0"
          >
            <Camera className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" aria-hidden="true" />
            <span>Passport Photo</span>
          </button>

          <button
            onClick={onOpenImageToPdf || onOpenPdfStudio}
            aria-label="Open Image to PDF Converter"
            title="Convert and combine images to PDF under 200KB/300KB"
            className="flex items-center space-x-1 px-2 sm:px-3 py-1.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-semibold shadow-xs transition-all active:scale-95 flex-shrink-0"
          >
            <FileText className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" aria-hidden="true" />
            <span>Image to PDF</span>
          </button>

          <button
            onClick={onOpenBgRemover}
            aria-label="Open Background Remover"
            title="1-Click AI Background Remover"
            className="hidden lg:flex items-center space-x-1 px-2.5 sm:px-3 py-1.5 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-800 border border-purple-200 text-xs font-semibold shadow-xs transition-all active:scale-95 flex-shrink-0"
          >
            <Wand2 className="w-3.5 h-3.5 text-purple-600 flex-shrink-0" aria-hidden="true" />
            <span>Background Remover</span>
          </button>

          {/* Desktop-only quick action buttons */}
          <button
            onClick={onOpenAbout}
            aria-label="About Us — Privacy &amp; Security information"
            className="hidden sm:flex items-center space-x-1 px-2.5 sm:px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 text-xs font-semibold shadow-xs transition-all active:scale-95 flex-shrink-0"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-slate-600 flex-shrink-0" aria-hidden="true" />
            <span>About Us</span>
          </button>

          <button
            onClick={handleShareApp}
            aria-label="Share SarkariDoc Studio with friends"
            title="Share App with Friends"
            className="hidden sm:flex items-center space-x-1 px-2.5 sm:px-3 py-1.5 rounded-xl bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 text-xs font-semibold shadow-xs transition-all active:scale-95 flex-shrink-0"
          >
            <Share2 className="w-3.5 h-3.5 text-amber-600 flex-shrink-0" aria-hidden="true" />
            <span>Share</span>
          </button>

          {!isInstalled && (
            <button
              onClick={handleInstallPwa}
              aria-label="Install SarkariDoc Studio as an app on your device"
              className="hidden sm:flex items-center space-x-1 px-2.5 sm:px-3.5 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-md transition-all active:scale-95 flex-shrink-0"
            >
              <Smartphone className="w-3.5 h-3.5 flex-shrink-0" aria-hidden="true" />
              <span>Install</span>
            </button>
          )}

          {/* Mobile More Options Button */}
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="More options"
            aria-expanded={mobileMenuOpen}
            className="sm:hidden p-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 transition-all active:scale-95 flex items-center justify-center flex-shrink-0"
          >
            <MoreVertical className="w-4 h-4" aria-hidden="true" />
          </button>
        </nav>

        {/* Mobile Dropdown Menu Popover */}
        {mobileMenuOpen && (
          <>
            <div 
              className="fixed inset-0 z-40 bg-black/10 backdrop-blur-[1px] sm:hidden" 
              onClick={() => setMobileMenuOpen(false)}
              aria-hidden="true"
            />
            <div 
              className="absolute right-3 top-14 w-52 bg-white/98 backdrop-blur-xl border border-slate-200/90 rounded-2xl shadow-xl p-1.5 z-50 animate-in fade-in zoom-in-95 duration-150 sm:hidden"
              role="menu"
              aria-orientation="vertical"
            >
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBgRemover();
                }}
                role="menuitem"
                className="w-full flex items-center space-x-2.5 px-3 py-2 rounded-xl hover:bg-purple-50 text-purple-900 text-xs font-semibold transition-colors text-left"
              >
                <div className="w-6 h-6 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0 text-purple-700">
                  <Wand2 className="w-3.5 h-3.5" aria-hidden="true" />
                </div>
                <span>Background Remover</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenAbout();
                }}
                role="menuitem"
                className="w-full flex items-center space-x-2.5 px-3 py-2 rounded-xl hover:bg-slate-100 text-slate-800 text-xs font-semibold transition-colors text-left"
              >
                <div className="w-6 h-6 rounded-lg bg-slate-100 flex items-center justify-center flex-shrink-0 text-slate-600">
                  <ShieldCheck className="w-3.5 h-3.5" aria-hidden="true" />
                </div>
                <span>About &amp; Privacy</span>
              </button>

              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleShareApp();
                }}
                role="menuitem"
                className="w-full flex items-center space-x-2.5 px-3 py-2 rounded-xl hover:bg-amber-50 text-amber-900 text-xs font-semibold transition-colors text-left"
              >
                <div className="w-6 h-6 rounded-lg bg-amber-100/70 flex items-center justify-center flex-shrink-0 text-amber-700">
                  <Share2 className="w-3.5 h-3.5" aria-hidden="true" />
                </div>
                <span>Share with Friends</span>
              </button>

              {!isInstalled && (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    handleInstallPwa();
                  }}
                  role="menuitem"
                  className="w-full flex items-center space-x-2.5 px-3 py-2 rounded-xl bg-blue-50/80 hover:bg-blue-100 text-blue-800 text-xs font-semibold transition-colors text-left mt-0.5 border border-blue-100"
                >
                  <div className="w-6 h-6 rounded-lg bg-blue-600 flex items-center justify-center flex-shrink-0 text-white shadow-xs">
                    <Smartphone className="w-3.5 h-3.5" aria-hidden="true" />
                  </div>
                  <span>Install App</span>
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </header>
  );
};
