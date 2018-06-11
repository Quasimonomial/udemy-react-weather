import axios from 'axios'

export const getTemp = (location) => {
  return axios.get('/api/weather', {
    params: {
      city: location,
    }
  }).then((res) => {
    if (res.data.cod && res.data.message) {
      throw new Error(res.data.message)
    } else {
      return res.data.main.temp;
    }
  }, (err) => {
    throw new Error(err.response.data.message);
  })
}
