import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Ensure the plugin is installed by running:
// pnpm add @vitejs/plugin-react -D

export default defineConfig({
  base: '/',
  plugins: [react()],
})
