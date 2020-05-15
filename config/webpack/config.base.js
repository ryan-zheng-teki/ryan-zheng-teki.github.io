const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const dotenv = require('dotenv');
const webpack = require('webpack');

module.exports = ({ sourceDir, distDir, envFile }) => {
  console.log('env file is ', envFile);
  const fileEnv = dotenv.config({ path: envFile }).parsed;
  const envKeys = Object.keys(fileEnv).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
    return prev;
  }, {});

  return {
    entry: `${sourceDir}/index`,
    devtool: 'eval-source-map',
    output: {
      path: distDir,
      filename: 'app.bundle.js',
    },
    resolve: {
      modules: ['node_modules', 'src'],
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
      alias: {
        AppComponents: `${sourceDir}/components/`,
        AppConfig: `${sourceDir}/config/`,
        Assets: `${sourceDir}/assets/`,
      },
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx|ts|tsx)$/,
          loader: 'babel-loader',
          exclude: ['/node_modules/'],
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
          enforce: 'pre',
          test: /\.js$/,
          loader: 'source-map-loader',
        },
      ],
    },
    devServer: {
      historyApiFallback: true,
      contentBase: './build',
      port: 3000,
      hot: true,
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
      new CopyWebpackPlugin([{ from: './src/favicon.ico' }]),
      new webpack.DefinePlugin(envKeys),
    ],
    node: {
      fs: 'empty',
      module: 'empty',
    },
  };
};
