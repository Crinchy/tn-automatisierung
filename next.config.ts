import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  reactCompiler: true,
  experimental: {
    // Tailwind keeps the CSS small, so inlining it removes the render-blocking stylesheet request
    inlineCss: true,
  },
  images: {
    // AVIF first, with WebP as the fallback for browsers without AVIF support
    formats: ["image/avif", "image/webp"],
    // 25 and 40 for the faint decorative backgrounds, 75 (the default) for everything else
    qualities: [25, 40, 75],
    // Stock photos are served from Unsplash's CDN until real project photos replace them
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/photo-**",
        search: "?w=2400&q=80&auto=format&fit=crop",
      },
    ],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
