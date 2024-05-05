/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {},
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
      appDir: true,
    },
    eslint: {
      dirs: ['app'],
    },
    images: {
      domains: ['static.wixstatic.com', 'localhost'],
      formats: ['image/webp'],
    },
  };

export default nextConfig;
