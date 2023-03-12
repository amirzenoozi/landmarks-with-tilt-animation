const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');

const PATHS = {
  root: path.resolve(__dirname, '..'),
  nodeModules: path.resolve(__dirname, './node_modules'),
  src: path.resolve(__dirname, './src'),
  build: path.resolve(__dirname, './dist'),
  public: path.resolve(__dirname, './public'),
};

module.exports = {
  entry: './src/index.ts',
  mode: 'development',
  watch: true,
  devtool: 'source-map',
  output: {
    filename: './main.js',
    path: path.join(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  devServer: {
    static: [path.join(__dirname, "public"), path.join(__dirname, "dist")],
    compress: true,
    port: 8000,
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(s(a|c)ss)$/,
        use: ['style-loader','css-loader', 'sass-loader']
      },
      {
        test: /\.(svg|jpg|jpeg|png|gif|svg|pdf|woff|woff2|eot|ttf|ico)$/,
        loader: 'file-loader',
        options: {
            name: '[path][name].[ext]'
        }
      }
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
        title: 'our project', 
        template: './index.html' }) 
   ],
};