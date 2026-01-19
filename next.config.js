// next.config.js
const TerserPlugin = require('terser-webpack-plugin');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Forcer Webpack (désactive Turbopack pour ce projet)
  experimental: {
    turbo: false,
  },
  webpack(config, { isServer }) {
    if (!isServer) {
      config.optimization.minimizer.push(
          new TerserPlugin({
            terserOptions: {
              compress: true,
              mangle: true,
              format: { comments: false },
            },
            extractComments: false,
          })
      );
    }
    return config;
  },
};

module.exports = withBundleAnalyzer(nextConfig);
