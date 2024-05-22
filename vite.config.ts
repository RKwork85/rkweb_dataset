import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      root: path.resolve(__dirname, 'src'),
      '@': path.resolve(__dirname, 'src'),
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    }
  },
  
  server: {
    port: 8080,
    host: true
  }
})


