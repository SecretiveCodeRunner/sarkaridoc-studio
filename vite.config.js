import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { cloudflare } from "@cloudflare/vite-plugin";

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react(), tailwindcss(), cloudflare()],
  base: './', // Relative base for bulletproof hosting across Cloudflare Pages, GitHub Pages & Vercel
  build: {
    target: 'esnext',
    cssCodeSplit: true,
    assetsInlineLimit: 4096, // Inline small assets (<4KB) as base64 to save round trips
    chunkSizeWarningLimit: 800,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('@imgly') || id.includes('onnxruntime')) {
            return 'vendor-ai-engine';
          }
          if (id.includes('pdfjs-dist') || id.includes('pdf-lib')) {
            return 'vendor-pdf-engine';
          }
          if (id.includes('lucide-react')) {
            return 'vendor-icons';
          }
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'vendor-react';
          }
        }
      }
    }
  },
  // Strip console.log and debugger statements in production builds
  oxc: {
    transform: {
      drop: mode === 'production' ? ['console', 'debugger'] : [],
    }
  }
}))