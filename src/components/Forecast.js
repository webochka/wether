/* Components */
import { Day } from './Day';

/* Instruments */
import { useWeather, useFilter } from '../hooks';

export const Forecast = () => {
    const { days, selectedDayId, selectDay } = useWeather();

    const { isFiltered } = useFilter();

    const makeCallbackForSelection = (id, cb) => {
        return () => {
            cb(id);
        };
    };

    const daysJSX =
        days &&
        days
            .slice(0, 7)
            .map(({ day, type, temperature, id }) => (
                <Day
                    key={String(day)}
                    date={day}
                    type={type}
                    temperature={temperature}
                    isSelected={selectedDayId === id}
                    cb={makeCallbackForSelection(id, selectDay)}
                />
            ));

    const messageJSX = days && days.length === 0 && isFiltered && (
        <p className="message">По заданным критериям нет доступных дней!</p>
    );

    return (
        <div className="forecast">
            {messageJSX}
            {daysJSX}
        </div>
    );
};
