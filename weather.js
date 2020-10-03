class Weather {
  constructor (city){
    this.apiKey = '6b3307f50d695e0bfce9fd54ed341243';
    this.city = city;
  }

  // fetch weather
  async getWeather(){
    const response = await fetch(`http://api.weatherstack.com/current?access_key=${this.apiKey}&query=${this.city}`);

    const responseData = await response.json();

    return responseData;

  }

  //change weather location
  changeLocation(city){
    this.city = city;
  }


}