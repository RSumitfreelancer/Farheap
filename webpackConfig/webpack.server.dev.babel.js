import path from 'path';
import webpack from 'webpack';
import baseConfig from './webpack.base.js';
const projectRoot = path.resolve(__dirname, '..');

const config = baseConfig();
// import serverConfig from './config/serverConfig';
// const projectRoot = path.resolve(__dirname, '..');
// const outputPath = path.join(projectRoot, 'dist');
config.target = 'node';
config.entry = {
  'skadii': ['../src/serverEntry.js'],
};
/*
 * The combination of path and filename tells Webpack what name to give to
 * the final bundled JavaScript file and where to store this file.
 */
config.output = {
  // libraryTarget: 'commonjs2',
  libraryTarget: 'commonjs2',
  path: path.join(projectRoot, 'dist'),
  filename: 'bundle.server.js',
};

// push hot reload plugins
config.plugins.push(
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.optimize.DedupePlugin()
);

config.module.loaders.push(
  {
    test: /\.scss$/,
    loaders: ['style', 'css', 'sass'],
  }
);

// for the dev server we should externalize modules for performance
config.externals = Object.keys(require('../package.json').dependencies);

export default config;

