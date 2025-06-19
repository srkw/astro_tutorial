export type BlogFrontMatterSchema = {
  title: string
  pubDate: string
  description: string
  author: string
  image: {
    url: string
    alt: string
  }
  tags: string[]
}
