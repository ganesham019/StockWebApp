const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    devServer: {
        static: path.resolve(__dirname, "dist"),
        port: 3000,
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
            title: "Webpack",
            filename: "index.html",
            template: "./src/pages/index.html",
            inject: "body",
        })
    ]
}