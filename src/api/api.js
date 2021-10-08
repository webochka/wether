/* Core */
import waait from 'waait';

const WEATHER_API_URL = process.env.REACT_APP_WEATHER_API_URL;

export const api = {
    async getWeather() {
        await waait(1000);

        return fetch(`${WEATHER_API_URL}`, { method: 'GET' });
    },
};
