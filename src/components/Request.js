import axios from "axios"
import { API_KEY } from "../config.js";

let byCityState = 'http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}'
// http://api.openweathermap.org/geo/1.0/direct?q=charleston,sc,us&limit=5&appid=apikey
let byZipCode = 'http://api.openweathermap.org/geo/1.0/zip?zip={zip code},{country code}&appid={API key}'
// https://api.openweathermap.org/geo/1.0/zip?zip=29407&appid=apikey
let forecast = "http://api.openweathermap.org/data/2.5/forecast?q={city name},{state code},{country code}&appid={API key}"

const getRequest = async (city) => {
    const response = await axios.get('https://api.openweathermap.org/data/2.5/forecast', {
        params: {
            q: city + ',us',
            units: 'imperial',
            appid: `${API_KEY}`,
            //appid: `${process.env.REACT_APP_WEATHER_API}`
        }
    });

    return response;
};

export default getRequest;