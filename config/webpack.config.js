const webpack = require("webpack");
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
// const Dotenv = require("dotenv-webpack");
const dotenv = require("dotenv").config({
  path: path.resolve(__dirname, "../.env"),
});

const PORT = process.env.PORT || 3003;
const NODE_ENV = process.env.NODE_ENV || "development";
console.info("PORT", PORT);
console.info("NODE_ENV", NODE_ENV);

module.exports = {
  mode: NODE_ENV,
  entry: "./index.js",
  output: {
    filename: "bundle.[hash].js",
    path: path.resolve(__dirname, "../dist"),
  },
  devtool: NODE_ENV === "development" ? "eval-source-map" : false,
  devServer: {
    host: "localhost",
    port: PORT,
    historyApiFallback: true,
    open: true,
    hot: true,
  },
  resolve: {
    extensions: [".webpack.js", ".web.js", ".js", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.js$|jsx/,
        exclude: /node_modules/,
        use: ["babel-loader"],
        // options: {
        //   presets: ["@babel/preset-env", "@babel/preset-react"],
        // },
      },
      {
        test: /\.s[a|c]ss$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: { modules: true },
          },
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: "file-loader",
        options: {
          name: "[name].[ext]?[hash]",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html",
      favicon: "public/favicon.ico",
    }),
    new webpack.DefinePlugin({
      "process.env": dotenv.parsed,
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};
