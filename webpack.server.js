const path = require("path");
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const nodeExternals = require('webpack-node-externals');

const config = {
    target: "node",
    externals: [nodeExternals()],
    entry: "./source/app.js",
    node: {
        global: true,
        __dirname: true,
        __filename: true
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "build"),
    }
}

module.exports = webpackMerge(baseConfig, config);