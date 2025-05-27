/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    unoptimized: true,
  },
  output: 'export',
  distDir: 'out',
  // For a custom domain
  // basePath: '/tig-technology',
  // For GitHub Pages
  // assetPrefix: '/tig-technology',
}

module.exports = nextConfig;
