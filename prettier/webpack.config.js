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


module.exports = {
  mode: "development",
  devtool: ['inline-source-map'],
  entry: path.resolve(__dirname, 'src', 'index.js'),
  build: path.resolve(__dirname, 'build'),
  vendor: ['react', 'react-dom'],
  app: "./src/metroapp.js",
  },
  output: [
    path.dir.join(__dirname, 'dist', 'bundle.js'),
    filename: "[name].bundle.js",
      publicPath: "./"
    ],
    rules: {
    // Conditions
    test: /\.(*.js|*.jsx)$/,
           use: ['eslint-loader'],
           exlude: [
             path.resolve(__dirname, 'prettier', 'webpack.config.js'),
             path.resolve(__dirname, 'node_modules'
             )],
             options: {
               limit: 10000,
               mimetype: 'image/png'
             },
    {         
    test: /\.(js|jsx)$/,
    exclude: path.resolve(__dirname, 'node_modules'),
    path.resolve(__dirname, 'prettier', 'webpack.config.js'),
        use:'babel-loader'
          options: {
            presets: ['env']
          }, 
      {
        test: /\.less$/,
        use: ['less-loader?name=[name].[ext]&outputPath=background/'],
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
        {
          test: /\.(jpg|jpeg|png|svg|png|gif|mp3)$/,
          use: ['url-loader?name=[name].[ext]&outputPath=images/'],
          options: {
            limit: 10000,
            mimetype: 'image/png'
            },
            {
        test: /\.scss$/,
        use: 'style-loader'
     },
     {
        test: /\.css$/,
        use: 'css-loader',
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            modules: true
            },
            {
                  contentBase: path.join(__dirname, 'dist'),
                  compress: true,
                  stats: 'errors-only',
                  watchContentBase: true,
                  liveReload: true,
                  open: true,
                  hot:true,
                  overlay: {
                    warnings: true,
                    errors: true
                    },
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
 