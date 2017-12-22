import axios from 'axios';

const dailyWeather = "http: //api.openweathermap.org/data/2.5/weather?q="
const tail = "&APPID=56b84ea3762661a48101475fd4a8727e"

const fiveDayWeather = "http: //api.openweathermap.org/data/2.5/forecast/daily?q="
const fiveDayTail = "&cnt=5"


let WeatherFetcher = {
	fetchDailyWeather: function(city) {
		let url = dailyWeather + city + tail;
		return axios.get(url);
	},
	fetchFiveDayWeather: function(city) {
		let url = fiveDayWeather + city + tail + fiveDayTail;
		return axios.get(url);
	}
}

export default WeatherFetcher;