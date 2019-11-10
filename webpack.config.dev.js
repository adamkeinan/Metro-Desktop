const webpack = require('webpack');
const path = require('path');
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin');
const HtmlWebpackPlugin = new HtmlWebpackPluginWebpackPlugin({
  template: 'src/index.html',
  filename: './index.html'
});
const extractTextPlugin = require('extract-text-webpack-plugin');
const SourceMapWebpackPlugin = require('source-map-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin');
const BabelMultiTargetPlugin = require('webpack-babel-multi-target-plugin')
  .BabelMultiTargetPlugin;
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HotModuleReplacementPlugin = require('hot-module-replacement-plugin');
const WriteFileWebpackPlugin = require('write-file-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    path: path.resolve(__dirname, 'src'),
    app: '.src/app.ts',
    build: path.resolve(__dirname, 'build')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: path.resolve(__dirname, '/assets/')
  },
  resolve: {
    modules: ['node_modules', path.resolve(__dirname, 'app')],
    extensions: [
      '.wasm',
      '.mjs',
      '.js',
      '.jsx',
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
  devtool: 'source-map',
  target: 'node',
  devServer: {
    proxy: {
      // proxy URLs to backend development server
      '/api': 'http://localhost:3000',
      host: process.env.HOST, // Defaults to `localhost`
      port: process.env.PORT, // Defaults to 8080
      open: true
    },
    contentBase: path.resolve(__dirname, 'assets'), // boolean | string | array, static file location
    compress: true, // enable gzip compression
    historyApiFallback: true, // true for index.html upon 404, object for multiple paths
    hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
    https: false, // true for self-signed, object for cert authority
    noInfo: true, // only errors & warns on hot reload
    stats: 'errors-only'
    // ...
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        sourceMap: true
      })
    ]
  },
  module: {
    rules: [
      {
        test: /\.ts|tsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.ts|tsx?$/,
        loader: ['ts-loader']
      },
      {
        test: /\.js|jsx$/,
        presets: ['@babel/preset-env'],
        loader: ['source-map-loader'],
        options: {
          debug: true,
          useBuiltIns: 'usage',
          corejs: 3,
          node: '8.x|9.x|10.x'
        },
        enforce: 'pre',
        exclude: [/[/\\\\]node_modules[/\\\\]/],
        include: (__dirname, 'src')
      },
      {
        test: /\.(js|jsx)$/,
        loader: ['babel-loader'],
        exclude: [/[/\\\\]node_modules[/\\\\]/],
        presets: ['env']
      },
      { test: /\.scss$/, loader: ['style-loader'] },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: ['style-loader'],
          use: ['css-loader']
        })
      },
      { test: /\.less$/, use: ['css-loader', 'less-loader'] },
      { test: /\.scss$/, loader: ['sass-loader'] },
      { test: /\.css$/, loader: ['postcss-loader'] },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development'
            }
          },
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
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
      {
        test: /\.js$/,
        use: ['BabelMultiTargetPlugin.loader()']
      },
      {
        test: /\.css$/,
        use: ['write-file-webpack-plugin']
      }
    ]
  },
  plugins: [
    new DuplicatePackageCheckerPlugin(),
    new HtmlWebpackPlugin(),
    new SourceMapWebpackPlugin(),
    new extractTextPlugin('styles.css'),
    new MiniCssExtractPlugin(),
    new TerserJSPlugin(),
    new ForkTsCheckerWebpackPlugin(),
    new BabelMultiTargetPlugin(),
    new OptimizeCssAssetsWebpackPlugin(),
    new CleanWebpackPlugin(),
    new HotModuleReplacementPlugin(),
    new WriteFileWebpackPlugin()
  ]
};
