import React from 'react';
import { Upload, Crop, Wand2, Download, ShieldCheck, CheckCircle2, Sparkles } from 'lucide-react';

export const ProcessingStepsGuide = ({
  mode = 'photo', // 'photo' | 'signature' | 'passport' | 'bg-remover'
  presetName = '',
  targetRatio = '',
  targetKb = ''
}) => {
  const isSignature = mode === 'signature';
  const isPassport = mode === 'passport';

  const steps = [
    {
      num: '1',
      icon: Upload,
      color: 'bg-blue-50 text-blue-600 border-blue-200',
      badge: 'Step 1',
      title: 'Upload Original Image',
      desc: isSignature
        ? 'Select clear photo or scan of your signature signed on plain paper.'
        : isPassport
        ? 'Upload a front-facing portrait photo or capture directly with phone camera.'
        : 'Choose candidate photo or document from your phone or PC.'
    },
    {
      num: '2',
      icon: Crop,
      color: 'bg-indigo-50 text-indigo-600 border-indigo-200',
      badge: 'Step 2',
      title: 'Interactive Crop & Frame',
      desc: targetRatio
        ? `Drag & zoom inside the viewfinder locked to official ${targetRatio} aspect ratio.`
        : 'Frame face or signature inside the box with intuitive pinch-to-zoom & 90° rotation.'
    },
    {
      num: '3',
      icon: Wand2,
      color: 'bg-purple-50 text-purple-600 border-purple-200',
      badge: 'Step 3',
      title: isSignature ? 'Neural Ink Isolation & Pure White BG' : 'Studio Background Setup',
      desc: isSignature
        ? 'Deep neural AI isolates crisp ink strokes, eliminating paper shadows and dark markings with 100% pure white paper.'
        : isPassport
        ? 'Click any official studio color (Light Blue, White, Navy) for instant sub-second neural cutout.'
        : 'Apply official studio background or SSC/UPSC Name & Date stamp if required.'
    },
    {
      num: '4',
      icon: Download,
      color: 'bg-emerald-50 text-emerald-600 border-emerald-200',
      badge: 'Step 4',
      title: 'Exact KB Download',
      desc: targetKb
        ? `Binary compression ensures output file is strictly within ${targetKb} limits.`
        : 'Instant download guaranteed to pass government recruitment portal upload validations.'
    }
  ];

  return (
    <div className="w-full space-y-4 pt-2">
      <div className="flex items-center justify-between px-1">
        <div className="flex items-center space-x-2">
          <Sparkles className="w-4 h-4 text-blue-600" />
          <h4 className="text-xs font-bold text-slate-800 uppercase tracking-wider" style={{ fontFamily: "'Lexend', sans-serif" }}>
            {presetName ? `${presetName} Workflow` : 'Easy 4-Step Processing Workflow'}
          </h4>
        </div>
        <span className="text-[11px] font-semibold text-slate-500 hidden sm:inline-flex items-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>100% Client-Side Private</span>
        </span>
      </div>

      {/* 4 Steps Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {steps.map((step) => {
          const Icon = step.icon;
          return (
            <div
              key={step.num}
              className="p-4 rounded-2xl bg-white border border-slate-200/80 shadow-xs flex flex-col justify-between space-y-3 hover:border-blue-300 hover:shadow-sm transition-all"
            >
              <div className="flex items-center justify-between">
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center border ${step.color} shadow-xs`}>
                  <Icon className="w-4 h-4" />
                </div>
                <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-slate-100 text-slate-600 border border-slate-200">
                  {step.badge}
                </span>
              </div>

              <div className="space-y-1">
                <h5 className="font-bold text-xs text-slate-900" style={{ fontFamily: "'Lexend', sans-serif" }}>
                  {step.title}
                </h5>
                <p className="text-[11px] text-slate-500 leading-relaxed font-medium">
                  {step.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Official Guidelines Tip Bar */}
      <div className="p-3.5 rounded-2xl bg-blue-50/70 border border-blue-200/70 flex items-start sm:items-center justify-between gap-3 text-xs text-blue-900">
        <div className="flex items-start sm:items-center space-x-2.5">
          <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5 sm:mt-0" />
          <p className="text-[11px] leading-relaxed font-medium">
            {isSignature ? (
              <span>
                <strong>Official Signature Rule:</strong> Sign in blue or black ballpoint/gel pen on clean, unruled white paper. Avoid blurry or shadow-covered shots.
              </span>
            ) : isPassport ? (
              <span>
                <strong>Passport Photo Standard:</strong> Both ears must be clearly visible with neutral expression and straight head posture.
              </span>
            ) : (
              <span>
                <strong>Govt Exam Portal Compliance:</strong> Files are calibrated to exact portal dimensions and KB constraints to avoid application rejection.
              </span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};
