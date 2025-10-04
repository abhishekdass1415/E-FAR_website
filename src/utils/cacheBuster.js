// Cache Buster Utility - Prevents CSS caching issues permanently
export class CacheBuster {
  static instance = null;
  
  static getInstance() {
    if (!CacheBuster.instance) {
      CacheBuster.instance = new CacheBuster();
    }
    return CacheBuster.instance;
  }

  constructor() {
    this.buildTime = Date.now();
    this.version = `v${this.buildTime}`;
    this.setupCacheBreaking();
  }

  setupCacheBreaking() {
    // Force CSS reload by adding timestamp to CSS imports
    if (typeof window !== 'undefined') {
      // Add cache busting to all CSS links
      const links = document.querySelectorAll('link[rel="stylesheet"]');
      links.forEach(link => {
        const href = link.getAttribute('href');
        if (href && !href.includes('cachebust')) {
          const separator = href.includes('?') ? '&' : '?';
          link.setAttribute('href', `${href}${separator}cachebust=${this.buildTime}`);
        }
      });

      // Force style recalculation
      this.forceRerender();
    }
  }

  forceRerender() {
    // Force browser to recalculate styles
    const elements = document.querySelectorAll('*');
    elements.forEach(el => {
      const originalDisplay = el.style.display;
      el.style.display = 'none';
      el.offsetHeight; // Trigger reflow
      el.style.display = originalDisplay;
    });
  }

  // Method to call when you make CSS changes
  static bustCache() {
    const instance = CacheBuster.getInstance();
    instance.buildTime = Date.now();
    instance.setupCacheBreaking();
    console.log('🎯 Cache busted! CSS changes should now be visible.');
  }

  // Development helper
  static devMode() {
    if (process.env.NODE_ENV === 'development') {
      console.log('🚀 CacheBuster Development Mode Active');
      console.log(`📦 Build Version: ${CacheBuster.getInstance().version}`);
      
      // Auto-refresh on CSS changes
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
            CacheBuster.bustCache();
          }
        });
      });
      
      // Observe all elements for class changes
      document.addEventListener('DOMContentLoaded', () => {
        observer.observe(document.body, {
          attributes: true,
          subtree: true,
          attributeFilter: ['class']
        });
      });
    }
  }
}

// Auto-initialize in development
if (typeof window !== 'undefined' && process.env.NODE_ENV === 'development') {
  CacheBuster.devMode();
}

export default CacheBuster;
