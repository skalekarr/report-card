var path = require('path');
var src = path.join(__dirname, 'src');
var build = path.join(__dirname, 'dist');

module.exports = {
  context: src,
  entry: path.join(src, 'app.js'),
  output: {
      path: build,
      filename: "bundle.js"
  },
  externals: {
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },
  module: {
      loaders: [
          {
            test: /\.jsx?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
              presets: ['react', 'es2015', 'stage-0']
            }
          }
      ]
  }
};