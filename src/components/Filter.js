/* Core */
import cx from 'classnames';

/* Instruments */
import { useFilter, useWeather } from '../hooks';

export const Filter = () => {
    const {
        setCloudy,
        setSunny,
        type,
        minTemperature,
        maxTemperature,
        minTemperatureHandler,
        maxTemperatureHandler,
        applyFilter,
        isFiltered,
        isFormBlocked,
    } = useFilter();

    const { loadDataFromApi } = useWeather();

    const sunnyWeatherCX = cx('checkbox', {
        selected: type === 'sunny',
        blocked: isFiltered,
    });

    const cloudyWeatherCX = cx('checkbox', {
        selected: type === 'cloudy',
        blocked: isFiltered,
    });

    const filterButtonJSX = isFiltered ? 'Сбросить' : 'Отфильтровать';

    const submitHandler = isFiltered ? loadDataFromApi : applyFilter;

    return (
        <div className="filter">
            <span className={cloudyWeatherCX} onClick={setCloudy}>
                Облачно
            </span>
            <span className={sunnyWeatherCX} onClick={setSunny}>
                Солнечно
            </span>
            <p className="custom-input">
                <label htmlFor="min-temperature">Минимальная температура</label>
                <input
                    id="min-temperature"
                    type="number"
                    onChange={minTemperatureHandler}
                    value={minTemperature}
                    disabled={isFiltered}
                />
            </p>
            <p className="custom-input">
                <label htmlFor="min-temperature">
                    Максимальная температура
                </label>
                <input
                    id="max-temperature"
                    type="number"
                    onChange={maxTemperatureHandler}
                    value={maxTemperature}
                    disabled={isFiltered}
                />
            </p>
            <button onClick={submitHandler} disabled={isFormBlocked}>
                {filterButtonJSX}
            </button>
        </div>
    );
};
