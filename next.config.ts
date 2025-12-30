import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['localhost'],
    qualities: [100, 75],
  },
};

export default nextConfig;
