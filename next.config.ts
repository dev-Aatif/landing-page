import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/projects/landing_page',
        destination: '/',
      },
      {
        source: '/projects/landing_page/:path*',
        destination: '/:path*',
      },
    ];
  },
};

export default nextConfig;
