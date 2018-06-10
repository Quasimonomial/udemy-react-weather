var path = require('path');

module.exports = {
  entry: "./app/app.jsx",
  output: {
    filename: "bundle.js"
  },
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
  },
  watch: true
}
