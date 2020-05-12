const path = require('path');
const merge = require('webpack-merge');

const baseConfig = require('./config/webpack/config.base');
const devConfig = require('./config/webpack/config.dev');
const prodConfig = require('./config/webpack/config.prod');
const dotenv = require('dotenv');

const sourceDir = path.join(__dirname, './src');
const distDir = path.join(__dirname, './dist');

module.exports = (env, argv) => {
  const devMode = argv.mode !== 'production';

  let envFile = devMode ? '.env.dev' : '.env.prod';
  envFile = path.join(__dirname) + '/' + envFile;
  console.log(
    'current directory is ',
    path.join(__dirname),
    devMode ? 'In dev' : 'In production'
  );
  const paths = { sourceDir, distDir, envFile };

  const base = baseConfig(paths);
  const dev = merge(base, devConfig(paths));
  const prod = merge(base, prodConfig(paths));

  return devMode ? dev : prod;
};
