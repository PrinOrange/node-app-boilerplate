import * as webpack from 'webpack';
import NodemonPlugin from 'nodemon-webpack-plugin';
import path from 'path';
import TerserPlugin from 'terser-webpack-plugin';

export const WebpackDevelopmentConfiguration: webpack.Configuration = {
  entry: './src/index.ts',
  devtool: 'cheap-module-source-map',
  optimization: {
    minimize: false,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
      }),
    ],
  },
  target: 'node',
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, '../build/dev'),
  },
  plugins: [
    new NodemonPlugin({
      delay: 2500,
    }),
  ],
};

export default WebpackDevelopmentConfiguration;
