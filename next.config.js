// next.config.js
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  // Configuration webpack personnalisée
  webpack(config, { isServer }) {
    if (!isServer) {
      config.optimization.minimizer.push(
        new TerserPlugin({
          terserOptions: {
            compress: true,
            mangle: true,
            format: {
              comments: false,
            },
          },
          extractComments: false,
        })
      );
    }

    return config;
  },
};
