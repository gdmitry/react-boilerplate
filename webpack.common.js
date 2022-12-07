const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  // optimization: {
  //     usedExports: true
  // },
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'ts-loader',
      },
      // {
      //   test: /\.svg$/i,
      //   type: 'asset',
      //   resourceQuery: /url/, // *.svg?url
      // },
      {
        test: /\.svg$/i,
        // Load svgs as React components
        issuer: /\.[jt]sx?$/, // ensure to correct loading svgs from css
        // resourceQuery: { not: [/url/] }, // exclude react component if *.svg?url
        use: [
          {
            loader: '@svgr/webpack',
            // Docs: https://react-svgr.com/docs/webpack/
            // https://github.com/svg/svgo#configuration
            options: {
              svgo: true, // Enable SVGO optimization
              svgoConfig: {
                plugins: [
                  {
                    name: 'preset-default',
                    params: {
                      overrides: {
                        // override default preset config
                        // or disable plugins
                        removeViewBox: false,
                      },
                    },
                  },
                ],
              },
            },
          },
        ],
      },
      // {
      //   test: /\.svg/,
      //   type: 'asset/inline', // inline, base64 by default
      //   // type: 'asset/resource', // file-loader
      // },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.svg', '.scss'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    // new CopyPlugin({
    //     patterns: [{ from: 'src/assets', to: 'assets' }]
    // })
  ],
};
