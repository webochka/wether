/* Core */
import cx from 'classnames';
import moment from 'moment';

const availableTypes = ['rainy', 'sunny', 'cloudy'];

export const Day = props => {
    const { type, isSelected, date, temperature, cb } = props;

    const dayTitle = moment(date).format('dddd');

    if (!availableTypes.includes(type)) {
        throw new Error('unknown weather type');
    }

    const dayCX = cx('day', type, [
        {
            selected: isSelected,
        },
    ]);

    return (
        <div className={dayCX} onClick={cb}>
            <p>{dayTitle}</p>
            <span>{temperature}</span>
        </div>
    );
};
