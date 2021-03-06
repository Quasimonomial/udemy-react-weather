const axios = require('axios');
const express = require('express');

// Brings in our environment variables
require('dotenv').config()

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather';

// We have only one BE route for our app, in place only to keep our API key secret
var app = express();
var router = express.Router();
const PORT = process.env.PORT || 3000;

router.get('/weather', function(req, res, next) {
  axios.get(OPEN_WEATHER_MAP_URL, {
    params: {
      q: req.query.city,
      appid: process.env.OPEN_WEATHER_MAP_API_KEY,
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

// Use HTTP instead of HTTPS
app.use((req, res, next) => {
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next()
  }
})

app.use(express.static('public'));
app.use(express.static('dist'))
app.use('/api', router)

app.listen(PORT, function () {
  console.log("Express server is up on port " + PORT);
});
