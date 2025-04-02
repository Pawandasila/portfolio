import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  reactStrictMode: true,
  images: {
    domains: [
      'bp-wp-website-prod.s3.ap-south-1.amazonaws.com',
      'media.licdn.com',
      'th.bing.com'
    ],
    unoptimized: false,
  },
};

export default nextConfig;
