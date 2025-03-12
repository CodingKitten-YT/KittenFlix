import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/', // Use root path for all environments
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});