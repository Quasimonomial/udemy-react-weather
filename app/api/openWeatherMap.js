import axios from 'axios'

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather';

export const getTemp = (location) => {
  return axios.get(OPEN_WEATHER_MAP_URL, {
    params: {
      q: location,
      appid: '',
      units: 'imperial'
    }
  }).then(function (res) {
    if (res.data.cod && res.data.message) {
      throw new Error(res.data.message)
    } else {
      return res.data.main.temp;
    }
  }, function (res) {
    throw new Error(res.data.message);
  })
}
