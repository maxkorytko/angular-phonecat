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
    path: path.resolve(__dirname, 'public'),
  },
  plugins: [
	  new CopyPlugin({
      patterns: [
        { from: "app/phones", to: "phones" },
        { from: "app/img", to: "img" },
        { from: "app/**.css", to: "[name].[ext]" },
        { from: "app/lib/bootstrap", to: "lib/bootstrap" },
        { from: "app/lib/jquery", to: "lib/jquery" },
      ],
    }),
	  new HtmlWebpackPlugin({
	    // Load a custom template (lodash by default)
	    template: 'app/index.html'
	  })
	]
};