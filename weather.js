class Weather {
  constructor (city, state){
    this.apiKey = '6b3307f50d695e0bfce9fd54ed341243';
    this.city = city;
    this.state = state;
  }

  // fetch weather
  async getWeather(){
    const response = await fetch(`http://api.weatherstack.com/current?api_key=${this.apiKey}&query=${this.city}`);

    const responseData = await response.json();

    return responseData.current;

  }


}