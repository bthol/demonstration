import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss()
  ],
  build: {
    outDir: './dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'src/pages/main/main.html'),
        conductr: resolve(import.meta.dirname, 'src/pages/conductr/conductr.html'),
      },
    },
  }
})
