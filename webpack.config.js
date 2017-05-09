const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: [path.join(__dirname, '/client/app.jsx')],
    output: {
        path: path.join(__dirname,'/build/js'),
        filename: "app.js"
    },

    module: {
        loaders: [
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'jshint-loader'
            },
            {
                test: /\.jsx?$/,
                include: path.join(__dirname, '/client/'),
                loader: 'babel-loader',
                query: {
                    presets: ["react","es2015"]
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js','.es6','.jsx','.json']
    },

    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                screw_ie8: true,
                drop_console: true,
                drop_debugger: true
            }
        })
    ],

    watch: true
};
