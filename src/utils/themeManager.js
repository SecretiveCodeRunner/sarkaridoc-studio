import { Capacitor } from '@capacitor/core';
import { StatusBar, Style } from '@capacitor/status-bar';

const STORAGE_KEY = 'sarkaridoc_theme';

export function getStoredTheme() {
  if (typeof window === 'undefined') return 'light';
  return localStorage.getItem(STORAGE_KEY) || 'light';
}

export function applyTheme(theme) {
  if (typeof window === 'undefined') return;

  const root = document.documentElement;
  const isDark = theme === 'dark' || (theme === 'system' && window.matchMedia('(prefers-color-scheme: dark)').matches);

  if (isDark) {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }

  localStorage.setItem(STORAGE_KEY, theme);

  if (Capacitor.isNativePlatform()) {
    try {
      if (isDark) {
        StatusBar.setBackgroundColor({ color: '#0f172a' });
        StatusBar.setStyle({ style: Style.Dark });
      } else {
        StatusBar.setBackgroundColor({ color: '#ffffff' });
        StatusBar.setStyle({ style: Style.Light });
      }
    } catch (e) {
      console.debug('StatusBar style error', e);
    }
  }
}

export function initTheme() {
  const current = getStoredTheme();
  applyTheme(current);
}
