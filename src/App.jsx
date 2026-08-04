import React, { useState, useEffect, Suspense, lazy } from 'react';
import { Navbar } from './components/Navbar';
import { PresetSelector } from './components/PresetSelector';
import { SeoContentSection } from './components/SeoContentSection';
import { Footer } from './components/Footer';
import { EXAM_PRESETS } from './data/presets';
import { InstallPwaBanner } from './components/InstallPwaBanner';
import { RefreshCw } from 'lucide-react';

// Code-split heavy tool modules into isolated lazy chunks
const EditorModal = lazy(() => import('./components/EditorModal').then(m => ({ default: m.EditorModal })));
const PassportPhotoModal = lazy(() => import('./components/PassportPhotoModal').then(m => ({ default: m.PassportPhotoModal })));
const PdfStudioModal = lazy(() => import('./components/PdfStudioModal').then(m => ({ default: m.PdfStudioModal })));
const BgRemoverModal = lazy(() => import('./components/BgRemoverModal').then(m => ({ default: m.BgRemoverModal })));
const ImageResizerModal = lazy(() => import('./components/ImageResizerModal').then(m => ({ default: m.ImageResizerModal })));

export function App() {
  const [selectedPreset, setSelectedPreset] = useState(null);
  const [isPdfStudioOpen, setIsPdfStudioOpen] = useState(false);
  const [isBgRemoverOpen, setIsBgRemoverOpen] = useState(false);
  const [isImageResizerOpen, setIsImageResizerOpen] = useState(false);
  const [isPassportPhotoOpen, setIsPassportPhotoOpen] = useState(false);

  const isAnyModalOpen = Boolean(
    selectedPreset || isPdfStudioOpen || isBgRemoverOpen || isImageResizerOpen || isPassportPhotoOpen
  );

  // Handle Direct URL Deep-linking for Google Sitelinks & Direct Search Results
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const presetParam = params.get('preset');
    const toolParam = params.get('tool');

    if (presetParam) {
      const found = EXAM_PRESETS.find(p => p.id === presetParam);
      if (found) setSelectedPreset(found);
    } else if (toolParam === 'passport-photo') {
      setIsPassportPhotoOpen(true);
    } else if (toolParam === 'pdf-studio') {
      setIsPdfStudioOpen(true);
    } else if (toolParam === 'bg-remover') {
      setIsBgRemoverOpen(true);
    } else if (toolParam === 'image-resizer') {
      setIsImageResizerOpen(true);
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 font-['Outfit'] antialiased">
      {/* Top Navbar */}
      <Navbar
        onOpenPassportPhoto={() => setIsPassportPhotoOpen(true)}
        onOpenPdfStudio={() => setIsPdfStudioOpen(true)}
        onOpenBgRemover={() => setIsBgRemoverOpen(true)}
        onOpenImageResizer={() => setIsImageResizerOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 bg-white">
        <PresetSelector
          selectedPresetId={selectedPreset?.id}
          onSelectPreset={(preset) => setSelectedPreset(preset)}
          onOpenPassportPhoto={() => setIsPassportPhotoOpen(true)}
          onOpenPdfStudio={() => setIsPdfStudioOpen(true)}
          onOpenBgRemover={() => setIsBgRemoverOpen(true)}
          onOpenImageResizer={() => setIsImageResizerOpen(true)}
        />
        
        {/* Unmount/hide heavy SEO DOM when tool environment is active to preserve mobile RAM & GPU */}
        {!isAnyModalOpen && <SeoContentSection />}
      </main>

      {/* Code-Split Isolated Tool Environments */}
      <Suspense fallback={
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/30 backdrop-blur-sm">
          <div className="bg-white p-6 rounded-2xl shadow-xl flex items-center space-x-3 text-blue-600 font-semibold text-sm">
            <RefreshCw className="w-5 h-5 animate-gpu-spin" />
            <span>Loading Tool Workspace...</span>
          </div>
        </div>
      }>
        {selectedPreset && (
          <EditorModal
            preset={selectedPreset}
            onClose={() => setSelectedPreset(null)}
          />
        )}

        {isPassportPhotoOpen && (
          <PassportPhotoModal
            onClose={() => setIsPassportPhotoOpen(false)}
          />
        )}

        {isPdfStudioOpen && (
          <PdfStudioModal
            onClose={() => setIsPdfStudioOpen(false)}
          />
        )}

        {isBgRemoverOpen && (
          <BgRemoverModal
            onClose={() => setIsBgRemoverOpen(false)}
          />
        )}

        {isImageResizerOpen && (
          <ImageResizerModal
            onClose={() => setIsImageResizerOpen(false)}
          />
        )}
      </Suspense>

      {/* PWA Floating Install Banner */}
      {!isAnyModalOpen && <InstallPwaBanner />}

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;

