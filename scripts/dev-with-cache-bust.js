#!/usr/bin/env node

const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

// Generate timestamp for cache busting
const timestamp = Date.now().toString();

console.log('🔥 Starting Development Server with Cache Busting');
console.log(`📦 Cache Timestamp: ${timestamp}`);

// Function to replace cache timestamp in files
function replaceCacheTimestamp(filePath, timestamp) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    content = content.replace(/\{\{CACHE_TIMESTAMP\}\}/g, timestamp);
    fs.writeFileSync(filePath, content);
    console.log(`✅ Updated cache timestamp in ${filePath}`);
  } catch (error) {
    console.log(`⚠️  Could not update ${filePath}:`, error.message);
  }
}

// Replace cache timestamp in index.html
replaceCacheTimestamp('./index.html', timestamp);

// Clear any existing cache
console.log('🧹 Clearing browser cache...');

// Start Vite with cache busting
const viteProcess = spawn('npm', ['run', 'dev'], {
  stdio: 'inherit',
  shell: true,
  env: {
    ...process.env,
    VITE_CACHE_BUST_TIMESTAMP: timestamp,
    VITE_FORCE_REFRESH: 'true',
  }
});

// Handle process events
viteProcess.on('error', (error) => {
  console.error('❌ Failed to start development server:', error);
});

viteProcess.on('close', (code) => {
  console.log(`🛑 Development server exited with code ${code}`);
});

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down development server...');
  viteProcess.kill('SIGINT');
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Shutting down development server...');
  viteProcess.kill('SIGTERM');
});
