import type { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: 'Googlebot',
        allow: ['/'],
        disallow: ['/privacy-legacy/'],
      },
      {
        userAgent: ['Applebot', 'Bingbot'],
        disallow: ['/privacy-legacy/'],
      },
    ],
    sitemap: 'https://jeromegavinodev.com/',
  }
}