import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'localhost',
      },
    ],
    qualities: [100, 75],
  },
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
