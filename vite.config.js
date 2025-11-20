import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: 'auto', // BIARKAN SW TERDAFTAR OTOMATIS

      filename: 'sw.js', // WAJIB UNTUK VERCEL
      strategies: 'generateSW', // PALING KOMPATIBEL UNTUK VERCEL
      outDir: 'dist', // default, aman ditambahkan

      includeAssets: [
        'favicon.ico',
        'favicon.svg',
        'LOGORN.png'
      ],

      manifest: {
        name: 'Resep Nusantara',
        short_name: 'Resep Nusantara',
        description: 'Aplikasi Resep Makanan dan Minuman Khas Indonesia',
        theme_color: '#2563eb',
        background_color: '#ffffff',
        display: 'standalone',
        scope: '/',
        start_url: '/',
        orientation: 'portrait',
        icons: [
          {
            src: 'pwa-64x64.png',
            sizes: '64x64',
            type: 'image/png'
          },
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any'
          },
          {
            src: 'maskable-icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          }
        ]
      },

      workbox: {
        globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
        cleanupOutdatedCaches: true,
        clientsClaim: true,
        skipWaiting: true, // WAJIB untuk PWA stabil
      },
    }),
  ],
})
