/* Core */
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

/* Instruments */
import Styles from './styles.module.css';

export const Spinner = ({ isLoading }) => {
    const spinnerJSX = isLoading && (
        <div className={Styles.spinner}>
            <Loader type="Triangle" color="#FFF" height={30} width={30} />
        </div>
    );

    return <>{spinnerJSX}</>;
};
