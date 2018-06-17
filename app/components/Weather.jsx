import React from 'react'

import { getTemp } from 'openWeatherMap'
import ErrorModal from 'ErrorModal'
import WeatherDisplay from 'WeatherDisplay'
import WeatherForm from 'WeatherForm'

class Weather extends React.Component {
  constructor (props) {
    super()

    this.state = {
      isLoading: false,
      errorMessage: null
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
        isLoading: false,
        errorMessage: err.message
      })
    }.bind(this))
  }

  render () {
    var {errorMessage, isLoading, location, temperature} = this.state

    var renderMessage = function () {
      if (isLoading) {
        return <h3>...Fetching Weather</h3>;
      } else if (temperature && location) {
        return <WeatherDisplay location={location} temperature={temperature}/>;
      }
    }

    var renderError = function () {
      if (typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage}/>
        )
      }
    }

    return (
      <div>
        <h1 className="text-center">Awesome Weather</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
        {renderError()}
      </div>
    );
  }
}

export default Weather;
