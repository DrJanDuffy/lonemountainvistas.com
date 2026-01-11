/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // swcMinify is enabled by default in Next.js 15, no need to specify
  images: {
    domains: ['lonemountainvistas.com', 'images.pexels.com'],
    // Image optimization is not available with static export
    unoptimized: true,
  },
  // Configure build output for static export
  output: 'export',
  // Disable x-powered-by header
  poweredByHeader: false,
  // Note: Headers are configured in vercel.json for static exports
  // Headers() function is not compatible with static export
};

module.exports = nextConfig;
