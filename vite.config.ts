import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: '/',  // Changed from '/blabber.site/' to '/' since CNAME indicates a root domain
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
})
