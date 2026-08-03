import React from 'react';
import { HelpCircle, ShieldCheck, Zap, Award } from 'lucide-react';

export const SeoContentSection = () => {
  return (
    <section className="w-full py-12 border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-950">
      <div className="max-w-5xl mx-auto px-4 space-y-12">
        
        {/* Why Choose Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-3">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1">Instant Browser Processing</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              No server queues, no file uploads. Converts photos in under 50 milliseconds using HTML5 Canvas & WebAssembly.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-3">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1">100% Privacy Guaranteed</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Your sensitive documents, signatures, and photos stay inside your device RAM and are never sent to any external server.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-3">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 dark:text-white text-base mb-1">Guaranteed Portal Acceptance</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Pre-configured rules for SSC CGL, NTA NEET, UPSC, IBPS, and Railway RRB portals ensure 0 rejection rates.
            </p>
          </div>
        </div>

        {/* Frequently Asked Questions (FAQ) for Organic SEO */}
        <div className="space-y-6">
          <div className="flex items-center space-x-2">
            <HelpCircle className="w-5 h-5 text-blue-600 dark:text-blue-400" />
            <h2 className="text-xl font-bold text-slate-900 dark:text-white font-['Outfit']">
              Frequently Asked Questions (Govt Exam Rules 2026)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2">
              <h4 className="font-bold text-sm text-slate-900 dark:text-slate-200">
                How to resize photo to 20 KB - 50 KB for SSC CGL & CHSL?
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Select the <strong>SSC Photo</strong> preset on SarkariDoc Studio, upload your passport photograph, enter your Candidate Name and Date of Photograph (D.O.P). Our smart binary compressor automatically outputs a JPEG file between 20 KB and 50 KB.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2">
              <h4 className="font-bold text-sm text-slate-900 dark:text-slate-200">
                Is Candidate Name and Date mandatory on SSC & UPSC Photos?
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                Yes! Staff Selection Commission (SSC) and Union Public Service Commission (UPSC) strictly reject photos without the candidate's name and photo capture date stamped at the bottom. SarkariDoc Studio auto-renders this overlay cleanly.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2">
              <h4 className="font-bold text-sm text-slate-900 dark:text-slate-200">
                How to remove dark background from signature photos?
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                When taking a signature photo on a phone, shadows often turn white paper gray. Enable our <strong>Pure White Paper Cleanup</strong> toggle when using any Signature preset to sharpen ink lines and convert backgrounds to 100% pure white.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 space-y-2">
              <h4 className="font-bold text-sm text-slate-900 dark:text-slate-200">
                What are NTA NEET 2026 Postcard photo dimensions?
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                NTA requires Postcard photographs to be exactly 4 inches by 6 inches (10.16 cm x 15.24 cm) in size, between 10 KB and 200 KB. Select the <strong>NTA Postcard Photo</strong> preset for automatic formatting.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
