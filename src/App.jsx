import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Navbar } from './components/Navbar';
import { PresetSelector } from './components/PresetSelector';
import { SeoContentSection } from './components/SeoContentSection';
import { Footer } from './components/Footer';
import { EXAM_PRESETS } from './data/presets';
import { InstallPwaBanner } from './components/InstallPwaBanner';
import { RefreshCw } from 'lucide-react';

// Code-split heavy tool workspaces into isolated lazy chunks
const EditorModal = lazy(() => import('./components/EditorModal').then(m => ({ default: m.EditorModal })));
const PassportPhotoModal = lazy(() => import('./components/PassportPhotoModal').then(m => ({ default: m.PassportPhotoModal })));
const PdfStudioModal = lazy(() => import('./components/PdfStudioModal').then(m => ({ default: m.PdfStudioModal })));
const BgRemoverModal = lazy(() => import('./components/BgRemoverModal').then(m => ({ default: m.BgRemoverModal })));
const ImageResizerModal = lazy(() => import('./components/ImageResizerModal').then(m => ({ default: m.ImageResizerModal })));
const AboutWorkspace = lazy(() => import('./components/AboutWorkspace').then(m => ({ default: m.AboutWorkspace })));

export function App() {
  const [selectedPreset, setSelectedPreset] = useState(null);
  const [isPdfStudioOpen, setIsPdfStudioOpen] = useState(false);
  const [isBgRemoverOpen, setIsBgRemoverOpen] = useState(false);
  const [isImageResizerOpen, setIsImageResizerOpen] = useState(false);
  const [isPassportPhotoOpen, setIsPassportPhotoOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const activeTool = selectedPreset 
    ? `preset:${selectedPreset.id}` 
    : isPassportPhotoOpen 
    ? 'passport-photo' 
    : isPdfStudioOpen 
    ? 'pdf-studio' 
    : isBgRemoverOpen 
    ? 'bg-remover' 
    : isImageResizerOpen 
    ? 'image-resizer' 
    : isAboutOpen 
    ? 'about'
    : null;

  // Open tool helper with history pushState for mobile back button navigation
  const openTool = (type, preset = null) => {
    closeAllTools(false);

    let search = '';
    if (preset) {
      setSelectedPreset(preset);
      search = `?preset=${preset.id}`;
    } else if (type === 'passport-photo') {
      setIsPassportPhotoOpen(true);
      search = '?tool=passport-photo';
    } else if (type === 'pdf-studio') {
      setIsPdfStudioOpen(true);
      search = '?tool=pdf-studio';
    } else if (type === 'bg-remover') {
      setIsBgRemoverOpen(true);
      search = '?tool=bg-remover';
    } else if (type === 'image-resizer') {
      setIsImageResizerOpen(true);
      search = '?tool=image-resizer';
    } else if (type === 'about') {
      setIsAboutOpen(true);
      search = '?tool=about';
    }

    if (search && window.location.search !== search) {
      window.history.pushState({ toolType: type, presetId: preset?.id }, '', search);
    }
  };

  const closeAllTools = (updateHistory = true) => {
    setSelectedPreset(null);
    setIsPassportPhotoOpen(false);
    setIsPdfStudioOpen(false);
    setIsBgRemoverOpen(false);
    setIsImageResizerOpen(false);
    setIsAboutOpen(false);

    if (updateHistory && window.location.search) {
      window.history.pushState({}, '', window.location.pathname);
    }
  };

  // Handle URL Deep-linking and Mobile Browser Back Button (popstate)
  useEffect(() => {
    const parseUrlRoute = () => {
      const params = new URLSearchParams(window.location.search);
      const presetParam = params.get('preset');
      const toolParam = params.get('tool');

      if (presetParam) {
        const found = EXAM_PRESETS.find(p => p.id === presetParam);
        if (found) {
          setSelectedPreset(found);
          setIsPassportPhotoOpen(false);
          setIsPdfStudioOpen(false);
          setIsBgRemoverOpen(false);
          setIsImageResizerOpen(false);
          setIsAboutOpen(false);
        }
      } else if (toolParam === 'passport-photo') {
        setIsPassportPhotoOpen(true);
        setSelectedPreset(null);
        setIsPdfStudioOpen(false);
        setIsBgRemoverOpen(false);
        setIsImageResizerOpen(false);
        setIsAboutOpen(false);
      } else if (toolParam === 'pdf-studio') {
        setIsPdfStudioOpen(true);
        setSelectedPreset(null);
        setIsPassportPhotoOpen(false);
        setIsBgRemoverOpen(false);
        setIsImageResizerOpen(false);
        setIsAboutOpen(false);
      } else if (toolParam === 'bg-remover') {
        setIsBgRemoverOpen(true);
        setSelectedPreset(null);
        setIsPassportPhotoOpen(false);
        setIsPdfStudioOpen(false);
        setIsImageResizerOpen(false);
        setIsAboutOpen(false);
      } else if (toolParam === 'image-resizer') {
        setIsImageResizerOpen(true);
        setSelectedPreset(null);
        setIsPassportPhotoOpen(false);
        setIsPdfStudioOpen(false);
        setIsBgRemoverOpen(false);
        setIsAboutOpen(false);
      } else if (toolParam === 'about') {
        setIsAboutOpen(true);
        setSelectedPreset(null);
        setIsPassportPhotoOpen(false);
        setIsPdfStudioOpen(false);
        setIsBgRemoverOpen(false);
        setIsImageResizerOpen(false);
      } else {
        closeAllTools(false);
      }
    };

    parseUrlRoute();

    window.addEventListener('popstate', parseUrlRoute);
    return () => window.removeEventListener('popstate', parseUrlRoute);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-['Outfit'] antialiased">
      {!activeTool ? (
        // 1. Home Page View (Rendered ONLY when no tool is active)
        <>
          <Navbar
            onOpenPassportPhoto={() => openTool('passport-photo')}
            onOpenPdfStudio={() => openTool('pdf-studio')}
            onOpenBgRemover={() => openTool('bg-remover')}
            onOpenImageResizer={() => openTool('image-resizer')}
            onOpenAbout={() => openTool('about')}
          />

          <main className="flex-1 bg-white">
            <PresetSelector
              selectedPresetId={selectedPreset?.id}
              onSelectPreset={(preset) => openTool('preset', preset)}
              onOpenPassportPhoto={() => openTool('passport-photo')}
              onOpenPdfStudio={() => openTool('pdf-studio')}
              onOpenBgRemover={() => openTool('bg-remover')}
              onOpenImageResizer={() => openTool('image-resizer')}
            />
            
            <SeoContentSection />
          </main>

          <InstallPwaBanner />
          <Footer onOpenAbout={() => openTool('about')} />
        </>
      ) : (
        // 2. Isolated Full-Page Tool Workspace (Home Page is 100% UNMOUNTED for ultra mobile speed)
        <Suspense fallback={
          <div className="min-h-screen flex items-center justify-center bg-slate-50">
            <div className="bg-white p-6 rounded-2xl shadow-xl border border-slate-200 flex items-center space-x-3 text-blue-600 font-semibold text-sm">
              <RefreshCw className="w-5 h-5 animate-gpu-spin" />
              <span>Loading Dedicated Workspace...</span>
            </div>
          </div>
        }>
          {selectedPreset && (
            <EditorModal
              preset={selectedPreset}
              onClose={() => closeAllTools(true)}
            />
          )}

          {isPassportPhotoOpen && (
            <PassportPhotoModal
              onClose={() => closeAllTools(true)}
            />
          )}

          {isPdfStudioOpen && (
            <PdfStudioModal
              onClose={() => closeAllTools(true)}
            />
          )}

          {isBgRemoverOpen && (
            <BgRemoverModal
              onClose={() => closeAllTools(true)}
            />
          )}

          {isImageResizerOpen && (
            <ImageResizerModal
              onClose={() => closeAllTools(true)}
            />
          )}

          {isAboutOpen && (
            <AboutWorkspace
              onClose={() => closeAllTools(true)}
            />
          )}
        </Suspense>
      )}
    </div>
  );
}

export default App;



