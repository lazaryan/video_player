import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      assets: path.resolve(__dirname, './src/assets'),
      root: path.resolve(__dirname, './src'),
    }
  },
  css: {
    modules: {
      generateScopedName: 'react-video-player_[local]_[hash:base64:5]',
    },
  },
  plugins: [react()]
})
