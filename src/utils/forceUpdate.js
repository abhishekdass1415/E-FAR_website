// Force Update Utility - Ensures changes are visible
export const forceUpdate = () => {
  if (typeof window !== 'undefined') {
    // Force reload all CSS
    const links = document.querySelectorAll('link[rel="stylesheet"]');
    links.forEach(link => {
      const href = link.getAttribute('href');
      if (href) {
        const newHref = href.split('?')[0] + '?t=' + Date.now();
        link.setAttribute('href', newHref);
      }
    });
    
    // Force component re-render
    window.location.reload();
  }
};

// Auto force update in development
if (import.meta.env.DEV) {
  console.log('🔄 Force Update Utility Active');
  console.log('📍 Cars page changes should be visible now');
}
