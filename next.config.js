// next.config.js
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  // Configuration webpack personnalisée
  webpack(config, { isServer }) { //configuration webpack rendu coté client
    if (!isServer) {
      config.optimization.minimizer.push( //optimisation en minifiant le code
        new TerserPlugin({
          terserOptions: {
            compress: true, //compression du code
            mangle: true, // obfuscation nom des variables
            format: {
              comments: false, //supprimer les commentaires
            },
          },
          extractComments: false, //empecher l'extraction de commentaires
        })
      );
    }

    return config;
  },
};
