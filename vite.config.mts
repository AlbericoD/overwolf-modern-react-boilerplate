import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: './build',
    emptyOutDir: true,
    sourcemap: true,
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    rollupOptions: {
      input: {
        background: resolve(__dirname, 'src/screens/background/entry.html'),
        desktop: resolve(__dirname, 'src/screens/desktop/entry.html'),
        ingame: resolve(__dirname, 'src/screens/ingame/entry.html')
      },
      logLevel: 'info',
    },
  }
})

