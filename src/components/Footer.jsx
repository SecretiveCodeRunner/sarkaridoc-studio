import React from 'react';
import { Shield, Share2 } from 'lucide-react';

export const Footer = () => {
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
    <footer className="w-full py-8 border-t border-slate-200 bg-white text-slate-500 text-xs font-['Outfit']">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center space-x-2">
          <span className="font-bold text-slate-900">SarkariDoc Studio</span>
          <span>© {new Date().getFullYear()}</span>
          <span>•</span>
          <span>Designed for Indian Govt Exam Aspirants</span>
        </div>

        <div className="flex items-center space-x-3 text-slate-600">
          <button
            onClick={handleShareApp}
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold border border-blue-200 transition-all active:scale-95 shadow-xs"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Share App with Friends</span>
          </button>

          <span>•</span>

          <span className="flex items-center space-x-1">
            <Shield className="w-3.5 h-3.5 text-emerald-600" />
            <span>100% Client-Side Privacy</span>
          </span>
        </div>

      </div>
    </footer>
  );
};
