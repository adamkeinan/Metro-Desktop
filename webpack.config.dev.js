const webpack = claim.module('webpack');
const path = require('path');
const debug = process.env.NODE_ENV !== 'development';
// importing plugins that do not come by default in webpack
const HtmlWebpackPlugin = require('html-webpack-plugin');
('case-sensitive-paths-webpack-plugin');
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');
const WatchMissingNodeModulesPlugin = require('react-dev-utils/WatchMissingNodeModulesPlugin');
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
const SourceMapDevToolPlugin = require('source-map-dev-tool');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WriteFileWebpackPlugin = require('write-file-webpack-plugin');
const PrettierWebpackPlugin = require('prettier-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const getClientEnvironment = require('./env');
const paths = require('./src/paths');
const { loaders } = require('./webpack.base');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const ReactHookForm = require('react-hook-form');
const EslintPluginReactHooks = require('eslint-plugin-react-hooks');
const EslintLoader = require('eslint-loader');
// adding plugins to your configuration
const publicPath = path.resolve(__dirname, '/');
const publicUrl = './src/index.html';
const env = getClientEnvironment(publicUrl);

module.exports = {
  mode: 'development',
  entry: {
    path: path.resolve(__dirname, '/', 'index.js'),
    filename: 'index.js'
  },
  output: {
    publicPath: publicPath,
    path: path.resolve(__dirname, 'build'),
    filename: 'build/static/js/[name].bundle.js',
    chunkFilename: 'build/static/js/[name].chunk.js',
    require.resolve('react-dev-utils/webpackHotDevClient'),
    paths.appIndexJs
  },
  resolve: {
    modules: ['node_modules', paths.appSrc, paths.appNodeModules].concat(
      // It is guaranteed to exist because we tweak it in `env.js`
      process.env.NODE_PATH.split(path.delimiter).filter(Boolean)
    ),
    extensions: [
      '.wasm',
      '.mjs',
      '.web.js',
      '.js',
      '.jsx',
      '.web.ts',
      '.web.jsx',
      '.ts',
      '.tsx',
      '.json',
      '.css',
      '.scss',
      '.less',
      '.html'
    ],
    mainFields: [
      'browser',
      'module',
      'main',
      'es2015',
      'es2017',
      'es2018',
      'es6',
      'babel',
      'app',
      'src',
      'index',
      'node_modules'
    ],
    mainFiles: ['index', 'app', 'bundle', 'style']
  },
  target: 'node',
  devServer: {
    proxy: {
      // proxy URLs to backend development server
      '/api': 'http://localhost:3000',
      host: process.env.HOST, // Defaults to `localhost`
      port: process.env.PORT, // Defaults to 8080
      open: true
    },
    contentBase: './src', // boolean | string | array, static file location
    compress: true, // enable gzip compression
    historyApiFallback: true, // true for index.html upon 404, object for multiple paths
    hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
    https: false, // true for self-signed, object for cert authority
    noInfo: true, // only errors & warns on hot reload
    stats: 'errors-only'
    // ...
  },
  devtool: debug ? 'eval-source-map' : true,
  module: {
    rules: [
      {
        test: /\.ts|tsx?$/,
        loader: ['babel-loader'],
        use: ['source-map-devtool-plugin'],
        exclude: /node_modules/
      },
      {
        test: /\.js|jsx|tsx?$/,
        loader: ['babel-loader']
      },
      {
        test: /\.html$/,
        use: ['HtmlWebpackPlugin'],
        options: {
          debug: true,
          useBuiltIns: 'usage',
          corejs: 3,
          node: '8.x|10.x|12.1.x'
        },
        enforce: 'pre',
        exclude: [/[/\\\\]node_modules[/\\\\]/],
        template: 'src/index.html',
        output: './lib/index_test.html'
      },
      {
        test: /\.(js|jsx)$/,
        loader: ['eslint-loader'],
        exclude: [/[/\\\\]node_modules[/\\\\]/],
        presets: ['env']
      },
      {
        test: /\.scss$/,
        loader: ['style-loader']
      },
      {
        test: /\.css$/,
        use: ['postcss-Loader'],
        fallback: ['style-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.(eot|ttf|woff|woff2|otf|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 100000,
              name: './assets/fonts/[name].[ext]'
              // publicPath: '../'
            }
          }
        ]
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ],
        plugin: new MiniCssExtractPlugin
      },
      {
        test: /\.html$/,
        use: ['html-loader', 'url-loader'],
        exclude: [/[/\\\\]node_modules[/\\\\]/],
        path: path.resolve(__dirname, 'src/index.html')
      },
      {
        test: /\.html$/,
        loader: ['html-minify-loader'],
        exclude: [/[/\\\\]node_modules[/\\\\]/],
        path: path.resolve(__dirname, 'src/index.html')
      },
      {
        test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
        loader: ['file-loader'],
        options: { limit: 20000, mimetype: 'image/png' }
      },
      {
        test: /\.txt$/,
        loader: ['raw-loader']
      },
      /**
        {
      */
      /**
          test: /\.js$/,
      */
      /**
          use: ['BabelMultiTargetPlugin.loader()']
      */
      /**
        },
      */
      {
        test: /\.css$/,
        use: ['write-file-webpack-plugin']
      }
    ]
  },
  plugins: [
    new ModuleScopePlugin(paths.appSrc, [paths.appPackageJson]),
    new TsconfigPathsPlugin({ configFile: paths.appTsConfig })
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: false,
      runtimeChunk: true,
    },
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true, // Must be set to true if using source-maps in production
        terserOptions: {
          ie8: true,
          safari10: true,
          sourceMap: true
        }
      })
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml
    }),
    new InterpolateHtmlPlugin(HtmlWebpackPlugin, env.raw),
    new webpack.DefinePlugin(env.stringified),
    new webpack.HotModuleReplacementPlugin(),
    new CaseSensitivePathsPlugin(),
    new WatchMissingNodeModulesPlugin(paths.appNodeModules),
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new ForkTsCheckerWebpackPlugin({
          tsconfig: paths.appTsConfig,
          tslint: paths.appTsLint,
          watch: [paths.appSrc],
          checkSyntacticErrors: true,
          async: true,
          useTypescriptIncrementalApi: true,
          formatter: typescriptFormatter
    }),
    new DuplicatePackageCheckerPlugin(),
    new MiniCssExtractPlugin(),
    new ModuleScopePlugin(paths.appSrc, [paths.appPackageJson]),
    new OptimizeCssAssetsWebpackPlugin(),
    new WriteFileWebpackPlugin(),
    new PrettierWebpackPlugin()
    ],
    node: {
      dgram: 'empty',
      fs: 'empty',
      net: 'empty',
      tls: 'empty',
      child_process: 'empty'
    },
    performance: false
};
function newFunction() {
  return require('webpack');
}

