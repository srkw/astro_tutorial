// @ts-check
import preact from '@astrojs/preact'
import vercel from '@astrojs/vercel'
import { defineConfig } from 'astro/config'

console.log('===============================')
console.log('===============================')
console.log('REVALIDATE_TOKEN:', import.meta.env.REVALIDATE_TOKEN)
console.log('===============================')
console.log('===============================')

// https://astro.build/config
export default defineConfig({
  integrations: [preact()],
  adapter: vercel({
    // edgeMiddleware: true,
    isr: {
      bypassToken: process.env.REVALIDATE_TOKEN,
      exclude: [/^\/api\/.+/],
    },
  }),
  output: 'server',
})
