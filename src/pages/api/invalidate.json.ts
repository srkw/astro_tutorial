import type { APIRoute } from 'astro'

export const POST: APIRoute = async ({ url, request }) => {
  console.log('Revalidation request received')
  const body = await request.json()
  const route = body.route ?? '/'
  console.log(`Revalidating route: ${route}`)

  const response = await fetch(`https://${url.host}${route}`, {
    method: 'HEAD',
    headers: {
      'x-prerender-revalidate': import.meta.env.REVALIDATE_TOKEN,
    },
  })

  const wasInvalidated =
    response.headers.get('X-Vercel-Cache') === 'REVALIDATED'

  return new Response(JSON.stringify({ wasInvalidated }))
}
