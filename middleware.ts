export const config = {}

export default function middleware(request: Request) {
  console.log('on middleware')
  console.log('URL:', request.url)
  console.log('Method:', request.method)
  console.log('Headers:', Object.fromEntries(request.headers.entries()))
}
