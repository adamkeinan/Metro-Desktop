const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html", 
  filename: "./index.html"
});


  module.exports = {
    mode: 'development',
    entry: {
      app: [
        './src/index.js', 
        './styles/style.css' 
      ],
      output: {
        path: path.join(__dirname, 'dist'),
        filename: "bundle.js",
        publicPath: "/public/"
      },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: [
            "babel-loader"
          ]
        },
        {
          test: /\.(css|scss)$/,
          use: [
             "style-loader",
             "css-loader",
             "sass-loader"  
             ],
          test:/\.html$/,
          use:[
            "html-loader",
            ]
          },
          {
           test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,
           use: [
             "file-loader",
             ]
          },
          {
           test: /\.(woff|woff2|eot|ttf|otf)$/,
         use: [
           "file-loader",
         ]
         },  
         {
         devtool: [
         "inline-source-map"
         ]
         },
         {
           modules: [
             path.resolve(__dirname, 'dist'), 'node_modules'
             ]
           },
           {
           devServer: {
           function(app, server) {
               app.get('/some/path', function(req, res) {
                 res.json({ custom: 'response' });
                 clientLogLevel: 'silent',
                 contentBase: [path.join(__dirname, 'src'), path.join(__dirname, 'dist')],
                 filename: 'bundle.js',
                 compress: true,
                 port: 8080,
                 watchContentBase: true,
                 hot: false,
                 liveReload: false,
                 open: true,
                 open: 'Google Chrome',
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
         plugins: [
         new CleanWebpackPlugin(),
         new HtmlWebpackPlugin()
     ]
};