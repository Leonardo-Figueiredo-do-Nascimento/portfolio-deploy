import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build',  // Certifica-se de que o diretório de saída é 'build'
  },
  base: '/Portfolio/',  // Isso garante que os caminhos relativos funcionem corretamente no GitHub Pages
})
