import React from 'react';
import { ArrowLeft, ShieldCheck, Sparkles, Zap, Smartphone, CheckCircle, FileText, Camera, Users, Lock, Heart } from 'lucide-react';

export const AboutWorkspace = ({ onClose }) => {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-['Outfit'] text-slate-900 antialiased">
      {/* Sticky Workspace Top Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30 px-4 sm:px-8 py-3.5 flex items-center justify-between shadow-xs">
        <div className="flex items-center space-x-3">
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 flex items-center space-x-1.5 font-bold text-xs transition-all border border-slate-200"
          >
            <ArrowLeft className="w-4 h-4 text-blue-600" />
            <span className="hidden sm:inline">Back to All Tools</span>
            <span className="sm:hidden">Back</span>
          </button>
          <div className="h-4 w-px bg-slate-200" />
          <div className="flex items-center space-x-2">
            <div className="p-1.5 rounded-lg bg-blue-50 text-blue-600 border border-blue-200">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <h1 className="font-bold text-slate-900 text-sm sm:text-lg">About SarkariDoc Studio</h1>
              <p className="text-[11px] text-slate-500 font-medium hidden sm:block">100% Free & Secure Document Formatting Suite for Indian Aspirants</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-4xl mx-auto w-full p-4 sm:p-8 space-y-8">
        
        {/* Hero Section */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-slate-900 text-white shadow-xl relative overflow-hidden">
          <div className="relative z-10 space-y-3">
            <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/20 backdrop-blur-md border border-white/20 text-white inline-flex items-center space-x-1.5">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Free & Private Document Converter</span>
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight">
              Built for Every Indian Student & Exam Aspirant
            </h2>
            <p className="text-sm sm:text-base text-blue-100 max-w-2xl leading-relaxed font-medium">
              SarkariDoc Studio was created to solve the biggest headache faced by millions of candidates applying for government exams: strict photo, signature, and PDF file size limits.
            </p>
          </div>
        </div>

        {/* 3 Key Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center">
              <Lock className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">100% Client-Side Privacy</h3>
            <p className="text-xs text-slate-500 leading-relaxed font-medium">
              Your sensitive photos and signature documents never get uploaded or stored on any server. Everything is processed 100% locally inside your browser memory.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 border border-blue-200 flex items-center justify-center">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">Exact KB Precision</h3>
            <p className="text-xs text-slate-500 leading-relaxed font-medium">
              Our binary compression engine calculates quality levels automatically to keep output files strictly below exam limits (e.g. 20KB, 50KB, 200KB) without blurring document text.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 border border-amber-200 flex items-center justify-center">
              <Smartphone className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">Mobile-First PWA App</h3>
            <p className="text-xs text-slate-500 leading-relaxed font-medium">
              Works seamlessly on Android Chrome, iPhone Safari, and desktop. You can install SarkariDoc as a Progressive Web App directly to your home screen.
            </p>
          </div>
        </div>

        {/* Supported Exam Portals */}
        <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
          <h3 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
            <CheckCircle className="w-5 h-5 text-blue-600" />
            <span>Supported Exam Portals & Standards</span>
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-semibold text-slate-700">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">SSC (CGL, CHSL, MTS)</div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">NTA NEET & JEE</div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">UPSC IAS & NDA</div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">IBPS Banking Exams</div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">RRB Indian Railways</div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">State PSCs & Vyapam</div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">Passport & Visa Photos</div>
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">Custom KB & Pixel Suite</div>
          </div>
        </div>

        {/* Mission Footer */}
        <div className="p-6 rounded-2xl bg-blue-50 border border-blue-200 flex items-center justify-between text-xs text-blue-900 font-medium">
          <div className="flex items-center space-x-2">
            <Heart className="w-4 h-4 text-red-500 fill-red-500" />
            <span>Crafted with care for Indian students & exam candidates nationwide.</span>
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition-all shadow-sm"
          >
            Back to Tools
          </button>
        </div>


      </main>
    </div>
  );
};
