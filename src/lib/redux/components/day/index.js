/* Core */
import moment from 'moment';
import cx from 'classnames';

/* Instruments */
import { useWeather } from '../../../../hooks';

export const Day = () => {
    const { selectedFullDay } = useWeather();

    if (!selectedFullDay) {
        return null;
    }

    const {
        temperature,
        rain_probability: rainy,
        humidity,
        day,
        type,
    } = selectedFullDay;

    const dayTitleJSX = <p>{moment(day).format('dddd')}</p>;

    const dayOfMonthJSX = <span>{moment(day).format('D MMMM')}</span>;

    const dayCX = cx('icon', type);

    return (
        <>
            <div className="head">
                <div className={dayCX} />
                <div className="current-date">
                    {dayTitleJSX}
                    {dayOfMonthJSX}
                </div>
            </div>
            <div className="current-weather">
                <p className="temperature">{temperature}</p>
                <p className="meta">
                    <span className="rainy">%{rainy}</span>
                    <span className="humidity">%{humidity}</span>
                </p>
            </div>
        </>
    );
};
