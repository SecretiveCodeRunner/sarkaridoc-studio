import React, { useState } from 'react';
import { AndroidTopBar } from './AndroidTopBar';
import { AndroidBottomNav } from './AndroidBottomNav';
import { AndroidStudioDashboard } from './AndroidStudioDashboard';
import { AndroidPresetsScreen } from './AndroidPresetsScreen';
import { AndroidPdfSuiteScreen } from './AndroidPdfSuiteScreen';
import { AndroidInfoScreen } from './AndroidInfoScreen';

export const AndroidShell = ({
  onOpenPassportPhoto,
  onOpenImageToPdf,
  onOpenPdfCompressor,
  onOpenMergePdf,
  onOpenPdfToJpg,
  onOpenBgRemover,
  onOpenImageResizer,
  onSelectPreset,
}) => {
  const [activeTab, setActiveTab] = useState('studio'); // 'studio' | 'passport' | 'pdf' | 'presets' | 'info'

  const handleShare = async () => {
    const shareData = {
      title: 'SarkariDoc Studio — Offline Govt Exam Photo & PDF Suite',
      text: 'Resize exam photos & compress PDFs under 200KB offline on your phone! Zero server uploads.',
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (err) {
        if (err.name !== 'AbortError') {
          console.debug('Share aborted or failed', err);
        }
      }
    } else {
      try {
        await navigator.clipboard.writeText(window.location.href);
        alert('App link copied to clipboard!');
      } catch {
        alert(`Share link: ${window.location.href}`);
      }
    }
  };

  const handleTabSelect = (tabId) => {
    if (tabId === 'passport') {
      onOpenPassportPhoto();
      return;
    }
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-['Outfit'] text-slate-900 antialiased">
      {/* 1. Android Material 3 Top App Bar */}
      <AndroidTopBar
        onOpenInfo={() => setActiveTab('info')}
        onShare={handleShare}
      />

      {/* 2. Main Screen Area Based on Active Tab */}
      <main className="flex-1 w-full overflow-y-auto">
        {activeTab === 'studio' && (
          <AndroidStudioDashboard
            onOpenPassportPhoto={onOpenPassportPhoto}
            onOpenImageToPdf={onOpenImageToPdf}
            onOpenPdfCompressor={onOpenPdfCompressor}
            onOpenMergePdf={onOpenMergePdf}
            onOpenPdfToJpg={onOpenPdfToJpg}
            onOpenBgRemover={onOpenBgRemover}
            onOpenImageResizer={onOpenImageResizer}
            onSelectPreset={onSelectPreset}
            onViewAllPresets={() => setActiveTab('presets')}
          />
        )}

        {activeTab === 'pdf' && (
          <AndroidPdfSuiteScreen
            onOpenImageToPdf={onOpenImageToPdf}
            onOpenPdfCompressor={onOpenPdfCompressor}
            onOpenMergePdf={onOpenMergePdf}
            onOpenPdfToJpg={onOpenPdfToJpg}
          />
        )}

        {activeTab === 'presets' && (
          <AndroidPresetsScreen
            onSelectPreset={onSelectPreset}
          />
        )}

        {activeTab === 'info' && (
          <AndroidInfoScreen
            onShare={handleShare}
          />
        )}
      </main>

      {/* 3. Android Material 3 Bottom Navigation Bar */}
      <AndroidBottomNav
        activeTab={activeTab}
        onSelectTab={handleTabSelect}
      />
    </div>
  );
};
