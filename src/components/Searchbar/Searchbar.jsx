import React, { Component } from 'react';
import s from './Searchbar.module.css';

class Searchbar extends Component {
  state = {
    name: '',
    page: 1,
  };

  handleChange = event => {
    const { value } = event.currentTarget;
    this.setState({ name: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.onSubmitHandler(this.state);
    this.reset();
  };

  reset() {
    this.setState({ name: '' });
  }

  render() {
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={s.SearchFormButton}>
            Search
          </button>
          <input
            className={s.SearchFormInput}
            type="text"
            onChange={this.handleChange}
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;

