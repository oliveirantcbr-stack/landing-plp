/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: false, // DESATIVA TURBOPACK
  },
  images: {
    qualities: [50, 55, 60, 70, 75, 80, 90],
  },
};

export default nextConfig;
