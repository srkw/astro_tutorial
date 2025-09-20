import { defineMiddleware } from 'astro:middleware'

export const config = {
  matcher: ['/((?!api).*)'],
}

/* eslint-disable no-console */
export const onRequest = defineMiddleware((context, next) => {
  const url = new URL(context.request.url)

  console.log('on middleware', context.request.url)

  return next()
})
