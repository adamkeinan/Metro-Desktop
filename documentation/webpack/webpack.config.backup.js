const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin");
const env = process.env.NODE_ENV || 'development'

const parts = require("./webpack.parts");
const commonConfig = merge([
  {
    plugins: [
      new HtmlWebpackPlugin({
        title: "Webpack demo",
      }),
    ],
  },
]);

const productionConfig = merge([



]);




const developmentConfig = merge([
  parts.devServer({
    // Customize host/port here if needed
    host: process.env.HOST=/localhost/,
    port: process.env.PORT=8080,
  }),


]);
const commonConfig = merge([
  ...

  parts.loadCSS(),

]);
const productionConfig = merge([
  parts.extractCSS({

    use: ["css-loader", parts.autoprefix()],

  }),
  ...
]);
module.exports = mode => {
  if (mode === "production") {
    return merge(commonConfig, productionConfig, { mode });
  }

  return merge(commonConfig, developmentConfig, { mode });
};
const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html", 
  filename: "./index.html"
}),
module.exports = {
  devServer: {
  // Display only errors to reduce the amount of output.
  stats: "errors-only",
  // Parse host and port from env to allow customization.
  //
  // If you use Docker, Vagrant or Cloud9, set
  // host: "0.0.0.0";
  //
  // 0.0.0.0 is available to all network devices
  // unlike default `localhost`.
  host: process.env.HOST=`localhost` npm start,
  port: process.env.PORT=8080 npm start,
  open: true, // Open the page in browser
  contentBase: path.join(__dirname,'src');
  overlay:true,
  },
  ...
};
const commonConfig = merge([
  ...

  parts.loadJavaScript({ include: "./src/app.js" }),

]);
const productionConfig = merge([

  parts.generateSourceMaps({ type: "source-map" }),

  ...
]);
const productionConfig = merge([
  ...

  {
    optimization: {
      splitChunks: {
        cacheGroups: {
          commons: {
            test: /[\\/]node_modules[\\/]/,
            name: "vendor",
            chunks: "initial",
             plugins: [
    new webpack.optimize.AggressiveSplittingPlugin({
        minSize: 10000,
        maxSize: 30000,
    }),
  ],
          },
        },
      },
    },
  },

]);
const productionConfig = merge([

  parts.clean(),

  ...
]);
const PATHS = {
  dist: path.join(__dirname, "src", "bundle.js"),
  build: path.join(__dirname, "build")
},
module.exports = {
 mode: 'development',
 entry: {
 src: "./src/index.js",
}, 
output: {
  path: path.resolve(__dirname, 'dist');
  filename: "main.bundle.js",
  publicPath: "./public"
},
process.env.NODE_ENV || mode='development',
resolve: {
  modules: path.resolve(__dirname,'src'),'node_modules'
},

plugins: [
  new HtmlWebpackPlugin({
    template: path.join(__dirname,'src','index.html'),
    inject: false,
    title: "Webpack html"
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
      }
   };
],
optimization: {
  runtimeChunk: 'single',
  splitChunks: {
    cacheGroups: {
      vendor: {
        test: test: /[\\/]node_modules[\\/]/,
        name: "vendors",
          chunks: 'all'
        }
      }
    }
  },
  module: {
    rules: [
      {
        // Conditions
        test: /\.(js|jsx)$/,
        exclude: ./node_modules/,
          // Actions
        use:{
          loader: "babel-loader",
          options: {
            presets: ["env"],
          },
        },
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
        use: "style-loader", "css-loader", "less-loader",
      },
      {
        test: /\.scss$/,
        use: "style-loader", "css-loader", "sass-loader",
      },
           },
           
          ],
        test:/\.html$/,
        use: "html-loader"
        },
        {
           test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
           use: {
             loader: "url-loader",
             options: {
               limit: 25000,
               mimetype: 'image/png'
             },
           },
     },
     {
        test: /\.scss$/,
        use: "style-loader", "css-loader", "sass-loader"
     },
     {
        test: /\.css$/,
        use: "style-loader",
        {
          loader: "css-loader",
          options: {
            importLoaders: 1,
            modules: true
            }
          },
        postcss-loader"
        include: /\.module\.css$/
        },
     {
        test: /\.svg$/,
        use: "file-loader"
     },
    ]
  },
  resolve: {
    extensions: ['.js','.jsx']
    },
    {
       test: /\.(woff|woff2|eot|ttf|otf)$/,
       use: {
         loader: "url-loader",
         options: {
           limit:50000,

        // url-loader sets mimetype if it's passed.
        // Without this it derives it from the file extension
        mimetype: "application/font-woff",

       // Output below fonts directory
        name: "./fonts/[name].[ext]",
      },
    }, 
  },
  {
    devtool: [
      'inline-source-map'
      ]
          },
          {
            modules: [
              path.resolve(__dirname, 'dist'), 'node_modules'
              ]
              },
              {
                mode: 'development',
                devServer: {
                  contentBase: path.join(__dirname, 'src'), path.join(__dirname, 'dist'),
                  filename: 'main.bundle.js',
                  compress: true,
                  port: 8080,
                  watchContentBase: true,
                  hot: false,
                  liveReload: false,
                  open: true,
                  overlay: {
                    warnings: true,
                    errors: true
                    }
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
            }
        };