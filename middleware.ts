import { next } from '@vercel/edge'

export const config = {
  matcher: ['/((?!api).*)'],
}

/* eslint-disable no-console */
const middleware = (request: Request) => {
  console.log('on middleware', request.url)

  return next()
}

export default middleware
