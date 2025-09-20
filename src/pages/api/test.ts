import type { APIRoute } from 'astro'

export const POST: APIRoute = () => {
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
