import { defineConfig } from 'vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue()
  ],
  define: {
    'process.env': {}
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@component': resolve(__dirname, 'src/components'),
      '@page': resolve(__dirname, 'src/pages'),
      '@store': resolve(__dirname, 'src/stores'),
      '@asset': resolve(__dirname, 'src/assets')
    }
  }
})
