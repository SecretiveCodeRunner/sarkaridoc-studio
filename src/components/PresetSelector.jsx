import React, { useState } from 'react';
import { EXAM_PRESETS } from '../data/presets';
import { Search, Sparkles, Filter, FileText, Image as ImageIcon, SlidersHorizontal, Check } from 'lucide-react';

export const PresetSelector = ({ onSelectPreset, selectedPresetId }) => {
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
      <div className="text-center max-w-3xl mx-auto mb-8 px-4">
        <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-4">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Updated for 2026 Exam Rules (SSC, NEET, UPSC, IBPS)</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight font-['Outfit']">
          Convert Govt Exam Photos to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">20KB – 50KB Instantly</span>
        </h1>
        <p className="mt-3 text-slate-400 text-sm sm:text-base leading-relaxed">
          Pixel-exact, guaranteed KB compressor and signature converter. Operating 100% inside your browser — fast, free, and zero server upload.
        </p>
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
              {/* Badge */}
              {preset.badge && (
                <div className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[10px] font-bold tracking-wider uppercase shadow-sm">
                  {preset.badge}
                </div>
              )}

              <div>
                {/* Header Icon & Title */}
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

              {/* Specifications Footer */}
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
