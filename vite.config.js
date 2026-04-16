import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/nexo-research/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  }
})
