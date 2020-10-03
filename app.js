//init objects
const weather = new Weather('Raleigh');
const ui = new UI;

//get weather on dom load
document.addEventListener('DOMContentLoaded', getWeather)

// weather.changeLocation('Charlotte')

function getWeather(){
  weather.getWeather()
  .then(results => 
  ui.paint(results))
  .catch(err => console.log(err))
}
