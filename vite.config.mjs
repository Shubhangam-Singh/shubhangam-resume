import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // If you plan to deploy to GitHub Pages at /shubhangam-resume/, set:
  // base: '/shubhangam-resume/'
})
