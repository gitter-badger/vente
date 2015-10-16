/*
 * Webpack development server configuration
 *
 * This file is set up for serving the webpack-dev-server, which will watch for changes and recompile as required if
 * the subfolder /webpack-dev-server/ is visited. Visiting the root will not automatically reload.
 */
'use strict';
var webpack = require('webpack');

module.exports = {

  output: {
    path: 'dist/',
    filename: 'app.js'
  },

  cache: true,
  debug: true,
  devtool: false,
  entry: [
      './src/main.js'
  ],

  eslint: {
    configFile: '.eslintrc'
  },

  stats: {
    colors: true,
    reasons: true
  },

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
      exclude: /node_modules/,
      loader: 'eslint-loader'
    }],
    loaders: [{
      test: /\.(js)$/,
      exclude: /node_modules/,
      loader: 'react-hot!babel-loader'
    },
    {
      test: /\.(json)$/,
      exclude: /node_modules/,
      loader: 'json-loader'
    },
    {
      test: /\.css$/,
      loader: 'style-loader!css-loader'
    }, { 
      test: /\.(png|jpg|woff|woff2|eot|ttf|svg)$/, 
      loader: 'url-loader?limit=100000' 
    }]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
