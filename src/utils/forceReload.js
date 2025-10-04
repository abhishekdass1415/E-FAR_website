// NUCLEAR CACHE BUSTING - PERMANENT SOLUTION
// This will FORCE all changes to be visible immediately

class ForceReload {
  constructor() {
    this.timestamp = Date.now();
    this.setupPermanentCacheBusting();
    this.setupHotReload();
    this.setupVisualIndicators();
  }

  setupPermanentCacheBusting() {
    if (typeof window === 'undefined') return;

    // 1. DISABLE ALL BROWSER CACHING
    const meta = document.createElement('meta');
    meta.httpEquiv = 'Cache-Control';
    meta.content = 'no-cache, no-store, must-revalidate, max-age=0';
    document.head.appendChild(meta);

    const meta2 = document.createElement('meta');
    meta2.httpEquiv = 'Pragma';
    meta2.content = 'no-cache';
    document.head.appendChild(meta2);

    const meta3 = document.createElement('meta');
    meta3.httpEquiv = 'Expires';
    meta3.content = '0';
    document.head.appendChild(meta3);

    // 2. FORCE RELOAD ALL CSS EVERY 2 SECONDS
    setInterval(() => {
      this.forceCSSReload();
    }, 2000);

    // 3. FORCE RELOAD ON ANY FILE CHANGE
    this.setupFileWatcher();
  }

  setupHotReload() {
    if (import.meta.hot) {
      // Force reload on ANY file change
      import.meta.hot.on('vite:beforeUpdate', () => {
        console.log('🔥 FORCE RELOAD: File changed, forcing update...');
        this.forceFullReload();
      });

      import.meta.hot.on('vite:afterUpdate', () => {
        console.log('✅ FORCE RELOAD: Update applied');
        this.forceCSSReload();
      });
    }
  }

  setupVisualIndicators() {
    // Add visual indicator that force reload is active
    const indicator = document.createElement('div');
    indicator.id = 'force-reload-indicator';
    indicator.innerHTML = '🔥 FORCE RELOAD ACTIVE';
    indicator.style.cssText = `
      position: fixed;
      top: 10px;
      left: 10px;
      background: #ff4444;
      color: white;
      padding: 8px 12px;
      border-radius: 4px;
      font-size: 12px;
      font-weight: bold;
      z-index: 10000;
      font-family: monospace;
    `;
    document.body.appendChild(indicator);
  }

  forceCSSReload() {
    const links = document.querySelectorAll('link[rel="stylesheet"]');
    links.forEach(link => {
      const href = link.getAttribute('href');
      if (href) {
        const newHref = href.split('?')[0] + '?t=' + Date.now() + '&force=' + Math.random();
        link.setAttribute('href', newHref);
      }
    });

    // Force style recalculation
    const elements = document.querySelectorAll('*');
    elements.forEach(el => {
      el.style.display = 'none';
      el.offsetHeight; // Trigger reflow
      el.style.display = '';
    });
  }

  forceFullReload() {
    // Nuclear option - full page reload
    window.location.reload(true);
  }

  setupFileWatcher() {
    // Watch for any changes and force reload
    if (import.meta.hot) {
      import.meta.hot.on('vite:beforeUpdate', () => {
        console.log('🚨 FILE CHANGED - FORCING RELOAD');
        setTimeout(() => {
          this.forceFullReload();
        }, 100);
      });
    }
  }

  // Manual force reload method
  forceReload() {
    console.log('🔥 MANUAL FORCE RELOAD TRIGGERED');
    this.forceCSSReload();
    setTimeout(() => {
      this.forceFullReload();
    }, 500);
  }
}

// Auto-initialize
const forceReload = new ForceReload();

// Make it globally available
if (typeof window !== 'undefined') {
  window.forceReload = forceReload;
  window.forceReloadNow = () => forceReload.forceReload();
}

export default forceReload;
