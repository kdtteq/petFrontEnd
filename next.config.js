/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  cssGlobal: ["/css/*.css"],
};

module.exports = nextConfig;
