import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const rootDir = path.resolve(__dirname, '..')
  // Load environment variables from workspace root and frontend folder
  const env = { ...loadEnv(mode, rootDir, ''), ...loadEnv(mode, __dirname, '') }

  // Target backend port (matches backend PORT in .env or default 8080)
  const backendPort = env.PORT || '8080'
  // Target can be overridden via VITE_BACKEND_PROXY_TARGET if pointing to Cloud Run or remote backend
  const backendTarget = env.VITE_BACKEND_PROXY_TARGET || `http://localhost:${backendPort}`

  return {
    plugins: [react()],
    envDir: rootDir,
    server: {
      port: 5173,
      proxy: {
        // Automatically proxy /api and /health requests to backend in local development
        '/api': {
          target: backendTarget,
          changeOrigin: true,
          secure: false,
          ws: true,
        },
        '/health': {
          target: backendTarget,
          changeOrigin: true,
          secure: false,
        },
      },
    },
  }
})

