//init weather object
const weather = new Weather('Raleigh');

weather.getWeather()
  .then(results => console.log(results))
  .catch(err => console.log(err))