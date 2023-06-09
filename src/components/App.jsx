import React, { Component } from "react";
import axios from "axios";
import s from './App.module.css'
import { BASE_URL, API_KEY, SEARCH_PARAMS } from "./Pixabay/Pixabay";
import Searchbar from "./Searchbar/Searchbar";
import ImageGallery from "./ImageGallery/ImageGallery";
import ImageGalleryItem from "./ImageGalleryItem/ImageGalleryItem";
import LoadMoreButton from "./LoadMoreButton/LoadMoreButton"
import SpinnerLoader from "./Loader/Loader"
import Modal from "./Modal/Modal";

class App extends Component {
  state = {
    hits: [],
    name: '',
    page: 1,
    showModal: false,
    loading: false,
    largeImegeURL: '',
    tags: '',
    totalHits: 0,
  };

  toggleModal = (imageURL, tag) => {
    this.setState(({showModal}) => ({
      showModal: !showModal,
      largeImegeURL: imageURL,
      tags: tag,
    }));
  };

  getValue = ({name, page}) => {
    this.setState({loading: true});
    try {
      axios
        .get(
          `${BASE_URL}?key=${API_KEY}&q=${name}&page=${page}&${SEARCH_PARAMS}`
        )
        .then(response => {
          if (!response.data.hits.length) {
            console.log('No images found!');
          }
          else if (name === this.state.name) {
            this.setState(state => ({
              hits: [...state.hits, ...response.data.hits],
              name: name,
              page: state.page + 1,
              loading: false,
              totalHits: response.data.totalHits,
            }));
          }
          else {
            this.setState(state => ({
              hits:response.data.hits,
              name: name,
              page: state.page + 1,
              loading: false,
              totalHits: response.data.totalHits,
            }));
          }
        });
    } catch (error) {
        console.error(error.message);
    } 
  };

  loadMore = () => {
    const { hits, page, name, totalHits } = this.state;
    if (hits.length < totalHits) {
      this.getValue({ name, page });
    } else {
      console.log('No more images to load!');
    }
  };

  render () {
    const {hits, showModal, loading, largeImegeURL, tags} = this.state;

    return (
      <div className={s.App}>
         <Searchbar onSubmitHandler={this.getValue} />
         {hits && (
           <ImageGallery>
             <ImageGalleryItem articles={hits} onImage={this.toggleModal} />
           </ImageGallery>
         )}
         {showModal && (<Modal onClose={this.toggleModal} url={largeImegeURL} alt={tags} />)}
         {loading && <SpinnerLoader />}
         {hits.length < this.state.totalHits && (
          <LoadMoreButton onButtonClick={this.loadMore} />
         )}
      </div>
    );
  }
}

export default App;