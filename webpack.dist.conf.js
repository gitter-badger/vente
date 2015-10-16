/*
 * Webpack distribution configuration
 *
 * This file is set up for serving the distribution version. It will be compiled to dist/ by default
 */

'use strict';

var webpack = require('webpack');

module.exports = {

  output: {
    path: 'dist/',
    filename: 'app.js'
  },

  debug: false,
  devtool: false,
  entry: [
    './src/main.js'
    ],

  stats: {
    colors: true,
    reasons: false
  },

  eslint: {
    configFile: '.eslintrc'
  },

  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({"minify": true}),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin()
  ],

  resolve: {
    extensions: ['', '.js'],
    alias: {
      'styles': __dirname + '/src/styles',
      'mixins': __dirname + '/src/mixins',
      'components': __dirname + '/src/components/',
      'stores': __dirname + '/src/stores/',
      'actions': __dirname + '/src/actions/'
    }
  },
    
  module: {
    preLoaders: [{
      test: /\.(js)$/,
      exclude: /node_modules|lib/,
      loader: 'eslint-loader'
    }],
      
    loaders: [{
      test: /\.(js)$/,
      exclude: /node_modules/,
      loader: 'react-hot!babel-loader'
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, {
      test: /\.(json)$/,
      exclude: /node_modules/,
      loader: 'json-loader'
    }, { 
      test: /\.(png|jpg|woff|woff2|eot|ttf|svg)$/, 
      loader: 'url-loader?limit=100000' 
    },
    {
      test: /\.html/, 
      loader: 'file?name=[name].[ext]' 
    }]
  }
};