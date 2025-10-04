// ICON SIZE TEST - Verify all icons are properly sized
export const testIconSizes = () => {
  if (typeof window === 'undefined') return;
  
  console.log('🔍 TESTING ICON SIZES...');
  
  const allSvgs = document.querySelectorAll('svg');
  console.log(`Found ${allSvgs.length} SVG elements`);
  
  allSvgs.forEach((svg, index) => {
    const computedStyle = window.getComputedStyle(svg);
    const width = computedStyle.width;
    const height = computedStyle.height;
    const classes = svg.className;
    
    console.log(`SVG ${index + 1}:`, {
      width,
      height,
      classes,
      hasWidthAttr: svg.hasAttribute('width'),
      hasHeightAttr: svg.hasAttribute('height'),
      hasInlineStyle: svg.hasAttribute('style')
    });
  });
  
  console.log('✅ ICON SIZE TEST COMPLETE');
};

// Auto-run test in development
if (import.meta.env.DEV) {
  setTimeout(() => {
    testIconSizes();
  }, 2000);
}
