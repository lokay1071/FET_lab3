const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    mode: "development",
    entry: {
        bundle: path.resolve(__dirname, "src/index.js"),
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, "dist"),
        },
        port: 3000,
        open: true,
        hot: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "index.html",
            template: path.resolve(__dirname, "src/pages/index.html"),
            filename: "index.html",
        }),
        new HtmlWebpackPlugin({
            title: "about.html",
            template: path.resolve(__dirname, "src/pages/about.html"),
            filename: "about.html",
        }),
        new CleanWebpackPlugin(),
    ],
};
