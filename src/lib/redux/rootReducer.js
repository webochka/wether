/* Core */
import { combineReducers } from 'redux';

/* Instruments */
import { weatherReducer as weather } from './weather';

export const rootReducer = combineReducers({
    weather,
});
