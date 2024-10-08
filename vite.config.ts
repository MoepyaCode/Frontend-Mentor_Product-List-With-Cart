/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

const root = resolve(__dirname, 'src')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@app-components': resolve(root, 'components'),
      '@app-components/*': resolve(root, 'components/*'),
      '@app-assets': resolve(root, 'assets'),
      '@app-assets/*': resolve(root, 'assets/*'),
      '@app-hooks': resolve(root, 'hooks'),
      '@app-hooks/*': resolve(root, 'hooks/*'),
      '@app-store-features': resolve(root, 'store/features'),
      '@app-store-features/*': resolve(root, 'store/features/*'),
      '@app-utils': resolve(root, 'utils'),
      '@app-utils/*': resolve(root, 'utils/*'),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/setupTests.ts'],
  },
})
