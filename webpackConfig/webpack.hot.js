import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
// the packages that will be bundled into the vendor file
import commonConfig from './common.config.js';
import serverConfig from '../config';

const hotPort = serverConfig.hot;

const path = require('path');
// get the root of the project
const projectRoot = path.resolve(__dirname, '..');

// import the base webpack config
import webpackBase from './webpack.base.js';
const config = webpackBase();

// entrypoint for webpack to start bundling
config.entry = {
  // 'common': commonConfig,
  'skadii': [
    '../src/clientEntry.js',
    `webpack-dev-server/client?http://localhost:${hotPort}`,
    'webpack/hot/only-dev-server',
  ],
};

// destination for webpack bundle
config.output = {
  path: path.resolve(__dirname, 'public/dist'),
  filename: 'bundle.js',
  publicPath: `http://localhost:${hotPort}/dist`,
};

config.module.loaders.push({
  test: /\.scss$/,
  loaders: ['style', 'css?sourceMap', 'sass?sourceMap'],
  // loader: ExtractTextPlugin.extract(
  //   'style',
  //   'css!sass'),
});

// add plugins to minize code and to optimize
config.plugins.push(
  new webpack.optimize.DedupePlugin(),
  new webpack.HotModuleReplacementPlugin(),
  // new webpack.optimize.CommonsChunkPlugin({
  //   name: 'common',
  //   minChunks: Infinity,
  // }),
  new webpack.optimize.OccurenceOrderPlugin(),
);

config.devtool = 'eval-source-map';

// export the config
export default config;
