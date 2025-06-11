import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/TestPalych/',  // <-- название твоего репо с / в конце
  plugins: [react()],
})