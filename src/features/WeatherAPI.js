/*
* Weather API
Get current user weather using cities.
*/

const URL = "http://api.weatherapi.com/v1/current.json?aqi=no"
const API_KEY = "cfc5a4bc2be24696ad7181915222012"

export class WeatherAPI{
    constructor() {
        this.url = URL + `&key=${API_KEY}`;
    }
    getCurrentWeather(city){
        const cityNormalized = city.toString().toLowerCase()
        if(cityNormalized === undefined) return {};
        return fetch(this.url + `&q=${cityNormalized}`)
                .then((res) => res.json())
    }
}