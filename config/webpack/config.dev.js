const webpack = require('webpack');
const dotenv = require('dotenv');
const path = require('path');
module.exports = ({ sourceDir, distDir }) => {
  const envFile = path.join(__dirname) + '/.env.dev';

  const fileEnv = dotenv.config({ path: envFile }).parsed;
  const envKeys = Object.keys(fileEnv).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
    return prev;
  }, {});

  return {
    plugins: [new webpack.DefinePlugin(envKeys)],
  };
};
