class UI {
  constructor(){
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelsLike = document.getElementById('w-feels-like');
    this.uvIndex = document.getElementById('w-dew-point');
    this.wind = document.getElementById('w-wind');
  }

  paint(weather){
    this.location.textContent = weather.location.name
    this.desc.textContent = weather.current.weather_descriptions
    this.string.textContent = weather.current.temperature
    this.icon.setAttribute('src', weather.current.weather_icons)
    this.humidity.textContent = `Humidity: ${weather.current.humidity}`
    this.feelsLike.textContent = `Feels Like: ${weather.current.feelslike}`
    this.uvIndex.textContent = `UV Index: ${weather.current.uv_index}`
    this.wind.textContent = `Wind Speed: ${weather.location.name} mph`
  }

}