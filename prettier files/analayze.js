    
module.exports = {
    // mode: 'development',
    // entry: path.resolve(__dirname, 'src', 'index.js'),
    // app: PATH_APP,
    // build: path.resolve(__dirname, 'build'), // 'build': 'webpack --config webpack.config.js'
    // output: {
    //     path: path.resolve(__dirname+'./dist'),
    //     filename: 'bundle.js',
    //     publicPath:'./assets/',
    // },
    // module: {
    //     rules: [
    //         {
    //             enforce: 'pre',
    //             test: /\.js|jsx$/, 
    //             include: [
    //                 path.resolve(__dirname, 'src')
    //             ],
    //             exclude: ['node_modules'], 
    //             use: [
    //                 loader: ['babel-loader', 'eslint-loader'],
    //                 options: {
    //                     presets: [
    //                         '@babel/preset-env', {
    //                             debug: true, 
    //                             useBuiltIns: 'usage',	
    //                             corejs: 3
    //                         },
    //                     ],
    //                 },
    //             ],
    //         },
    //     ],
    // },
    // {
    //     test: /\.(js|jsx)$/,
    //     exclude: path.resolve(__dirname, 'node_modules'),
    //     use: ['babel-loader'],
    //     options: {
    //         presets: ['env']
    //     },
    // },
    // {
    //     test: /\.css$/,
    //     use: ['css-loader'], {
    //     loader: 'postcss-loader',
    //     options: {
    //         plugins: () => ([
    //             require('autoprefixer'),
    //             require('precss')
    //             ]),
    //         },
    //     },
    // },
    // {
    //     test: /\.less$/,
    //     use: [
    //         'css-loader',
    //         'less-loader'
    //     ]
    // },   // less-loader?name=[name].[ext]&outputPath=background/'
    // {
    //     test: /\.scss$/,
    //     use: ['sass-loader']
    // },
    // {
    //     test:/\.html$/,
    //     use: [
    //         'html-loader',
    //         'url-loader'
    //     ] //?loadername=[name].[ext]&outputPath=html/']
    //     exclude:path.resolve(__dirname, 'src/index.html')
    // },
    // {
    //     test:/\.html$/,  
    //     use: ['html-minify-loader'],
    //     exclude:path.resolve(__dirname, 'src/index.html')
    // },
    // {
    //     test: /\.(jpg|jpeg|png|gif|mp3|svg)$/,  // [?name=[name].[ext]&outputPath=images/']
    //     use: ['file-loader'],
    //     options: {
    //         limit: 20000,
    //         mimetype: 'image/png'
    //     },
    // },
    // {
    //     test: /\.(jpg|gif|svg)$/,  // [?name=[name].[ext]&outputPath=images/']
    //     use: ['raw-loader'],
    //     options: {
    //         limit: 20000,
    //         mimetype: 'image/png'
    //     },
    // },
    // {
    //     test: /\.scss$/,
    //     use: ['style-loader']
    // },
    // {
    //     test: /\.css$/,
    //     use: [
    //         'css-loader',
    //         'postcss-loader'
    //     ],
    //     options: {
    //         importLoaders: 1,
    //         modules: true
    //     },
    // },
    // {                                  
    //     test: /\.(woff|woff2|eot|ttf|otf)$/,
    //     use: ['file-loader'],  // [?name=[name].[ext]&outputPath=fonts/'
    //     options: {
    //         limit:10000,
    //         mimetype: 'application/font-woff'
    //     },
    // },
    // {
    //     test: /bootstrap-sass[\/\\]assets[\/\\]javascripts[\/\\]/,
    //     loader: 'imports-loader?jQuery=jquery'
    // },
    //optimition: {
    //    ruimeChunk: 'single',
    //    sptChunks: {
    //chunks: 'all',
    //maxSize: 0,
    //minChunks: 1,
    //maxAsyncRequests: 9,
    //maxInitialRequests: 7,
    //automaticNameDelimiter: '~',
    //automaticNameMaxLength: 30,
    //name: true,
    //cacheGroups: {
    //        vendor: {
    //        test: /[\\/]node_modules[\\/]/,
    //        priority:-10,
    //        }, 
    //        default: {
    //            minChunks: 2,
    //            priority: -20,
    //            reuseExistingChunk: true
    //        },
    //    },
    //    performance: {
    //    hints: 'warnings',
    //    maxEntrypointSize: 400000,
    //    maxAssetSize: 100000
    //    assetFilter: function(assetFilename) {
    //        return assetFilename.endsWith('.js', '.jsx', '.css', '.html', '.json', '.jpeg');
    //        },
    //    },
    //    devtool: 'inline-source-map', // 'start': 'webpack-dev-server --open'
    //    devServer: {
    //        contentBase: path.resolve(__dirname, 'dist'),
    //        publicPath: '/assets/',
    //        colors: {
    //            green: '\u001b[32m'
    //        },
    //        compress: true,
    //        disableHostCheck: true, // THIS IS NOT RECOMMENDED as apps that do not check the host are vulnerable to DNS     //rebinding attacks
    //        historyApiFallback: true,
    //        host: '127.0.0.1',
    //        https: true,
    //        port: 8080,	
    //        overlay: {
    //            errors: true,
    //            warnings: true
    //        },
    //        stats: {
    //            all: false,
    //            modules: true,
    //            maxModules: 0,
    //            errors: true,
    //            warnings: true,
    //            moduleTrace: true,
    //            errorDetails: true
    //        },
    //        useLocalIp: true
    //    },
    //    plugins: [
    //        new Dotenv({
    //        path: './.env.development',  // path: './.env.production'
    //        }),
    //        new HtmlWebpackPlugin({
    //            title: 'print_test'
    //        }),
    //        new CleanWebpackPlugin()
    //    ]
    //}
