// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/webCart-Prac7/',
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        second: 'index2.html'
      }
    }
  }
})

