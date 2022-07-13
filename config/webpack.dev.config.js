const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

const WebpackDevelopmentConfiguration = {
  entry: "./src/index.ts",
  devtool: "cheap-module-source-map",
  optimization: {
    minimize: false,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
  target: "node",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "../build"),
  },
};

module.exports = WebpackDevelopmentConfiguration;
