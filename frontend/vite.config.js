import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    base: '/',
    outDir: 'dist', // Ensure build output goes to 'dist' directory
  },
});
