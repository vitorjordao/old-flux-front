process.env.NODE_ENV = 'development';

const fs = require('fs-extra');
const paths = require('react-scripts/config/paths');
const webpack = require('webpack');
const config = require('react-scripts/config/webpack.config.js')('development');
const pkg = require('../package.json')
const overrides = require('../config-overrides')

overrides(config, process.env.NODE_ENV)

// removes react-dev-utils/webpackHotDevClient.js at first in the array
// config.entry.shift()
config.entry = config.entry.filter(
  (fileName) => !fileName.match(/webpackHotDevClient/)
)
config.plugins = config.plugins.filter(
  (plugin) => !(plugin instanceof webpack.HotModuleReplacementPlugin)
)

// to speed up rebuild time
config.mode = 'development'
config.devtool = 'eval-cheap-module-source-map'
delete config.optimization

// fix publicPath and output path
config.output.publicPath = pkg.homepage
config.output.path = paths.appBuild // else it will put the outputs in the dist folder

webpack(config).watch({}, (err, stats) => {
  if (err) {
    console.error(err);
  } else {
    copyPublicFolder();
  }
  console.error(stats.toString({
    chunks: false,
    colors: true
  }));
});

function copyPublicFolder() {
  fs.copySync(paths.appPublic, paths.appBuild, {
    dereference: true,
    filter: file => file !== paths.appHtml
  });
}