var path = require('path');

module.exports = {
    cache: true,
    entry: './src/index.js',
    output: {
        publicPath: "/",
        chunkFilename: '[name].js',
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.js', '.json'],
        modules: [
            "node_modules",
            path.resolve(__dirname, "src")
        ]
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
        ]
    }
};
