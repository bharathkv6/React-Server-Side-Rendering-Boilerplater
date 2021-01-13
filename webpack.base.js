const LoadablePlugin = require('@loadable/webpack-plugin')

module.exports = {
    module: {
        rules: [{
            test: /\.js?$/,
            loader: "babel-loader",
            exclude: /node_modules/,
        }]
    },
    plugins: [new LoadablePlugin()],
}