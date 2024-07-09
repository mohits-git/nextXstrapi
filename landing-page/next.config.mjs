/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: process.env.BACKEND_PROTOCOL,
        hostname: process.env.BACKEND_MEDIA_DOMAIN,
        port: process.env.BACKEND_PORT,
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
