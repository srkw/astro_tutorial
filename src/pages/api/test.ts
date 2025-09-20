import type { APIRoute } from 'astro'

export const GET: APIRoute = async ({ request }) => {
  const data = {
    message: 'GET test',
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
  const data = {
    message: 'POST test',
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
