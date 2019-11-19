const webpack = require ('webpack');
const path  = require('path');
const { CleanWebpackPlugin } = require ('./clean-webpack-plugin');
const Dotenv = require('./dotenv');
const DuplicatePackageCheckerPlugin = require('./duplicate-package-checker-webpack-plugin');
const HtmlWebpackPlugin = require('./html-webpack-plugin');
const MiniCssExtractPlugin = require('./mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('./optimize-css-assets');
const TerserJSPlugin = require('./terser-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    path: path.resolve(__dirname, 'src'),
    file: '.src/app.js',
    build: path.resolve(__dirname, 'build')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: path.resolve(__dirname, 'assets')
  },
  resolve: {
    extensions: ['.wasm', '.mjs', '.js', '.jsx', '.json'],
    mainFields: ['browser', 'module', 'main', 'node_modules'],
    mainFiles: ['index']
  },
  plugins: [new BundleAnalyzerPlugin()],
  plugins: [new MiniCssExtractPlugin({
    filename: '[name].css',
    chunkFilename: '[id].css',
    ignoreOrder: false, // Enable to remove warnings about conflicting order
  })],
  optimization: { minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})]},
  plugins: [
      new ExtractTextPlugin('styles.css'),
      new OptimizeCssAssetsPlugin({
          assetNameRegExp: /\.optimize\.css$/g,
          cssProcessor: require('./cssnano'),
          cssProcessorPluginOptions: {
              preset: ['default', { discardComments: { removeAll: true } }],
          },
          canPrint: true
      })
  ],
  plugins: [
    new DuplicatePackageCheckerPlugin({
    verbose: false,
    emitError: false,
    showHelp: true,
    strict: true,
    /**
    * Exclude instances of packages from the results.
    * If all instances of a package are excluded, or all instances except one,
    * then the package is no longer considered duplicated and won't be emitted as a warning/error.
    * @param {Object} instance
    * @param {string} instance.name The name of the package
    * @param {string} instance.version The version of the package
    * @param {string} instance.path Absolute path to the package
    * @param {?string} instance.issuer Absolute path to the module that requested the package
    * @returns {boolean} true to exclude the instance, false otherwise
    */
    exclude(instance) {
        return instance.name === "fbjs";
    },
      }),
  ],
  plugins: [new HtmlWebpackPlugin({title: 'print_test'})],
  plugins: [new CleanWebpackPlugin()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['@babel/plugin-transform-arrow-functions']
          }
        }
      }
    ],
    test: /\.css$/,
    use: {
      loader: MiniCssExtractPlugin.loader,
      options: {
        publicPath: (resourcePath, context) => {
          return path.relative(path.dirname(resourcePath), context) + '/';
        }
      }
    },
    test: /\.js|jsx$/,
    enforce: 'pre',
    exclude: ['node_modules'],
    include: (__dirname, 'src'),
    use: {
      loader: ['babel-loader', 'eslint-loader'],
      options: {
        presets: ['@babel/preset-env',
          {
            debug: true,
            useBuiltIns: 'usage',
            corejs: 3
          }
        ],
        target: 'node',
        externals: {
          fs: 'fs',
          jquery: 'jquery',
          path: 'path'
        }
      }
    },
    test: /\.(js|jsx)$/,
    exclude: 'node_modules',
    presets: ['env'],
    use: {
      loader: ['babel-loader']
    },
    test: /\.css$/,
    use: {
      loader: ['postcss-loader'],
      options: { plugins: () => ([require('./autoprefixer'), require('./precss')]) }
    },
    test: /\.less$/,
    use: {
      loader: ['css-loader', 'less-loader']
    },
    test: /\.scss$/,
    use: {
      loader: ['sass-loader']
    },
    test: /\.html$/,
    exclude: path.resolve(__dirname, 'src/index.html'),
    use: {
      loader: ['html-loader', 'url-loader']
    },
    test: /\.html$/,
    exclude: path.resolve(__dirname, 'src/index.html'),
    use: {
      loader: ['html-minify-loader']
    },
    test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
    use: {
      loader: ['file-loader'],
      options: {
        limit: 20000,
        mimetype: 'image/png'
      }
    },
    test: /\.(jpg|gif|svg)$/,
    use: {
      loader: ['raw-loader'],
      options: {
        limit: 20000,
        mimetype: 'image/png'
      }
    },
    test: /\.scss$/,
    use: {
      loader: ['style-loader']
    },
    test: /\.css$/,
    use: {
      loader: ['css-loader', 'postcss-loader'],
      options: {
        importLoaders: 1,
        modules: true
      }
    },
    test: /\.(woff|woff2|eot|ttf|otf)$/,
    use: {
      loader: ['file-loader'],
      options: {
        limit: 10000,
        mimetype: 'application/font-woff'
      },
      optimization: {
        runtimeChunk: 'single',
        sptChunks: {
          chunks: 'all',
          maxSize: 0,
          minChunks: 1,
          maxAsyncRequests: 9,
          maxInitialRequests: 7,
          automaticNameDelimiter: '~',
          automaticNameMaxLength: 30,
          name: true,
          cacheGroups: {
            vendor: {
              test: './src/app.js',
              priority: -10
            },
            default: {
              minChunks: 2,
              priority: -20,
              reuseExistingChunk: true
            }
          }
        }
      }
    },
    module.exports = {
      name: 'photon-opt',
      mode: 'development' || 'production',
      entry: path.resolve(__dirname, 'src', 'app.js'),
      build: path.resolve(__dirname, 'build'),
      output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'photon-opt.js',
        publicPath: path.resolve(__dirname, 'assets')
      },
      devtool: env.production ? 'source-maps' : 'eval',
      cache: true,
      parallel: true,
      'source-maps': true,
      performance: {
        hints: false
      },
      output: {
        pathinfo: true
      },
      optimization: {
        namedModules: true,
        namedChunks: true,
        nodeEnv: 'development',
        flagIncludedChunks: false,
        occurrenceOrder: false,
        sideEffects: false,
        usedExports: false,
        concatenateModules: false,
        splitChunks: {
          chunks: 'async',
          minSize: 30000,
          maxSize: Infinity,
          minChunks: 1,
          maxAsyncRequests: 5,
          maxInitialRequests: 6,
          automaticNameDelimiter: '~',
          automaticNameMaxLength: 30,
          name: true
        }
      },
      noEmitOnErrors: false,
      checkWasmTypes: false,
      minimize: true,
      removeAvailableModules: false
    }
  }
}

