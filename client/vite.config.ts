import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].[hash].js',
        chunkFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]',
      },
    },
  },
  server: {
    port: 9999,
  },
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: '@api', replacement: path.resolve(__dirname, 'src/api') },
      { find: '@assets', replacement: path.resolve(__dirname, 'src/assets') },
      {
        find: '@component',
        replacement: path.resolve(__dirname, 'src/component'),
      },
      { find: '@context', replacement: path.resolve(__dirname, 'src/context') },
      { find: '@hook', replacement: path.resolve(__dirname, 'src/hook') },
      { find: '@pages', replacement: path.resolve(__dirname, 'src/pages') },
      { find: '@type', replacement: path.resolve(__dirname, 'src/type') },
    ],
  },
});
