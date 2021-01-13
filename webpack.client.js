const path = require('path');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const config = {
    entry: {
        home: "./source/client/client-routes/Home.js",
    },
    output: {
        filename: "[name].js",
        chunkFilename: '[name].chunk.[hash].js',
        path: path.resolve(__dirname, "public"),
        publicPath: '/'
    },
}

module.exports = webpackMerge(baseConfig, config);