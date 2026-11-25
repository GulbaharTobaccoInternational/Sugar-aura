import type { NextConfig } from 'next';

const retiredRoutes = [
  '/services/:path*',
  '/why-us',
  '/about',
  '/areas',
  '/contact',
  '/faq',
  '/privacy',
  '/terms',
  '/journal/:path*',
];

const nextConfig: NextConfig = {
  trailingSlash: true,
  poweredByHeader: false,
  async redirects() {
    return retiredRoutes.map(source => ({ source, destination: '/', permanent: true }));
  },
  webpack(config) {
    config.cache = false;
    return config;
  },
};

export default nextConfig;
