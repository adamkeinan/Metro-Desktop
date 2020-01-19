const path = require('path');
const Webpack = require('Webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer');

module.export = {
  mode: process.env.NODE_ENV = 'development',
  devtool: env.production || development ? 'source-maps' : 'eval',
  entry: './index.js',
  build: path.join(__dirname, 'build'),
  filename: "main.build.js",
  output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
  },
  publicPath: path.resolve('./'),
  devServer: {
      inline: true,
      contentBase: './public',
      // historyApiFallback: true,
      port: 3000
  },
  resolve: {
      extensions: ['.wasm', '.mjs', '.js', '.jsx', '.json'],
      mainFields: ['browser', 'module', 'main', 'node_modules'],
      mainFiles: ['index']
  },
  sourceMapFilename: 'sourcemap.js.map',
  cache: true,
  parallel: true,
  'source-maps': true,
  performance: {
      hints: false
  },
  output: {
      pathinfo: true
  },
  entry: path.resolve(__dirname, 'src'),
  build: path.resolve(__dirname, 'build'),
  output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'photon-opt.js',
      publicPath: path.resolve(__dirname, 'assets')
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
        },
    },
    noEmitOnErrors: false,
    checkWasmTypes: false,
    minimize: true,
    removeAvailableModules: false
    },
  plugins: [
    new BundleAnalyzerPlugin(),
    new MiniCssExtractPlugin({
    // Options similar to the same options in webpackOptions.output
    // all options are optional
    filename: '[name].css',
    chunkFilename: '[id].css',
    ignoreOrder: false, // Enable to remove warnings about conflicting order
    })
    optimization: {
    minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    },
    new ExtractTextPlugin('styles.css'),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.optimize\.css$/g,
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
        preset: ['default', { discardComments: { removeAll: true } }]
      },
      canPrint: true
    }),
    new DuplicatePackageCheckerPlugin({
      // Also show module that is requiring each duplicate package (default: false)
      verbose: false,
      // Emit errors instead of warnings (default: false)
      emitError: false,
      // Show help message if duplicate packages are found (default: true)
      showHelp: true,
      // Warn also if major versions differ (default: true)
      strict: true,
      exclude(instance) {
        return instance.name === "fbjs";
      },
    }),
    new HtmlWebpackPlugin({ title: 'print_test' }),
    new CleanWebpackPlugin()
],
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
                    // publicPath is the relative path of the resource to the context
                    // e.g. for ./css/admin/main.css the publicPath will be ../../
                    // while for ./css/main.css the publicPath will be ../
                    return path.relative(path.dirname(resourcePath), context) + '/';
                },
            },
        },
        test: /\.js|jsx$/,
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
                    },
                ],
                target: 'node',
                externals: {
                    fs: 'fs',
                    jquery: 'jquery',
                    path: 'path'
                },
            },
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
            options: {
                plugins: () => ([require('autoprefixer'), require('precss')])
            }
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
            },
        },
        test: /\.(jpg|gif|svg)$/,
        use: {
            loader: ['raw-loader'],
            options: {
                limit: 20000,
                mimetype: 'image/png'
            },
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
            },
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
                            priority: -10,
                        },
                        default: {
                            minChunks: 2,
                            priority: -20,
                            reuseExistingChunk: true
                        }
                    }
                }
            }
        }









































        },
    }
}


