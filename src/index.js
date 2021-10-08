/* Core */
import { render } from 'react-dom';
import { Provider } from 'react-redux';

/* Components */
import { App } from './App';

/* Instruments */
import './theme/index.scss';
import './lib/moment';
import { store } from './lib/redux';

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);
