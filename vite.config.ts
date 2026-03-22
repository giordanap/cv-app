import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(() => {
  const repository = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? ''
  const isPagesBuild = process.env.GITHUB_ACTIONS === 'true' && repository.length > 0

  return {
    base: isPagesBuild ? `/${repository}/` : '/',
    plugins: [react()],
  }
})
