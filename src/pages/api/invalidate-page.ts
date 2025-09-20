import type { APIRoute } from 'astro'

export const GET: APIRoute = async ({ request }) => {
  const data = {
    message: 'GET invalidate page',
    request,
    timestamp: new Date().toISOString(),
  }

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

export const POST: APIRoute = async ({ request }) => {
  console.log('Revalidation request received')
  const body = await request.json()
  const route = body.route ?? '/'
  const url = new URL(request.url)
  console.log(`Revalidating route: ${{ url, route }}`)

  const response = await fetch(`https://${url.host}${route}`, {
    method: 'HEAD',
    headers: {
      'x-prerender-revalidate': import.meta.env.REVALIDATE_TOKEN,
    },
  })

  const wasInvalidated =
    response.headers.get('X-Vercel-Cache') === 'REVALIDATED'

  return new Response(
    JSON.stringify({
      status: 200,
      wasInvalidated,
    })
  )
}
