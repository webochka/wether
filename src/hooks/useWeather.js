/* Core */
import { useDispatch, useSelector } from 'react-redux';

/* Instruments */
import { weatherActions } from '../lib/redux';

export const useWeather = () => {
    const dispatch = useDispatch();

    const { days, isLoading, selectedDay } = useSelector(
        state => state.weather,
    );

    const selectedFullDay = days && days.find(day => day.id === selectedDay);

    const selectDay = id => {
        dispatch(weatherActions.selectDay(id));
    };

    const loadDataFromApi = () => {
        dispatch(weatherActions.fetchDaysAsync());
    };

    return {
        days,
        isLoading,
        selectedDayId: selectedDay,
        selectedFullDay,
        selectDay,
        loadDataFromApi,
    };
};
