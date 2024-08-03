import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr(),
  ],
  base: './',
  build: {
    outDir: path.resolve(__dirname, 'docs'),
    assetsInlineLimit: 0,
  },

  resolve: {
    alias: [
      { find: 'assets', replacement: path.resolve(__dirname, 'src/assets') },
      { find: 'components', replacement: path.resolve(__dirname, 'src/components') },
      { find: 'constants', replacement: path.resolve(__dirname, 'src/constants') },
      { find: 'hooks', replacement: path.resolve(__dirname, 'src/hooks') },
      { find: 'layout', replacement: path.resolve(__dirname, 'src/layout') },
      { find: 'pages', replacement: path.resolve(__dirname, 'src/pages') },
      { find: 'router', replacement: path.resolve(__dirname, 'src/router') },
      { find: 'types', replacement: path.resolve(__dirname, 'src/types') },
      { find: '@', replacement: path.resolve(__dirname, 'src') },
    ],
  },
});
