var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'script-loader!jquery/dist/jquery.min.js',
    'script-loader!foundation-sites/dist/js/foundation.min.js',
    "./app/app.jsx"
  ],
  output: {
    filename: "bundle.js"
  },
  devtool: 'eval-source-map',
  externals: {
    jquery: 'jQuery'
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    })
  ],
  resolve: {
    alias: {
      About: path.resolve(__dirname, 'app/components/About.jsx'),
      Examples: path.resolve(__dirname, 'app/components/Examples.jsx'),
      Main: path.resolve(__dirname, 'app/components/Main.jsx'),
      Nav: path.resolve(__dirname, 'app/components/Nav.jsx'),
      openWeatherMap: path.resolve(__dirname, 'app/api/openWeatherMap.js'),
      Weather: path.resolve(__dirname, 'app/components/Weather.jsx'),
      WeatherDisplay: path.resolve(__dirname, 'app/components/WeatherDisplay.jsx'),
      WeatherForm: path.resolve(__dirname, 'app/components/WeatherForm.jsx')
    },
    extensions: ['.js', '.jsx']
  },
  mode: 'development',
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
  }
}
