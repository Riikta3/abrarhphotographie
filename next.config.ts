import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // AVIF d'abord : ~30 % de moins que WebP sur des photographies.
    formats: ["image/avif", "image/webp"],
    // Les sources font 1024 à 1408 px de large : inutile de générer des
    // variantes au-delà, Next ne ferait qu'upscaler.
    deviceSizes: [640, 750, 828, 1080, 1200, 1408, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
  },

  compress: true,
  poweredByHeader: false,

  async redirects() {
    return [{ source: "/galerie", destination: "/gallery", permanent: true }];
  },

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
