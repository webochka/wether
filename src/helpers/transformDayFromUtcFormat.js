// Core
import moment from 'moment';

export const transformDayFromUtcFormat = ({day, ...otherProperties}) => (
    {
        ...otherProperties,
        day: moment(day).utc()
    }
);
