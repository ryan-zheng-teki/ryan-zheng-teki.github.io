const webpack = require('webpack');

module.exports = ({ sourceDir, distDir }) => {
  const envFile = path.join(__dirname) + '/.env.prod';

  const fileEnv = dotenv.config({ path: envFile }).parsed;
  const envKeys = Object.keys(fileEnv).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
    return prev;
  }, {});

  return {
    plugins: [new webpack.DefinePlugin(envKeys)],
  };
};
