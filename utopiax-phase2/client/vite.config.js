import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Vite only exposes VITE_-prefixed env vars by default; also allow REACT_APP_
  // so client/.env.example variable names work as specified.
  envPrefix: ['VITE_', 'REACT_APP_'],
})
