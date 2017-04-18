var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'src');
// var APP_DIR = path.resolve(__dirname, 'src/client/app');

var config = {
  entry: './src/index.js',
  output: {
    path: BUILD_DIR,
    filename: './bundle.js'
  },
  watch:true,
  module: {
  	loaders: [
  		{
  			test: /jsx?$/,
  			loader: 'babel-loader',
  			exclude: /node_modules/,
  			query: {
  				presets: ['es2015','react']
  			}
  		}]
  }
};

module.exports = config;
