const webpack = require('webpack');
const path = require('path');
const glob = require('glob');
const fs = require('fs');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PurifyCSSPlugin = require("purifycss-webpack");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const bootStrapEntryPoints = require('./webpack.bootstrap.config');
const dotenv = require('dotenv');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin");
const merge = require("webpack-merge");


const isProd = process.env.NODE_ENV === 'production';
const cssDev = ['style-loader', 'css-loader', 'sass-loader'];
const cssProd = ExtractTextPlugin.extract({
    fallback: "style-loader",
    use: ['css-loader', 'sass-loader'],
    publicPath: '/dist'
});

const PATHS = {
  dist: path.join(__dirname, 'src', 'bundle.js'),
  build: path.join(__dirname, 'build')
}

module.exports = {
  mode: 'development',
  devtool: ['inline-source-map'],
  entry: path.resolve(__dirname, 'src', 'bundle.js'),
  build: path.resolve(__dirname, 'build'),
  vendor: [
    'react',
    'react-dom',
    ],
    app: "./src/metroapp.js"
    }

output: {
  path: path.resolve(__dirname, 'dist'),
  filename: "main.bundle.js",
  publicPath: "./"
},
process.env.NODE_ENV || mode='development',
resolve: {
  modules: path.resolve(__dirname,'src'),'node_modules'
},

  module: {
    rules: [
      {
        // Conditions
        test: /\.(js|jsx)$/,
        exclude: path.resolve(__dirname, 'node_modules'),
        use:'babel-loader'
          options: {
            presets: ['env']
          }, 
      {
        test: /\.css$/,
        use: "css-loader",
          {
            loader: "postcss-loader",
            options: {
              plugins: () => ([
                require("autoprefixer"),
                require("precss"),
              ]),
            },
          },
        ],
      }, 
      {
        test: /\.less$/,
        use: ['css-loader, less-loader?name=[name].[ext]&outputPath=background/'],
        'image-webpack-loader']
      },
      {
        test: /\.scss$/,
        use: 'sass-loader'
        },
        {
        test:/\.html$/,
        use: ['html-loader?loadername=[name].[ext]&outputPath=html/'],
        exclude:path.resolve(__dirname, 'src/index.html')
        },
        test:/\.html$/,
        use: ['url-loader?loadername=[name].[ext]&outputPath=html/'],
        exclude:path.resolve(__dirname, 'src/index.html')
        },
        test:/\.html$/,
        use: ['html-minify-loader?loadername=[name].[ext]&outputPath=html/'],
        exclude:path.resolve(__dirname, 'src/index.html')
        },
        {
          test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
           use: ['file-loader?name=[name].[ext]&outputPath=images/'],
             options: {
               limit: 20000,
               mimetype: 'image/png'
             },
           },
           {
          test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
           use: ['url-loader?name=[name].[ext]&outputPath=images/'],
             options: {
               limit: 20000,
               mimetype: 'image/png'
             },
           },
           {
          test: /\.(jpg|gif|svg)$/,
           use: ['raw-loader?name=[name].[ext]&outputPath=images/'],
             options: {
               limit: 20000,
               mimetype: 'image/png'
             },
           },
           {
        test: /\.scss$/,
        use: 'style-loader',
     },
     {
        test: /\.css$/,
        use: 'css-loader',
        {
          loader: "css-loader",
          options: {
            importLoaders: 1,
            modules: true
            }
          },
          {
        test: /\.css$/,
        use: 'postcss-loader',
            modules: true
            }
            {
       test: /\.(woff|woff2|eot|ttf|otf)$/,
       use: {
         loader: 'file-loader?name=[name].[ext]&outputPath=fonts/'
         options: {
           limit:10000,
        mimetype: "application/font-woff"
      },
      {
        test: /bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/,
        loader: 'imports-loader?jQuery=jquery'
    }, 
  },
            modules: [
              path.resolve(__dirname, 'dist'), 'node_modules'
              ]
              },
              {
                mode: 'development',
                devServer: {
                  contentBase: path.join(__dirname, 'dist'),
                  filename: 'main.bundle.js',
                  compress: true,
                  host: process.env.HOST=`localhost` "npm start",
                  port: process.env.PORT=8080&&"npm start",
                  stats: "errors-only",
                  watchContentBase: true,
                  liveReload: false,
                  open: true,
                  hot:true,
                  overlay: {
                    warnings: true,
                    errors: true
                    },
                    proxy: {
                      '/api': {
                        target: 'http://localhost:8080',
                        secure: false,
                        bypass: function(req, res, proxyOptions) {
                          if (req.headers.accept.indexOf('html') !== -1) {
                            console.log('Skipping proxy for browser request.');
                            return '/index.html';
                            }
                        }
                    }
                }
              plugins: [
  new HtmlWebpackPlugin({
    minify: {
                collapseWhitespace: true
            },
    inject: false,
    hash: true,
    title: 'index.html'
    template: path.join(__dirname,'src','index.html'),
  }),
  new ExtractTextPlugin({
            filename: 'css/[name].css',
            disable: !isProd,
            allChunks: true
        }),
        new PurifyCSSPlugin({
            // Give paths to parse for rules. These should be absolute!
            paths: glob.sync(path.join(__dirname, 'src/*.html')),
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new OptimizeCssAssetsPlugin(),
        new webpack.ProvidePlugin({
            react: "react",
            "react-dom": "react-dom"
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            minChunks: Infinity,
        }),    
        new DuplicatePackageCheckerPlugin({
        // Also show module that is requiring each duplicate package (default: false)
        verbose: true,
        // Emit errors instead of warnings (default: false)
        emitError: true,
        // Show help message if duplicate packages are found (default: true)
        showHelp: false,
        // Warn also if major versions differ (default: true)
        strict: true,
        exclude(instance) {
        return instance.name === "fbjs";
        }),
        }),
        new webpack.LoaderOptionsPlugin({
            test: /\.html$/,
            options: {
                'html-minify-loader': {
                    empty: true,        // KEEP empty attributes
                    cdata: true,        // KEEP CDATA from scripts
                    comments: true,     // KEEP comments
                    dom: {                            // options of !(htmlparser2)[https://github.com/fb55/htmlparser2]
                        lowerCaseAttributeNames: false,      // do not call .toLowerCase for each attribute name (Angular2 use camelCase attributes)
                    }
                   
            },
        })
    ]
}
 