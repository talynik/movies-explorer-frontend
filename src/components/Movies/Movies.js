import React from 'react';
import { withRouter } from 'react-router-dom';
import SearchForm from './SearchForm/SearchForm';
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';
import MoviesCardList from './MoviesCardList/MoviesCardList'

function Movies({cards, onLoading, isLoading, deleteMovies, saveMovies}) {

  return (
    <section className="movies">
      <SearchForm
        onLoading={onLoading}
      />
      <FilterCheckbox/>
      <MoviesCardList
        isLoading={isLoading}
        cards={cards}
        deleteMovies={deleteMovies}
        saveMovies={saveMovies}
      />
      <button className="movies__button" type="button" aria-label="Ещё">Ещё</button>
    </section>
  );
}

export default withRouter(Movies);