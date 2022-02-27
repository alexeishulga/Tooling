const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require("webpack");


module.exports = {
    entry: {
        app: './src/index.js',
        hot: 'webpack/hot/dev-server.js',
        client: 'webpack-dev-server/client/index.js?hot=true&live-reload=true',
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
       hot: false,
       client: false,
      },
      plugins: [
        new HtmlWebpackPlugin({
          title: 'Hot Module Replacement',
        }),
       // Plugin for hot module replacement
       new webpack.HotModuleReplacementPlugin(),
      ],
      output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
      },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
        	'file-loader',
        ],
      },
   	],
  },
}; 