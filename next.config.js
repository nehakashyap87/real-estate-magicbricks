/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap',
      },
    ]
  },
  reactStrictMode: true,
  images:{
    domains: ['img.youtube.com', 'img.staticmb.com'],
  }
}

module.exports = nextConfig
