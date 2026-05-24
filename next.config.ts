import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [{ source: "/galerie", destination: "/gallery", permanent: true }];
  },
};

export default nextConfig;
