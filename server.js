var axios = require('axios');
var express = require('express');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather';

// We have only one BE route for our app, in place only to keep our API key secret
var app = express();
var router = express.Router();

router.get('/weather', function(req, res, next) {
  axios.get(OPEN_WEATHER_MAP_URL, {
    params: {
      q: req.query.city,
      appid: '',
      units: 'imperial'
    }
  }).then((response) => {
    res.send(response.data)
  }, (err) => {
    res.status(422)
    res.send(err.response.data)
  }).catch((err) => {
    res.status(500)
    res.send('There is an error in the server request')
  })
});

app.use(express.static('public'));
app.use(express.static('dist'))
app.use('/api', router)

app.listen(3000, function () {
  console.log('Express server is up on port 3000');
});
