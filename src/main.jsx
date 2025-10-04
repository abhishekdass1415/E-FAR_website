import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import smartCacheBust from './utils/smartCacheBust.js'
import './utils/testIconSizes.js'

// SMART CACHE BUSTING - Only refreshes when needed
if (import.meta.env.DEV) {
  console.log('🎯 SMART CACHE BUSTING ACTIVE - Changes visible without constant refresh');
  console.log('📍 Smart cache indicator should be visible in top-right corner');
  console.log('📍 Use window.forceReload() if you need manual refresh');
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
