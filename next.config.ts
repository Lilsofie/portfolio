import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    /* Serve modern formats when the browser accepts them. AVIF first (best
       ratio for photographs), WebP as the broad fallback, original last. */
    formats: ["image/avif", "image/webp"],
    /* Widths actually used by the layout's `sizes` hints — avoids generating
       and caching variants nothing requests. */
    deviceSizes: [375, 430, 640, 828, 1080, 1280, 1920],
    imageSizes: [180, 260, 340, 460, 540],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
};

export default nextConfig;
