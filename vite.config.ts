import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import { ManifestV3Export, crx } from '@crxjs/vite-plugin';

import manifestJson from './manifest.config';

const manifest = manifestJson as ManifestV3Export;

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    sourcemap: true,
    minify: false,
  },
  plugins: [
    //
    tsconfigPaths(),
    react(),
    crx({ manifest }),
  ],
  // optimizeDeps: {
  //   esbuildOptions: {
  //     sourcemap: 'inline',
  //   },
  // },
});
