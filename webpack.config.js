const path = require('path');
const HtmlWebpackPlugin=require('html-webpack-plugin');

module.exports = {
    entry: ['babel-polyfill','./src/js/controller/script.js'],
    output: {
        // Webpack prefers an absolute path:
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/bundle.js',
        libraryTarget: 'var',
        library: 'script'
    },
    devServer:{
        contentBase: path.join(__dirname, 'dist'),
        index :'rating.html'
    },
    plugins : [
        new HtmlWebpackPlugin({
            filename:'rating.html',
            template: './src/js/view/rating.html'

        }),
        new HtmlWebpackPlugin({  // Also generate a test.html
            filename: 'sdlc.html',
            template: './src/js/view/sdlc.html'
          }),
          new HtmlWebpackPlugin({
            filename:'pdlc.html',
            template: './src/js/view/pdlc.html'

        }),
        new HtmlWebpackPlugin({
            filename:'qa.html',
            template: './src/js/view/qa.html'

        }),
        new HtmlWebpackPlugin({
            filename:'login.html',
            template: './src/js/view/login.html'

        }),
        // new htmlWebpackPlugin ({
        //     "files": {
        //       "css": [ "/materialize/css/materialize.css" ],
        //     //   "js": [ "/materialize/js/materialize.js", "/materialize/js/materialize.min.js"],
        //       "chunks": {
        //         "head": {
        //           "entry": "/materialize/js/materialize.js",
        //           "css": [ "/materialize/css/materialize.css","/materialize/css/materialize.min.css" ]
        //         },
        //         "main": {
        //           "entry": "/materialize/js/materialize.js",
        //           "css": []
        //         },
        //       }
        //     }
        //   })
    ],
        module: {
            rules: [
                {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
                
            },
            // {
            //     test: /\.css$/,
            //     exclude: /node_modules/,
            //     use: {
            //         loader: 'css-loader'
            //     },
            //     options:{
            //         modules: true,
            //         sourceMap:true
            //     }
                
            // }
        ]
        }
          
    
};