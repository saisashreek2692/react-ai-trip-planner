/* eslint-disable no-undef */
import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      injectRegister: "auto",
      registerType: "autoUpdate",
      includeAssets: [
        "favicon.ico",
        "apple-touch-icon.png",
        "favicon-32x32.png",
        "favicon-16x16.png",
        "logo.svg",
      ],
      manifest: {
        name: "AI Trip Planner",
        short_name: "Trip Plan",
        description: "AI Generator which helps people to plan their holidays, tours, trips and vacations wtih ease.",
        theme_color: "#ffffff",
        icons: [
          {
            src: "android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "logo.svg",
            sizes: "156x165",
            type: "image/svg",
          },
        ],
      },
      workbox: {
        clientsClaim: true,
        skipWaiting: true,
        sourcemap: true,
        globPatterns: ["**/*.{js,css,html}"],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "google-fonts-cache",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            urlPattern: /^https:\/\/fonts\.gstatic\.com\/.*/i,
            handler: "CacheFirst",
            options: {
              cacheName: "gstatic-fonts-cache",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365, // <== 365 days
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            handler: "NetworkOnly",
            urlPattern: /\/api\/.*\/*.json/,
            method: "POST",
            options: {
              backgroundSync: {
                name: "myQueueName",
                options: {
                  maxRetentionTime: 24 * 60,
                },
              },
            },
          },
        ],
      },
      injectManifest: {
        globPatterns: ["**/*.{js,css,html}"],
      },
      devOptions: {
        enabled: true,
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
