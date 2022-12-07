const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  // devServer: {
  //     static: './dist'
  // }
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader', // Creates `style` nodes from JS strings
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          }, // Translates CSS into CommonJS
        ],
      },
    ],
  },
});
