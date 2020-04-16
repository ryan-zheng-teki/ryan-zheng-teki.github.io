const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {
    mode: 'development',
    entry: './src/index',
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    resolve: {
        modules: ['node_modules', 'src'],
        extensions: ['.js', '.jsx','.ts','.tsx'],
        alias: {
            AppComponents: path.resolve(__dirname, 'src/components/'),
            AppConfig: path.resolve(__dirname, 'src/config/'),
            Assets: path.resolve(__dirname, 'src/assets/'),
        }
    },
    module: {
        rules: [
        {
            test: /\.(ts|tsx)$/,
            enforce: 'pre',
            use: [
                {
                    options: {
                        eslintPath: require.resolve('eslint'),
        
                },
                loader: require.resolve('eslint-loader'),
                },
            ],
            exclude: /node_modules/,
        },
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
            test: /\.xml$/i,
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
        filename: './index.html'       }),
    ],
    node: {
        fs: "empty",
        module: "empty"
    }
}