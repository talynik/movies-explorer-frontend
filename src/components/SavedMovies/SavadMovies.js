import React from 'react';
import { withRouter } from 'react-router-dom';
import SearchForm from '../Movies/SearchForm/SearchForm';
import FilterCheckbox from '../Movies/FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList'

function SavedMovies({cards}) {

  return (
    <section className="movies">
      <SearchForm/>
      <FilterCheckbox/>
      <MoviesCardList
        cards={cards}
      />
    </section>
  );
}

export default withRouter(SavedMovies);