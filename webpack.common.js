const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    performance: {
        hints: false,
        maxEntrypointSize: 244 * 1024, // 244 KiB limit for entry point size
        maxAssetSize: 244 * 1024,      // 244 KiB limit for individual asset size
      },
    module: {
        rules: [
            {
                test: /\.(png|jpg|gif|svg)$/,
                type: 'asset/resource'
            },
            {
                test: /\.html/i,
                use: [{
                    loader: "html-loader",
                }]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/pages/index.html",
            inject: "body",
        })
    ]
}