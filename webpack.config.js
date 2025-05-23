const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, "docs"),
        clean: true,
    },
    mode: "production",
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        }),
    ],
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },

            {
                test: /\.(png|jpe?g|gif|svg|avif)$/i,
                type: 'asset/resource',
            }
        ],
    },
};