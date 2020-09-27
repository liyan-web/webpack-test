var { resolve } = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'index.js',
        path: resolve(__dirname, 'build'),
    },
    module: {
        rules: []
    },
    plugins: [
        new HtmlWebpackPlugin()
    ],
    // mode: 'production',
    mode: 'development',
}