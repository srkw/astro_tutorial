import type { APIRoute } from 'astro'

export const GET: APIRoute = async () => {
  const data = {
    message: 'GET Hello, World!',
    timestamp: new Date().toISOString(),
  }

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  })
}

export const POST: APIRoute = async () => {
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
