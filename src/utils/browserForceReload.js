// BROWSER FORCE RELOAD - NUCLEAR OPTION
// This runs in the browser and forces ALL changes to be visible

(function() {
  'use strict';
  
  console.log('🔥 BROWSER FORCE RELOAD ACTIVE');
  
  // 1. DISABLE ALL CACHING
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.getRegistrations().then(registrations => {
      registrations.forEach(registration => registration.unregister());
    });
  }
  
  // 2. FORCE RELOAD CSS EVERY SECOND
  setInterval(() => {
    const links = document.querySelectorAll('link[rel="stylesheet"]');
    links.forEach(link => {
      const href = link.getAttribute('href');
      if (href) {
        const newHref = href.split('?')[0] + '?t=' + Date.now() + '&force=' + Math.random();
        link.setAttribute('href', newHref);
      }
    });
  }, 1000);
  
  // 3. FORCE STYLE RECALCULATION
  setInterval(() => {
    const elements = document.querySelectorAll('*');
    elements.forEach(el => {
      const originalDisplay = el.style.display;
      el.style.display = 'none';
      el.offsetHeight; // Trigger reflow
      el.style.display = originalDisplay;
    });
  }, 2000);
  
  // 4. ADD VISUAL INDICATOR
  const indicator = document.createElement('div');
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
    box-shadow: 0 2px 10px rgba(0,0,0,0.3);
  `;
  document.body.appendChild(indicator);
  
  // 5. FORCE RELOAD ON ANY CHANGE
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'childList' || mutation.type === 'attributes') {
        console.log('🔄 DOM CHANGED - FORCING RELOAD');
        setTimeout(() => {
          window.location.reload(true);
        }, 100);
      }
    });
  });
  
  observer.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ['class', 'style']
  });
  
  // 6. MANUAL FORCE RELOAD FUNCTION
  window.forceReloadNow = function() {
    console.log('🔥 MANUAL FORCE RELOAD TRIGGERED');
    window.location.reload(true);
  };
  
  console.log('✅ BROWSER FORCE RELOAD INITIALIZED');
  console.log('📍 Look for red "FORCE RELOAD ACTIVE" indicator in top-left');
  console.log('📍 Use window.forceReloadNow() to manually force reload');
  
})();
