import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// NUCLEAR CACHE BUSTING CONFIG - PERMANENT SOLUTION
export default defineConfig({
  plugins: [react(), tailwindcss()],
  css: {
    devSourcemap: true,
    postcss: {
      plugins: [],
    },
  },
  server: {
    hmr: {
      overlay: true,
      host: 'localhost',
      port: 24678,
    },
    watch: {
      usePolling: true,
      interval: 1000,
      ignored: ['!**/node_modules/**']
    },
    cors: true,
  },
  build: {
    cssCodeSplit: false,
    sourcemap: true,
  },
  define: {
    __VITE_BUILD_TIME__: JSON.stringify(new Date().toISOString()),
    __FORCE_RELOAD__: JSON.stringify(Date.now()),
  },
  optimizeDeps: {
    force: true,
  },
  esbuild: {
    target: 'esnext',
  },
})
