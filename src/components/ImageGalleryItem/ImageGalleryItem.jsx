import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({articles, onImage}) => {
    return (
        <>
            {articles.map(({ id, webformatURL, largeImageURL, tags }) => (
                <li className={s.ImageGalleryItem} key={id}>
                    <img
                        src={webformatURL}
                        alt="response from API"
                        className={s.ImageGalleryItemImage}
                        onClick={() => onImage(largeImageURL, tags, id) } 
                    />
                </li>
            ))}
        </>
    );
}

ImageGalleryItem.propTypes = {
    id: PropTypes.string,
    webformatURL: PropTypes.string,
    LargeImageURL: PropTypes.string,
    tags: PropTypes.string,
    onImage: PropTypes.func,
};

export default ImageGalleryItem;