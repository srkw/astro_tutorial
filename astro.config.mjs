// @ts-check
import react from '@astrojs/react'
import vercel from '@astrojs/vercel'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  adapter: vercel({
    edgeMiddleware: true,
    isr: {
      bypassToken: import.meta.env.REVALIDATE_TOKEN,
      exclude: [/^\/api\/.+/],
    },
  }),
  output: 'server',
})
