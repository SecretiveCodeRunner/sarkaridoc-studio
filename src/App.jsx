import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { PresetSelector } from './components/PresetSelector';
import { EditorModal } from './components/EditorModal';
import { PdfStudioModal } from './components/PdfStudioModal';
import { BgRemoverModal } from './components/BgRemoverModal';
import { ImageResizerModal } from './components/ImageResizerModal';
import { SeoContentSection } from './components/SeoContentSection';
import { Footer } from './components/Footer';
import { EXAM_PRESETS } from './data/presets';

import { InstallPwaBanner } from './components/InstallPwaBanner';

export function App() {
  const [selectedPreset, setSelectedPreset] = useState(null);
  const [isPdfStudioOpen, setIsPdfStudioOpen] = useState(false);
  const [isBgRemoverOpen, setIsBgRemoverOpen] = useState(false);
  const [isImageResizerOpen, setIsImageResizerOpen] = useState(false);

  // Handle Direct URL Deep-linking for Google Sitelinks & Direct Search Results
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const presetParam = params.get('preset');
    const toolParam = params.get('tool');

    if (presetParam) {
      const found = EXAM_PRESETS.find(p => p.id === presetParam);
      if (found) setSelectedPreset(found);
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
        onOpenPdfStudio={() => setIsPdfStudioOpen(true)}
        onOpenBgRemover={() => setIsBgRemoverOpen(true)}
        onOpenImageResizer={() => setIsImageResizerOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1 bg-white">
        <PresetSelector
          selectedPresetId={selectedPreset?.id}
          onSelectPreset={(preset) => setSelectedPreset(preset)}
          onOpenPdfStudio={() => setIsPdfStudioOpen(true)}
          onOpenBgRemover={() => setIsBgRemoverOpen(true)}
          onOpenImageResizer={() => setIsImageResizerOpen(true)}
        />
        
        <SeoContentSection />
      </main>

      {/* Modals */}
      {selectedPreset && (
        <EditorModal
          preset={selectedPreset}
          onClose={() => setSelectedPreset(null)}
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

      {/* PWA Floating Install Banner */}
      <InstallPwaBanner />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
