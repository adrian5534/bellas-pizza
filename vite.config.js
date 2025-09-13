import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy'

export default defineConfig({
  plugins: [
    react(),
    legacy({
      targets: ['defaults', 'not IE 11']
    })
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          bootstrap: ['bootstrap'],
        }
      }
    },
    chunkSizeWarningLimit: 1000 // (optional) increase limit to suppress warning
  },
  css: {
    minify: false
  }
})