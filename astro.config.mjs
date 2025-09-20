// @ts-check
import preact from '@astrojs/preact'
import vercel from '@astrojs/vercel'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  integrations: [preact()],
  adapter: vercel({
    edgeMiddleware: true,
    isr: {
      bypassToken: import.meta.env.REVALIDATE_TOKEN,
      exclude: [/^\/api\/.+/],
    },
  }),
  output: 'server',
})
