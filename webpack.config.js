const path = require('path');
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	mode: "development",
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './app',
  },
  entry: './app/index.js',
  output: {
    filename: 'main.bundle.js',
    path: path.resolve(__dirname, 'www'),
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        exclude: [/node_modules/],
        use: [
          {
            loader: 'html-loader',
            options: {
              esModule: false,
              attributes: false,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { importLoaders: 1 }
          },
        ],
        sideEffects: true,
      },
    ],
  },
  plugins: [
	  new CopyPlugin({
      patterns: [
        { from: "app/phones", to: "phones" },
        { from: "app/img", to: "img" },
        { from: "app/**.css", to: "[name].[ext]" },
        { from: "app/lib/bootstrap", to: "lib/bootstrap" },
        { from: "app/lib/jquery.js", to: "lib/jquery.js" },
      ],
    }),
	  new HtmlWebpackPlugin({
	    // Load a custom template (lodash by default)
	    template: 'app/index.html'
	  })
	]
};