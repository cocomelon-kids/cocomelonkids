import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    base: '/',          // Base path for the application
    outDir: 'dist',    // Ensure build output goes to 'dist' directory
    rollupOptions: {
      // Optional: Customize Rollup options if needed
      external: ['react-icons'], // Include this if you want to explicitly externalize react-icons
    },
  },
});
