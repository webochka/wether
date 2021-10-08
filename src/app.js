/* Components */
import { Filter, SelectedDayView, Forecast, Spinner } from './components';

/* Instruments */
import { useWeather, useDataLoader, useDaySelector } from './hooks';

export const App = () => {
    // Load data from API
    useDataLoader();

    // Select current day
    useDaySelector();

    const { isLoading } = useWeather();

    return (
        <main>
            <Filter />
            <SelectedDayView />
            <Forecast />
            <Spinner isLoading={isLoading} />
        </main>
    );
};
