/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // domains: ["localhost:3001"],
    domains: ["fakestoreapi.com"],
    // assetPrefix: "https://fakestoreapi.com",
  },
};

module.exports = nextConfig;

// const withImages = require("next-images");

// module.exports = withImages({
//   images: {
//     // domains: ["localhost:3001"],
//     domains: ["fakestoreapi.com"],
//     // assetPrefix: "https://fakestoreapi.com",
//   },
//   webpack(config, options) {
//     return config;
//   },
// });
