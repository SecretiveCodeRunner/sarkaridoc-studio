import React, { useState } from 'react';
import { EXAM_PRESETS } from '../data/presets';
import { Search, Sparkles, FileText, Image as ImageIcon, SlidersHorizontal, Wand2, Check, ArrowRight } from 'lucide-react';

export const PresetSelector = ({ 
  onSelectPreset, 
  selectedPresetId,
  onOpenPdfStudio,
  onOpenBgRemover,
  onOpenImageResizer
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'SSC', 'NTA (NEET/JEE)', 'UPSC', 'Banking (IBPS/SBI)', 'Railways (RRB)', 'Custom Utility'];

  const filteredPresets = EXAM_PRESETS.filter((preset) => {
    const matchesSearch = 
      preset.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      preset.exam.toLowerCase().includes(searchQuery.toLowerCase()) ||
      preset.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (activeCategory === 'All') return matchesSearch;
    return matchesSearch && preset.category.toLowerCase().includes(activeCategory.toLowerCase().split(' ')[0]);
  });

  return (
    <section className="w-full py-6">
      {/* Hero Section Banner */}
      <div className="text-center max-w-4xl mx-auto mb-6 px-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Updated for 2026 Exam Rules (SSC, NEET, UPSC, IBPS)</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight font-['Outfit']">
          Convert Govt Exam Photos to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">20KB – 50KB Instantly</span>
        </h1>
        <p className="mt-3 text-slate-400 text-xs sm:text-sm max-w-2xl mx-auto leading-relaxed">
          Pixel-exact KB compressor, AI background remover, and PDF resizer. 100% Client-side — fast, free, and zero server upload.
        </p>

        {/* 3 Main Studio Tools Cards (Mobile & Desktop Prominent Placement) */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 max-w-3xl mx-auto mt-6">
          
          <button
            onClick={onOpenPdfStudio}
            className="p-3 sm:p-4 rounded-2xl bg-gradient-to-b from-emerald-950/40 to-slate-900/80 border border-emerald-500/30 hover:border-emerald-500/60 transition-all text-left flex flex-col justify-between group shadow-lg"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <h3 className="font-bold text-white text-xs sm:text-sm leading-tight">PDF Resizer</h3>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 line-clamp-1">Compress under 300KB</p>
            </div>
          </button>

          <button
            onClick={onOpenBgRemover}
            className="p-3 sm:p-4 rounded-2xl bg-gradient-to-b from-purple-950/40 to-slate-900/80 border border-purple-500/30 hover:border-purple-500/60 transition-all text-left flex flex-col justify-between group shadow-lg"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <Wand2 className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <h3 className="font-bold text-white text-xs sm:text-sm leading-tight">AI BG Remover</h3>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 line-clamp-1">1-Click Transparent/White</p>
            </div>
          </button>

          <button
            onClick={onOpenImageResizer}
            className="p-3 sm:p-4 rounded-2xl bg-gradient-to-b from-blue-950/40 to-slate-900/80 border border-blue-500/30 hover:border-blue-500/60 transition-all text-left flex flex-col justify-between group shadow-lg"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
              <SlidersHorizontal className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div>
              <h3 className="font-bold text-white text-xs sm:text-sm leading-tight">Image Resizer</h3>
              <p className="text-[10px] sm:text-xs text-slate-400 mt-0.5 line-clamp-1">Any KB / Pixels / JPG</p>
            </div>
          </button>

        </div>
      </div>

      {/* Search & Category Filter Controls */}
      <div className="max-w-5xl mx-auto px-4 mb-6 space-y-4">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search exam (e.g., SSC CGL, NEET Postcard, UPSC, IBPS Signature)..."
            className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-white placeholder-slate-500 text-sm shadow-inner outline-none transition-all"
          />
        </div>

        {/* Category Pills */}
        <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20'
                  : 'bg-slate-900 text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Preset Cards Grid */}
      <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPresets.map((preset) => {
          const isSelected = selectedPresetId === preset.id;
          return (
            <div
              key={preset.id}
              onClick={() => onSelectPreset(preset)}
              className={`group cursor-pointer rounded-2xl p-5 transition-all duration-200 glass-card relative overflow-hidden flex flex-col justify-between ${
                isSelected
                  ? 'border-blue-500 bg-blue-950/30 ring-2 ring-blue-500/50 shadow-xl shadow-blue-500/10'
                  : 'hover:border-slate-700'
              }`}
            >
              {preset.badge && (
                <div className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[10px] font-bold tracking-wider uppercase shadow-sm">
                  {preset.badge}
                </div>
              )}

              <div>
                <div className="flex items-start space-x-3 mb-3">
                  <div className={`p-2.5 rounded-xl flex-shrink-0 ${
                    preset.type === 'photo'
                      ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                      : preset.type === 'signature'
                      ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20'
                      : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                  }`}>
                    {preset.type === 'photo' ? (
                      <ImageIcon className="w-5 h-5" />
                    ) : preset.type === 'signature' ? (
                      <FileText className="w-5 h-5" />
                    ) : (
                      <SlidersHorizontal className="w-5 h-5" />
                    )}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-100 text-sm group-hover:text-blue-400 transition-colors">
                      {preset.name}
                    </h3>
                    <p className="text-xs text-slate-400 line-clamp-1">{preset.exam}</p>
                  </div>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-2">
                  {preset.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <div className="flex items-center space-x-2 text-slate-300 font-medium">
                  <span className="bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                    {preset.minKb}–{preset.maxKb} KB
                  </span>
                  <span className="text-slate-500">•</span>
                  <span className="text-slate-400">
                    {preset.widthPx} × {preset.heightPx} px
                  </span>
                </div>

                {isSelected ? (
                  <span className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center">
                    <Check className="w-3.5 h-3.5" />
                  </span>
                ) : (
                  <span className="text-blue-400 font-semibold group-hover:translate-x-0.5 transition-transform">
                    Select →
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
