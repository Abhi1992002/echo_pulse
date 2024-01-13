/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["www.google.com"],
  },
  transpilePackages: ["math-helpers"],
};

module.exports = nextConfig;
