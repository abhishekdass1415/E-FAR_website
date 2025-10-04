// SMART CACHE BUSTING - Only refreshes when actually needed
// This prevents annoying constant refreshes while keeping cache busting

class SmartCacheBust {
  constructor() {
    this.lastFileChange = Date.now();
    this.isUserScrolling = false;
    this.scrollTimeout = null;
    this.setupSmartBusting();
    this.setupScrollDetection();
  }

  setupSmartBusting() {
    if (typeof window === 'undefined') return;

    // Only force CSS reload on actual file changes, not constantly
    if (import.meta.hot) {
      import.meta.hot.on('vite:beforeUpdate', () => {
        console.log('📁 File changed - Smart cache busting...');
        this.lastFileChange = Date.now();
        this.forceCSSReload();
      });

      import.meta.hot.on('vite:afterUpdate', () => {
        console.log('✅ Smart cache busting applied');
      });
    }

    // Add visual indicator (less aggressive)
    this.addSmartIndicator();
  }

  setupScrollDetection() {
    if (typeof window === 'undefined') return;

    // Detect when user is scrolling
    let scrollTimeout;
    window.addEventListener('scroll', () => {
      this.isUserScrolling = true;
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        this.isUserScrolling = false;
      }, 1000);
    });
  }

  forceCSSReload() {
    // Only reload CSS if user is not actively scrolling
    if (this.isUserScrolling) {
      console.log('⏸️ User scrolling - skipping CSS reload');
      return;
    }

    const links = document.querySelectorAll('link[rel="stylesheet"]');
    links.forEach(link => {
      const href = link.getAttribute('href');
      if (href) {
        const newHref = href.split('?')[0] + '?t=' + Date.now();
        link.setAttribute('href', newHref);
      }
    });
  }

  addSmartIndicator() {
    const indicator = document.createElement('div');
    indicator.innerHTML = '🎯 SMART CACHE ACTIVE';
    indicator.style.cssText = `
      position: fixed;
      top: 10px;
      right: 10px;
      background: #00A3E0;
      color: white;
      padding: 6px 10px;
      border-radius: 4px;
      font-size: 11px;
      font-weight: bold;
      z-index: 10000;
      font-family: monospace;
      box-shadow: 0 2px 8px rgba(0,0,0,0.2);
    `;
    document.body.appendChild(indicator);
  }

  // Manual force reload (only when needed)
  forceReload() {
    console.log('🔄 Manual force reload triggered');
    window.location.reload();
  }
}

// Initialize smart cache busting
const smartCacheBust = new SmartCacheBust();

// Make it globally available
if (typeof window !== 'undefined') {
  window.smartCacheBust = smartCacheBust;
  window.forceReload = () => smartCacheBust.forceReload();
}

export default smartCacheBust;
