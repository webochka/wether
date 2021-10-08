/* Core */
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

/* Instruments */
import { weatherActions } from '../lib/redux';

export const useFilter = () => {
    const dispatch = useDispatch();
    const { isFiltered } = useSelector(state => state.weather);

    const [type, setType] = useState('');
    const [minTemperature, setMinTemperature] = useState('');
    const [maxTemperature, setMaxTemperature] = useState('');

    useEffect(() => {
        if (!isFiltered) {
            setType('');
            setMinTemperature('');
            setMaxTemperature('');
        }
    }, [isFiltered]);

    const setSunny = () => {
        if (!isFiltered) {
            setType('sunny');
        }
    };

    const setCloudy = () => {
        if (!isFiltered) {
            setType('cloudy');
        }
    };

    const minTemperatureHandler = e => {
        e.persist();

        setMinTemperature(e.target.value);
    };

    const maxTemperatureHandler = e => {
        e.persist();

        setMaxTemperature(e.target.value);
    };

    const applyFilter = () => {
        const options = {
            type: type || null,
            minTemperature:
                minTemperature !== '' ? Number(minTemperature) : null,
            maxTemperature:
                maxTemperature !== '' ? Number(maxTemperature) : null,
        };

        dispatch(weatherActions.filterDays(options));
    };

    const isFormBlocked =
        type === '' && minTemperature === '' && maxTemperature === '';

    return {
        setSunny,
        setCloudy,
        type,
        minTemperature,
        maxTemperature,
        minTemperatureHandler,
        maxTemperatureHandler,
        applyFilter,
        isFiltered,
        isFormBlocked,
    };
};
