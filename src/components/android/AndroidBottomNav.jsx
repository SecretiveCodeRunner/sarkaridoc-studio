import React from 'react';
import { LayoutGrid, Camera, FileText, SlidersHorizontal, ShieldCheck } from 'lucide-react';

export const AndroidBottomNav = ({ activeTab, onSelectTab }) => {
  const navItems = [
    { id: 'studio', label: 'Studio', icon: LayoutGrid },
    { id: 'passport', label: 'Passport', icon: Camera },
    { id: 'pdf', label: 'PDF Suite', icon: FileText },
    { id: 'presets', label: 'Presets', icon: SlidersHorizontal },
    { id: 'info', label: 'Security', icon: ShieldCheck },
  ];

  return (
    <nav
      aria-label="Android Bottom Navigation"
      className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 shadow-[0_-4px_20px_rgba(0,0,0,0.06)] safe-area-bottom select-none"
    >
      <div className="max-w-md mx-auto grid grid-cols-5 py-1.5 px-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => onSelectTab(item.id)}
              className="flex flex-col items-center justify-center py-1 group active:scale-90 transition-transform"
            >
              {/* Material 3 Active Pill Indicator */}
              <div
                className={`w-13 h-7 rounded-full flex items-center justify-center transition-all duration-200 ${
                  isActive
                    ? 'bg-blue-100 text-blue-700 shadow-xs ring-1 ring-blue-400/30'
                    : 'text-slate-500 group-hover:text-slate-800 group-hover:bg-slate-100/60'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'stroke-[2.5]' : 'stroke-[1.8]'}`} />
              </div>

              {/* Label */}
              <span
                className={`text-[10px] mt-0.5 tracking-tight transition-colors duration-150 ${
                  isActive
                    ? 'font-extrabold text-blue-700'
                    : 'font-medium text-slate-500 group-hover:text-slate-800'
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
