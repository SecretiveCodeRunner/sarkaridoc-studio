import React, { useState } from 'react';
import { Search, SlidersHorizontal, ArrowRight, X } from 'lucide-react';
import { EXAM_PRESETS } from '../../data/presets';

export const AndroidPresetsScreen = ({ onSelectPreset }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'GATE / IIT', 'SSC', 'NTA (NEET/JEE)', 'UPSC', 'Banking (IBPS/SBI)', 'Railways (RRB)', 'Custom Utility'];

  const filteredPresets = EXAM_PRESETS.filter((preset) => {
    const matchesSearch = 
      preset.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      preset.exam.toLowerCase().includes(searchQuery.toLowerCase()) ||
      preset.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (activeCategory === 'All') return matchesSearch;
    return matchesSearch && preset.category.toLowerCase().includes(activeCategory.toLowerCase().split(' ')[0]);
  });

  return (
    <div className="space-y-3 px-4 py-3 pb-24 max-w-lg mx-auto select-none">
      
      {/* 1. Android Search Bar (Material 3 Style) */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
          <Search className="w-4 h-4" />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search exams (e.g. UPSC, SSC, NEET, GATE)..."
          className="w-full pl-10 pr-9 py-3 rounded-2xl bg-slate-100/90 hover:bg-slate-100 focus:bg-white text-slate-900 placeholder-slate-400 text-xs font-medium border border-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all outline-none"
        />
        {searchQuery && (
          <button
            type="button"
            onClick={() => setSearchQuery('')}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* 2. Filter Chips Horizontal Rail */}
      <div className="flex items-center space-x-1.5 overflow-x-auto scrollbar-none py-1 -mx-4 px-4">
        {categories.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all active:scale-95 ${
                isActive
                  ? 'bg-blue-600 text-white shadow-xs'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-800'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* 3. Preset Count & Results Header */}
      <div className="flex items-center justify-between px-1 pt-1">
        <span className="text-[11px] font-bold tracking-wider text-slate-500 uppercase">
          {filteredPresets.length} Preset{filteredPresets.length !== 1 ? 's' : ''} Available
        </span>
        <span className="text-[10px] text-slate-400">Strict Official Dimensions</span>
      </div>

      {/* 4. Presets Cards List */}
      <div className="space-y-2">
        {filteredPresets.map((preset) => (
          <button
            key={preset.id}
            type="button"
            onClick={() => onSelectPreset(preset)}
            className="w-full text-left p-3.5 rounded-2xl bg-white border border-slate-200/90 hover:border-blue-500 active:scale-[0.98] transition-all shadow-xs flex items-center justify-between group"
          >
            <div className="flex items-center space-x-3 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 font-bold text-xs flex items-center justify-center flex-shrink-0">
                {preset.exam.slice(0, 3).toUpperCase()}
              </div>
              <div className="min-w-0">
                <div className="flex items-center space-x-1.5">
                  <h4 className="font-bold text-slate-900 text-xs truncate group-hover:text-blue-600 transition-colors">
                    {preset.name}
                  </h4>
                </div>
                <div className="flex items-center space-x-2 text-[11px] text-slate-500 mt-0.5">
                  <span>
                    {preset.widthMm && preset.heightMm 
                      ? `${preset.widthMm}×${preset.heightMm} mm` 
                      : `${preset.widthPx}×${preset.heightPx} px`}
                  </span>
                  <span>&middot;</span>
                  <span className="font-semibold text-slate-700">Max {preset.maxKb} KB</span>
                  <span>&middot;</span>
                  <span className="text-blue-600 font-medium">{preset.exam}</span>
                </div>
              </div>
            </div>

            <div className="px-2.5 py-1 rounded-lg bg-slate-50 group-hover:bg-blue-50 text-[11px] font-bold text-slate-600 group-hover:text-blue-700 transition-colors flex items-center gap-1 flex-shrink-0">
              <span>Use</span>
              <ArrowRight className="w-3 h-3 text-slate-400 group-hover:text-blue-600" />
            </div>
          </button>
        ))}

        {filteredPresets.length === 0 && (
          <div className="text-center py-12 bg-slate-50 rounded-3xl border border-slate-200 p-6 space-y-2">
            <SlidersHorizontal className="w-8 h-8 text-slate-400 mx-auto" />
            <h3 className="font-bold text-slate-800 text-sm">No Presets Found</h3>
            <p className="text-xs text-slate-500">Try searching for another exam name or keyword.</p>
            <button
              type="button"
              onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
              className="mt-2 text-xs font-bold text-blue-600 hover:underline"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

    </div>
  );
};
