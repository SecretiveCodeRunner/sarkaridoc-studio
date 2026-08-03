import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { PresetSelector } from './components/PresetSelector';
import { EditorModal } from './components/EditorModal';
import { PdfStudioModal } from './components/PdfStudioModal';
import { BgRemoverModal } from './components/BgRemoverModal';
import { ImageResizerModal } from './components/ImageResizerModal';
import { SeoContentSection } from './components/SeoContentSection';
import { Footer } from './components/Footer';

export function App() {
  const [selectedPreset, setSelectedPreset] = useState(null);
  const [isPdfStudioOpen, setIsPdfStudioOpen] = useState(false);
  const [isBgRemoverOpen, setIsBgRemoverOpen] = useState(false);
  const [isImageResizerOpen, setIsImageResizerOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 font-['Outfit'] antialiased">
      {/* Top Navbar */}
      <Navbar
        onOpenPdfStudio={() => setIsPdfStudioOpen(true)}
        onOpenBgRemover={() => setIsBgRemoverOpen(true)}
        onOpenImageResizer={() => setIsImageResizerOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        <PresetSelector
          selectedPresetId={selectedPreset?.id}
          onSelectPreset={(preset) => setSelectedPreset(preset)}
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

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
