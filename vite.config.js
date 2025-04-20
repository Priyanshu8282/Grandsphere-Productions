import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: true,
  },
  server: {
    host: '0.0.0.0',
    port: 4000,
  },
  plugins: [react(), tailwindcss()],
  envDir: 'config/',
});