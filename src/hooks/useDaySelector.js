/* Core */
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

/* Instruments */
import { weatherActions } from '../lib/redux';

export const useDaySelector = () => {
    const dispatch = useDispatch();

    const { days } = useSelector(state => state.weather);

    useEffect(() => {
        if (days && days.length > 0) {
            dispatch(weatherActions.selectDay(days[0].id));
        }
    }, [days, dispatch]);
};
