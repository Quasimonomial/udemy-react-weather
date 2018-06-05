var path = require('path');

module.exports = {
  entry: "./app/app.jsx",
  output: {
    filename: "bundle.js"
  },
  resolve: {
    alias: {
      Main: path.resolve(__dirname, 'app/components/Main.jsx')
    },
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  watch: true
}
