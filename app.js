//init weather object
const weather = new Weather('Raleigh');

//get weather on dom load
document.addEventListener('DOMContentLoaded', getWeather)

// weather.changeLocation('Charlotte')

function getWeather(){
  weather.getWeather()
  .then(results => console.log(results))
  .catch(err => console.log(err))
}
