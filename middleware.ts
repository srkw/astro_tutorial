import { rewrite } from '@vercel/functions'

export const config = {
  matcher: '/example/posts/:path*',
}

export default function middleware(request: Request) {
  console.log('on middleware')
  console.log('URL:', request.url)
  console.log('Method:', request.method)
  console.log('Headers:', Object.fromEntries(request.headers.entries()))

  // 1/2の確率で posts_ab ページにリライト
  if (Math.random() < 0.5) {
    console.log('hit!')
    return rewrite(new URL('/example/posts_ab', request.url))
  }
}
