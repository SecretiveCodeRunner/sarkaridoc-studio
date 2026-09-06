import React from 'react';
import { HelpCircle, ShieldCheck, Zap, Award } from 'lucide-react';

export const SeoContentSection = () => {
  return (
    <section className="w-full py-12 border-t border-slate-100 bg-white" aria-label="Why choose SarkariDoc Studio">
      <div className="max-w-5xl mx-auto px-4 space-y-12">

        {/* Why Choose Section */}
        <div>
          <h2 className="text-center text-xl font-bold text-slate-800 mb-6" style={{ fontFamily: "'Lexend', sans-serif", letterSpacing: '-0.02em' }}>
            Why 1 Lakh+ Students Trust SarkariDoc Studio
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center mb-3" aria-hidden="true">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-1.5" style={{ fontFamily: "'Lexend', sans-serif" }}>Instant Browser Processing</h3>
              <p className="text-sm text-slate-600 leading-relaxed" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                No server queues, no file uploads. Converts photos in under 50 milliseconds using HTML5 Canvas &amp; WebAssembly.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-3" aria-hidden="true">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-1.5" style={{ fontFamily: "'Lexend', sans-serif" }}>100% Privacy Guaranteed</h3>
              <p className="text-sm text-slate-600 leading-relaxed" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                Your sensitive documents, signatures, and photos stay inside your device RAM and are never sent to any external server.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 flex items-center justify-center mb-3" aria-hidden="true">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-slate-900 text-base mb-1.5" style={{ fontFamily: "'Lexend', sans-serif" }}>Guaranteed Portal Acceptance</h3>
              <p className="text-sm text-slate-600 leading-relaxed" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                Pre-configured rules for SSC CGL, NTA NEET, UPSC, IBPS, and Railway RRB portals ensure 0 rejection rates.
              </p>
            </div>
          </div>
        </div>

        {/* Frequently Asked Questions (FAQ) for Organic SEO */}
        <div className="space-y-5">
          <div className="flex items-center space-x-2.5">
            <HelpCircle className="w-5 h-5 text-blue-600 flex-shrink-0" aria-hidden="true" />
            <h2 className="text-xl font-bold text-slate-900" style={{ fontFamily: "'Lexend', sans-serif", letterSpacing: '-0.02em' }}>
              Frequently Asked Questions (Govt Exam Rules 2026)
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <article className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 className="font-bold text-sm text-slate-900" style={{ fontFamily: "'Lexend', sans-serif" }}>
                How to resize photo to 20 KB – 50 KB for SSC CGL &amp; CHSL?
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                Select the <strong>SSC Photo</strong> preset on SarkariDoc Studio, upload your passport photograph, enter your Candidate Name and Date of Photograph (D.O.P). Our smart binary compressor automatically outputs a JPEG file between 20 KB and 50 KB.
              </p>
            </article>

            <article className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 className="font-bold text-sm text-slate-900" style={{ fontFamily: "'Lexend', sans-serif" }}>
                Is Candidate Name and Date mandatory on SSC &amp; UPSC Photos?
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                Yes! Staff Selection Commission (SSC) and Union Public Service Commission (UPSC) strictly reject photos without the candidate's name and photo capture date stamped at the bottom. SarkariDoc Studio auto-renders this overlay cleanly.
              </p>
            </article>

            <article className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 className="font-bold text-sm text-slate-900" style={{ fontFamily: "'Lexend', sans-serif" }}>
                How to remove dark background from signature photos?
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                When taking a signature photo on a phone, shadows often turn white paper gray. Enable our <strong>Pure White Paper Cleanup</strong> toggle when using any Signature preset to sharpen ink lines and convert backgrounds to 100% pure white.
              </p>
            </article>

            <article className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
              <h3 className="font-bold text-sm text-slate-900" style={{ fontFamily: "'Lexend', sans-serif" }}>
                What are NTA NEET 2026 Postcard photo dimensions?
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed" style={{ fontFamily: "'Source Sans 3', sans-serif" }}>
                NTA requires Postcard photographs to be exactly 4 inches by 6 inches (10.16 cm × 15.24 cm) in size, between 10 KB and 200 KB. Select the <strong>NTA Postcard Photo</strong> preset for automatic formatting.
              </p>
            </article>

          </div>
        </div>

      </div>
    </section>
  );
};
