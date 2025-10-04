#!/usr/bin/env node

const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔥 NUCLEAR DEVELOPMENT MODE - PERMANENT CACHE BUSTING');
console.log('==================================================');

// Clear ALL possible caches
function clearAllCaches() {
  console.log('🧹 Clearing ALL caches...');
  
  // Clear Vite cache
  const viteCache = path.join(process.cwd(), 'node_modules', '.vite');
  if (fs.existsSync(viteCache)) {
    fs.rmSync(viteCache, { recursive: true, force: true });
    console.log('✅ Vite cache cleared');
  }
  
  // Clear dist folder
  const distFolder = path.join(process.cwd(), 'dist');
  if (fs.existsSync(distFolder)) {
    fs.rmSync(distFolder, { recursive: true, force: true });
    console.log('✅ Dist folder cleared');
  }
  
  // Clear any other cache folders
  const cacheFolders = ['.cache', '.next', '.nuxt', '.output'];
  cacheFolders.forEach(folder => {
    const folderPath = path.join(process.cwd(), folder);
    if (fs.existsSync(folderPath)) {
      fs.rmSync(folderPath, { recursive: true, force: true });
      console.log(`✅ ${folder} cleared`);
    }
  });
}

// Force timestamp update
function updateTimestamps() {
  const timestamp = Date.now();
  console.log(`⏰ Updating timestamps: ${timestamp}`);
  
  // Update index.html
  const indexPath = path.join(process.cwd(), 'index.html');
  if (fs.existsSync(indexPath)) {
    let content = fs.readFileSync(indexPath, 'utf8');
    content = content.replace(/\{\{CACHE_TIMESTAMP\}\}/g, timestamp);
    fs.writeFileSync(indexPath, content);
    console.log('✅ index.html timestamp updated');
  }
  
  // Update CSS files
  const cssPath = path.join(process.cwd(), 'src', 'index.css');
  if (fs.existsSync(cssPath)) {
    let content = fs.readFileSync(cssPath, 'utf8');
    content = content.replace(/Last Updated: .*/, `Last Updated: ${timestamp}`);
    fs.writeFileSync(cssPath, content);
    console.log('✅ CSS timestamp updated');
  }
}

// Start development server with nuclear options
function startNuclearDev() {
  console.log('🚀 Starting NUCLEAR development server...');
  
  const viteProcess = spawn('npx', ['vite', '--force', '--host'], {
    stdio: 'inherit',
    shell: true,
    env: {
      ...process.env,
      NODE_ENV: 'development',
      VITE_FORCE_RELOAD: 'true',
      VITE_DISABLE_CACHE: 'true',
      VITE_CACHE_BUST: Date.now().toString(),
    }
  });
  
  viteProcess.on('error', (error) => {
    console.error('❌ Failed to start development server:', error);
  });
  
  viteProcess.on('close', (code) => {
    console.log(`🛑 Development server exited with code ${code}`);
  });
  
  // Graceful shutdown
  process.on('SIGINT', () => {
    console.log('\n🛑 Shutting down NUCLEAR development server...');
    viteProcess.kill('SIGINT');
    process.exit(0);
  });
}

// Main execution
console.log('🔥 NUCLEAR CACHE BUSTING INITIATED');
clearAllCaches();
updateTimestamps();
startNuclearDev();
