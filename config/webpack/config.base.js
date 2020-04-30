const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = ({ sourceDir, distDir }) => ({
    entry: `${sourceDir}/index`,
    devtool: 'inline-source-map',
    output: {
        path: distDir,
        filename: 'app.bundle.js'
    },
    resolve: {
        modules: ['node_modules', 'src'],
        extensions: ['.js', '.jsx','.ts','.tsx'],
        alias: {
            AppComponents: `${sourceDir}/components/`,
            AppConfig: `${sourceDir}/config/`,
            Assets: `${sourceDir}/assets/`,
        }
    },
    module: {
        rules: [
        {
            test: /\.(js|jsx|ts|tsx)$/,
            loader: 'babel-loader',
            exclude: [
                '/node_modules/',
            ],
        },
        {
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        {
            test: /\.(xml|md)$/i,
            use: 'raw-loader',
        },
        {
            test: /\.(png|jpeg|svg|gif)$/,
            loader: 'file-loader',
            options: {
                outputPath: 'assets',
            },
        },
        {
            enforce: "pre",
            test: /\.js$/,
            loader: "source-map-loader"
        }
        ]
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './build',
        port: 3000,
        hot: true
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.html',
        filename: './index.html'       })
    ],
    node: {
        fs: "empty",
        module: "empty"
    }
})