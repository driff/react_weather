import axios from 'axios';

const API_KEY = 'a4f1e426321a145cda7730041e925f28';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},ec`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}