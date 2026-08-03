import React from 'react';
import { Shield } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="w-full py-8 border-t border-slate-200 dark:border-slate-900 bg-white dark:bg-slate-950 text-slate-500 dark:text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center space-x-2">
          <span className="font-bold text-slate-900 dark:text-white">SarkariDoc Studio</span>
          <span>© {new Date().getFullYear()}</span>
          <span>•</span>
          <span>Designed for Indian Government Exam Aspirants</span>
        </div>

        <div className="flex items-center space-x-4 text-slate-500">
          <span className="flex items-center space-x-1">
            <Shield className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Client-side PWA Architecture</span>
          </span>
          <span>•</span>
          <span>Zero Server Uploads</span>
        </div>

      </div>
    </footer>
  );
};
