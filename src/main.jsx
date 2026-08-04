import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Register Service Worker for PWA Add-to-Home-Screen prompt & seamless auto-updates
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then((reg) => {
        console.log('SarkariDoc PWA SW Registered:', reg.scope);
        // Check for updates periodically when user switches tabs or stays on site
        reg.addEventListener('updatefound', () => {
          const newWorker = reg.installing;
          if (newWorker) {
            newWorker.addEventListener('statechange', () => {
              if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                console.log('[PWA] New version detected! Reloading page for seamless update...');
                window.location.reload();
              }
            });
          }
        });
      })
      .catch((err) => console.log('SW Registration failed:', err));
  });

  // Automatically refresh active window when a new Service Worker takes over control
  let refreshing = false;
  navigator.serviceWorker.addEventListener('controllerchange', () => {
    if (!refreshing) {
      refreshing = true;
      console.log('[PWA] Controller changed! Auto-reloading page...');
      window.location.reload();
    }
  });
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


