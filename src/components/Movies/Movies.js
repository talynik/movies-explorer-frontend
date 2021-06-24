import React from 'react';
import { withRouter } from 'react-router-dom';
import SearchForm from './SearchForm/SearchForm';
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';
import MoviesCardList from './MoviesCardList/MoviesCardList'

function Movies({cards}) {

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

export default withRouter(Movies);