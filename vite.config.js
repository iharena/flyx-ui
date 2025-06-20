import { defineConfig } from 'vite';

export default defineConfig({
  base: '/flyx-ui/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
});
