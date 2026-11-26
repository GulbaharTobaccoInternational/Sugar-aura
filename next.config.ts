import type { NextConfig } from 'next';
// Standard Next.js on Vercel. The optional export is only for the private Sites preview.
const staticPreview = process.env.SUGAR_STATIC_EXPORT === '1';
const nextConfig: NextConfig = {
  ...(staticPreview ? { output: 'export' as const } : {
    async redirects() {
      return [{ source: '/services/sudanese-sweet', destination: '/services/sudanese-halwa', permanent: true }];
    },
  }),
  trailingSlash: true,
  images: { unoptimized: staticPreview },
  poweredByHeader: false,
  webpack(config) { config.cache = false; return config; },
};
export default nextConfig;
