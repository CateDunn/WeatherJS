//init objects
const storage = new Storage;
//get stored location data
const weatherLocation = storage.getLocationData();
const weather = new Weather(weatherLocation.city);
const ui = new UI;

//get weather on dom load
document.addEventListener('DOMContentLoaded', getWeather)

// change location
document.getElementById('w-change-btn').addEventListener('click',  function (e) {
  const city = document.getElementById('city').value;
    weather.changeLocation(city);

    //set to local storage
    storage.setLocationData(city)

    getWeather();

    // close modal
    $('#loc-modal').modal('hide');

    //clear city

})

function getWeather(){
  weather.getWeather()
  .then(results => 
  ui.paint(results))
  .catch(err => console.log(err))
}
