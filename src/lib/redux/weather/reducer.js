/* Instruments */
import { types } from './types';
import { transformDayFromUtcFormat } from '../../../helpers';

const initialState = {
    days: null,
    isLoading: false,
    error: null,
    selectedDay: null,
    isFiltered: false,
};

export const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.WEATHER_SELECT_DAY:
            return {
                ...state,
                selectedDay: action.payload,
            };
        case types.WEATHER_START_FETCHING:
            return {
                ...state,
                isLoading: true,
            };
        case types.WEATHER_STOP_FETCHING:
            return {
                ...state,
                isLoading: false,
            };
        case types.WEATHER_FILL_DAYS:
            return {
                ...state,
                error: null,
                days: action.payload.map(transformDayFromUtcFormat),
                isFiltered: false,
            };
        case types.WEATHER_FILTER_DAYS:
            const options = action.payload;

            const filteredDays = state.days.filter(day => {
                const isCorrectType = options.type
                    ? options.type === day.type
                    : true;
                const isCorrectMinTemperature = options.minTemperature
                    ? options.minTemperature <= day.temperature
                    : true;
                const isCorrectMaxTemperature = options.maxTemperature
                    ? options.maxTemperature >= day.temperature
                    : true;

                return (
                    isCorrectType &&
                    isCorrectMinTemperature &&
                    isCorrectMaxTemperature
                );
            });

            return {
                ...state,
                error: null,
                days: filteredDays,
                isFiltered: true,
            };
        default:
            return state;
    }
};
