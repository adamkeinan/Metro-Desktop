'use strict';

const express = require('express');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const webpackDevMiddleware = require('webpack-dev-middleware');
const DIST_DIR = path.join(__dirname, '../dist'); // NEW
const HTML_FILE = path.join(DIST_DIR, 'index.html'); // NEW
const port = process.env.PORT || 8080;
const app = express();

const app = express();
const compiler = webpack(config);
const dotenv = require('dotenv');
const devServerOptions = Object.assign({}, webpackConfig.devServer, {
  open: true,
  stats: {
    colors: true,
  },
});

dotenv.config();

app.use(favicon(__dirname + '/public/favicon.png'));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));
// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath
}));

// send the user to index html page inspite of the url
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'index.html'));
});

const server = new WebpackDevServer(compiler, devServerOptions);
// Serve the files on port 3000.
server.listen(8080, '127.0.0.1', () => {
  console.log('Starting server on http://localhost:8080');
});
app.listen(8080, function () 
  console.log('Example app listening on port 8080!\n');
});