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
      domains: ['static.wixstatic.com','stapi-on-render.onrender.comhttps'],
      formats: ['image/webp'],
    },
  };

export default nextConfig;
