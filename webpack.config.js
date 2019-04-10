const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry: "./main.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: '/'
  },
  devtool:'inline-source-map',
  devServer:{
      contentBase:'./dist'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  plugins:[
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
          title: 'dxy\'s personal website'
      })
  ]
};
