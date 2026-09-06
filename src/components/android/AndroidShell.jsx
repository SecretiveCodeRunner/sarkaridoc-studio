import React, { useState } from 'react';
import { AndroidTopBar } from './AndroidTopBar';
import { AndroidBottomNav } from './AndroidBottomNav';
import { AndroidStudioDashboard } from './AndroidStudioDashboard';
import { AndroidPresetsScreen } from './AndroidPresetsScreen';
import { AndroidPdfSuiteScreen } from './AndroidPdfSuiteScreen';
import { AndroidSettingsScreen } from './AndroidSettingsScreen';
import { shareAppLink } from '../../utils/downloadHelper';

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
  const [activeTab, setActiveTab] = useState('studio'); // 'studio' | 'pdf' | 'presets' | 'settings'

  const handleTabSelect = (tabId) => {
    setActiveTab(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col font-['Outfit'] text-slate-900 dark:text-slate-100 antialiased transition-colors duration-200">
      {/* 1. Android Material 3 Top App Bar */}
      <AndroidTopBar
        onOpenSettings={() => setActiveTab('settings')}
        onShare={shareAppLink}
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

        {activeTab === 'settings' && (
          <AndroidSettingsScreen />
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
