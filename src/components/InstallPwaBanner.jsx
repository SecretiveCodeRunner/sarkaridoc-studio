import React, { useState, useEffect } from 'react';
import { Smartphone, Download, X, Share, PlusSquare, Sparkles } from 'lucide-react';

export const InstallPwaBanner = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [isIOS, setIsIOS] = useState(false);
  const [showIOSModal, setShowIOSModal] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    // Check local storage dismissal
    const isDismissed = localStorage.getItem('sarkaridoc_pwa_dismissed');
    if (isDismissed) {
      setDismissed(true);
    }

    // Check if already running in standalone PWA mode
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone;
    if (isStandalone) {
      setIsInstalled(true);
      return;
    }

    // Detect iOS
    const userAgent = window.navigator.userAgent.toLowerCase();
    const isIOSDevice = /iphone|ipad|ipod/.test(userAgent);
    setIsIOS(isIOSDevice);

    // Listen for Chrome/Android beforeinstallprompt
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setIsInstalled(true);
      }
      setDeferredPrompt(null);
    } else if (isIOS) {
      setShowIOSModal(true);
    }
  };

  const handleDismiss = () => {
    setDismissed(true);
    localStorage.setItem('sarkaridoc_pwa_dismissed', 'true');
  };

  if (isInstalled || dismissed) return null;

  // Render bottom bar if prompt is available OR if on iOS
  const shouldShowBanner = deferredPrompt || isIOS;
  if (!shouldShowBanner) return null;

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
      } catch (err) {
        alert(`Share link: ${window.location.href}`);
      }
    }
  };

  return (
    <>
      {/* Floating Bottom Sticky Install & Share Banner */}
      <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-md z-50 animate-in slide-in-from-bottom duration-300">
        <div className="bg-slate-900 border border-slate-700/80 text-white p-3.5 rounded-2xl shadow-2xl backdrop-blur-xl flex items-center justify-between gap-3 font-['Outfit']">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center shrink-0 shadow-md ring-1 ring-white/20">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div>
              <h4 className="font-bold text-xs text-slate-100 flex items-center gap-1.5">
                SarkariDoc Studio
              </h4>
              <p className="text-[11px] text-slate-300">
                Install app or share link with friends
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <button
              onClick={handleShareApp}
              className="px-2.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-amber-400 border border-slate-700 text-xs font-bold shadow-xs flex items-center gap-1 transition-all active:scale-95 shrink-0"
              title="Share App"
            >
              <Share className="w-3.5 h-3.5" />
              <span className="hidden xs:inline">Share</span>
            </button>

            <button
              onClick={handleInstallClick}
              className="px-3 py-1.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow-lg shadow-blue-500/25 flex items-center gap-1 transition-all active:scale-95 shrink-0"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Install</span>
            </button>

            <button
              onClick={handleDismiss}
              aria-label="Dismiss banner"
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* iOS Installation Instruction Modal */}
      {showIOSModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-md flex items-end sm:items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 max-w-sm w-full text-slate-900 shadow-2xl border border-slate-100 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">Install on iPhone / iPad</h3>
                  <p className="text-xs text-slate-500">Simple 2-step setup</p>
                </div>
              </div>
              <button
                onClick={() => setShowIOSModal(false)}
                className="p-1 text-slate-400 hover:text-slate-600 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-3 my-4 text-xs font-medium text-slate-700">
              <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-2xl border border-slate-100">
                <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-xs shrink-0">1</span>
                <p className="flex-1">
                  Tap the <strong className="text-slate-900 inline-flex items-center gap-1"><Share className="w-3.5 h-3.5 text-blue-600" /> Share</strong> button in Safari toolbar.
                </p>
              </div>

              <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-2xl border border-slate-100">
                <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 font-bold flex items-center justify-center text-xs shrink-0">2</span>
                <p className="flex-1">
                  Scroll down & select <strong className="text-slate-900 inline-flex items-center gap-1"><PlusSquare className="w-3.5 h-3.5 text-blue-600" /> Add to Home Screen</strong>.
                </p>
              </div>
            </div>

            <button
              onClick={() => setShowIOSModal(false)}
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl text-xs transition-colors shadow-md"
            >
              Got it!
            </button>
          </div>
        </div>
      )}
    </>
  );
};
