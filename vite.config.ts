import { paraglideVitePlugin } from '@inlang/paraglide-js'
import { defineConfig } from 'vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { tanstackRouter } from '@tanstack/router-plugin/vite'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [paraglideVitePlugin({ project: './project.inlang', outdir: './src/paraglide', strategy: ['localStorage', 'cookie', 'preferredLanguage'] }),
    tailwindcss(),
    tanstackRouter({
      target: 'react',
      autoCodeSplitting: true
    }),
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  resolve: {
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@features': path.resolve(__dirname, 'src/features'),
      '@widgets': path.resolve(__dirname, 'src/widgets'),
      '@shared': path.resolve(__dirname, 'src/shared'),
      '@entities': path.resolve(__dirname, 'src/entities'),
      '@api-queries': path.resolve(__dirname, 'src/generate/api/hooks/queries'),
      '@api/mutations': path.resolve(__dirname, 'src/generate/api/hooks/mutations'),
      '@api/types': path.resolve(__dirname, 'src/generate/api/types'),
      '@api/zod': path.resolve(__dirname, 'src/generate/api/zod'),
      '@route-tree': path.resolve(__dirname, 'src/generate/routes/route-tree.gen.ts')
    }
  }
})
