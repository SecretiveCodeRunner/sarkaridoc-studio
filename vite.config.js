import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { cloudflare } from "@cloudflare/vite-plugin";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), cloudflare()],
  base: './', // Relative base for 100% bulletproof hosting across Cloudflare Pages, GitHub Pages & Vercel
  build: {
    target: 'esnext',
    cssCodeSplit: true,
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
  }
})