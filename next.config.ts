import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["assets.zyrosite.com"], // Add your allowed domains here
  },
  output: 'export',

  experimental: {
    // appDir: false,
  },
};

export default nextConfig;
