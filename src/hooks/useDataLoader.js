/* Core */
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

/* Instruments */
import { weatherActions } from '../lib/redux';

export const useDataLoader = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(weatherActions.fetchDaysAsync());
    }, [dispatch]);
};
