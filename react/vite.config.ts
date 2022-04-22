import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import * as path from 'path'

export default defineConfig({
  resolve: {
    alias: {
      root: path.resolve(__dirname, './src'),
      assets: path.resolve(__dirname, './src/assets'),
      types: path.resolve(__dirname, './src/types'),
      utils: path.resolve(__dirname, './src/utils'),
      components: path.resolve(__dirname, './src/components'),
    }
  },
  css: {
    modules: {
      generateScopedName: 'react-video-player_[local]_[hash:base64:5]',
    },
  },
  plugins: [react()]
})
