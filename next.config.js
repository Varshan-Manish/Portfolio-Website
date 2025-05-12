/** @type {import('next').NextConfig} */
const nextConfig = {};
module.exports = {
  webpack(config, { isServer }) {
    if (isServer) {
      config.externals = ["swiper"];
    }
    return config;
  },
};
