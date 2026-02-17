import { withSentryConfig } from "@sentry/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Active l'exportation statique
  images: {
    unoptimized: true, // Requis pour export statique - optimisation via script de build
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  trailingSlash: true, // Ajoute un slash final pour chaque URL (requis pour les chemins relatifs en mode export)

  // Production optimizations
  compress: true,
  swcMinify: true,

  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? {
      exclude: ['error', 'warn'],
    } : false,
  },

  // Performance optimizations
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;