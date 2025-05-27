/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['vercel.app'],
    // Only use unoptimized when using static export
    // unoptimized: true,
  },
  // Comment out static export configuration for Vercel deployment
  // output: 'export',
  // distDir: 'out',
}

module.exports = nextConfig;
