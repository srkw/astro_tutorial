import type { APIRoute } from 'astro'

export const POST: APIRoute = async ({ url, request }) => {
  // console.log('Revalidation request received')
  // const body = await request.json()
  // const route = body.route ?? '/'
  // console.log(`Revalidating route: ${{ url, route }}`)

  // const response = await fetch(`https://${url.host}${route}`, {
  //   method: 'HEAD',
  //   headers: {
  //     'x-prerender-revalidate': import.meta.env.REVALIDATE_TOKEN,
  //   },
  // })

  // const wasInvalidated =
  //   response.headers.get('X-Vercel-Cache') === 'REVALIDATED'

  // return new Response(
  //   JSON.stringify({
  //     status: 200,
  //     wasInvalidated,
  //   })
  // )
  const data = {
    message: 'POST Hello, World!',
    timestamp: new Date().toISOString(),
  }

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  })
}
