/* Core */
import shortid from 'shortid';

/* Instruments */
import { types } from './types';
import { api } from '../../../api';

export const weatherActions = Object.freeze({
    selectDay: payload => {
        return {
            type: types.WEATHER_SELECT_DAY,
            payload,
        };
    },
    startFetching: () => {
        return {
            type: types.WEATHER_START_FETCHING,
        };
    },
    stopFetching: () => {
        return {
            type: types.WEATHER_STOP_FETCHING,
        };
    },
    setFetchingError: error => {
        return {
            type: types.WEATHER_SET_FETCHING_ERROR,
            error: true,
            payload: error,
        };
    },
    fillDays: payload => {
        return {
            type: types.WEATHER_FILL_DAYS,
            payload,
        };
    },
    filterDays: payload => {
        return {
            type: types.WEATHER_FILTER_DAYS,
            payload,
        };
    },
    // Async
    fetchDaysAsync: () => async dispatch => {
        dispatch({
            type: types.WEATHER_FETCH_DAYS_ASYNC,
        });

        dispatch(weatherActions.startFetching());

        const response = await api.getWeather();

        if (response.status === 200) {
            const { data } = await response.json();
            const transformedData = data.map(({ ...properties }) => ({
                ...properties,
                id: shortid.generate(),
            }));

            dispatch(weatherActions.fillDays(transformedData));
        } else {
            const error = {
                status: response.status,
            };

            dispatch(weatherActions.setFetchingError(error));
        }

        dispatch(weatherActions.stopFetching());
    },
});
