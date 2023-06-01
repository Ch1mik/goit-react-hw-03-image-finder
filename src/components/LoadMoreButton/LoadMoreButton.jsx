import PropTypes from 'prop-types';
import s from './LoadMoreButton.module.css';

const LoadMoreButton = ({onButtonClick}) => {
    return(
        <div className={s.buttonContainer}>
            <button className={s.Button} type='button' onClick={onButtonClick}>
                Load more
            </button>
        </div>
    );
};


export default LoadMoreButton;

LoadMoreButton.propTypes = {
    onButtonClick: PropTypes.func,
};