const webpack = require('webpack');	
const path = require('path');	
const glob = require('glob');	
const fs = require('fs');	
const dotenv = require('dotenv');	
const HtmlWebpackPlugin = require('html-webpack-plugin');	
const HtmlWebPackPlugin = require('html-webpack-plugin');	
const MiniCssExtractPlugin = require('mini-css-extract-plugin');	
const PurifyCSSPlugin = require('purifycss-webpack');	
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');	
const bootStrapEntryPoints = require('./webpack.bootstrap.config');	
const { CleanWebpackPlugin } = require('clean-webpack-plugin');	
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin');	

 // We'll refer to our source and dist paths frequently, so let's store them here	
const PATH_APP = path.resolve(__dirname, './portal-app/src');	
const PATH_DIST = path.resolve(__dirname, './dist');
const PATH_BUILD = path.resolve(__dirname, './build');
const PATH_SOURCE= path.resolve(__dirname, './src');
const PATH_TESTS = path.resolve(__dirname, './tests');

// If we export a function, it will be passed two parameters, the first	
// of which is the webpack command line environment option `--env`.	
// `webpack --env.production` sets env.production = true	
// `webpack --env.a = b` sets env.a = 'b'	
// https://webpack.js.org/configuration/configuration-types#exporting-a-function
const {environment} = env;	
const isProduction = environment === 'production';	
const isDevelopment = environment === 'development';	

if (process.env.NODE_ENV = 'production') then((env.webpack) = 'production');	
if (process.env.NODE_ENV = 'development') then((env.webpack) = 'development');  	
    // Tell Webpack to do some optimizations for our environment (development	
    // or production). Webpack will enable certain plugins and set	
    // `process.env.NODE_ENV` according to the environment we specify.	
    // https://webpack.js.org/configuration/mode		
module.exports = env => { 
    mode: process.env.NODE_ENV || 'development'
    entry: path.resolve(__dirname, 'src', 'index.js')
    build: path.resolve(__dirname, 'build')
    filename: 'app.bundle.js'
    output: path.join(__dirname, 'dist'),
     // Configuration options for Webpack DevServer, an Express web server that	
    // aids with development. It provides live reloading out of the box and can	
    // be configured to do a lot more.	
    devServer: {	
      devtool: ['inline-source-map'],	
      entry: Path.resolve(__dirname 'src/app');
      vendor: [	
        'react',	
        'react-dom'	
        ],	
      app: './src/metroapp.js',	
      bootstrap: bootstrapconfig		
      // The dev server will serve content from this directory.	
      contentBase: PATH_DIST,	

       // Specify a host. (Defaults to 'localhost'.)	
      host: 'localhost',	

       // Specify a port number on which to listen for requests.	
      port: 8080,	

       // When using the HTML5 History API (you'll probably do this with React	
      // later), index.html should be served in place of 404 responses.	
      historyApiFallback: true,	

       // Show a full-screen overlay in the browser when there are compiler	
      // errors or warnings.	
      overlay: {	
        errors: true,	
        warnings: true,	
      },	
    // The point or points to enter the application. This is where Webpack will	
    // start. We generally have one entry point per HTML page. For single-page	
    // applications, this means one entry point. For traditional multi-page apps,	
    // we may have multiple entry points.	
    // https://webpack.js.org/concepts#entry	
  // Tell Webpack where to emit the bundles it creates and how to name them.	
  // https://webpack.js.org/concepts#output	
  // https://webpack.js.org/configuration/output#output-filename	
      output: {	
      path: PATH_DIST,	
      filename: 'js/[name].[hash].js',
       },
    },
},	
   // Determine how the different types of modules will be treated.	
  // https://webpack.js.org/configuration/module	
  // https://webpack.js.org/concepts#loaders	
  module: {	
    rules: [	
        {	
          test: /\.js|jsx$/, // Apply this rule to files ending in .js	
          exclude: ['node_modules'], // Don't apply to files residing in node_modules	
          use: { // Use the following loader and options	
            loader: ['babel-loader', 'eslint-loader'],	
            // We can pass options to both babel-loader and Babel. This option object	
            // will replace babel.config.js	
            options: {	
              presets: [	
                ['@babel/preset-env', {	
                  debug: true, // Output the targets/plugins used when compiling	

                   // Configure how @babel/preset-env handles polyfills from core-js.	
                  // https://babeljs.io/docs/en/babel-preset-env	
                  useBuiltIns: 'usage',	

                   // Specify the core-js version. Must match the version in package.json	
                  corejs: 3,	

                   // Specify which environments we support/target for our project.	
                  // (We have chosen to specify targets in .browserslistrc, so there	
                  // is no need to do it here.)	
                  // targets: "",	
                }],	

                 // The react preset includes several plugins that are required to write	
                // a React app. For example, it transforms JSX:	
                // <div> -> React.createElement('div')	
                '@babel/preset-react',	
              ],	
            },	
          }	
        }	
      ],	
    },	

     plugins: [	
      // This plugin will generate an HTML5 file that imports all our Webpack	
      // bundles using <script> tags. The file will be placed in `output.path`.	
      // https://github.com/jantimon/html-webpack-plugin	
      new HtmlWebpackPlugin({	
        template: path.join(PATH_SOURCE, './index.html')	
      }),	

       // This plugin will delete all files inside `output.path` (the dist directory),	
      // but the directory itself will be kept.	
      // https://github.com/johnagan/clean-webpack-plugin	
      new CleanWebpackPlugin(),	
    ],	
  };	
};