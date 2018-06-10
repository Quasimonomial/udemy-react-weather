import React from 'react'

import { getTemp } from 'openWeatherMap'
import WeatherDisplay from 'WeatherDisplay'
import WeatherForm from 'WeatherForm'

class Weather extends React.Component {
  constructor (props) {
    super()

    this.state = {
      isLoading: false
    }

    this.handleSearch = this.handleSearch.bind(this)
  }

  handleSearch (location) {
    this.setState({isLoading: true})
    getTemp(location).then(function (temp) {
      this.setState({
        isLoading: false,
        location: location,
        temperature: temp
      })
    }.bind(this), function (err) {
      this.setState({
        isLoading: false
      })
      alert(err)
    }.bind(this))
  }

  render () {
    var {isLoading, location, temperature} = this.state

    var renderMessage = function () {
      if (isLoading) {
        return <h3>...Fetching Weather</h3>;
      } else if (temperature && location) {
        return <WeatherDisplay location={location} temperature={temperature}/>;
      }
    }

    return (
      <div>
        <h2>Weather Component</h2>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
}

export default Weather;
