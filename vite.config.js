import { defineConfig } from 'vite'
import path from 'path';
import react from '@vitejs/plugin-react'

const _resolve = (dir) => path.resolve(__dirname, dir);
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': _resolve('src'),
    },
  },
  plugins: [react()],
})
