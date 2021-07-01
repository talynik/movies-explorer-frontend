import React from 'react';
import { withRouter } from 'react-router-dom';
import SearchForm from '../Movies/SearchForm/SearchForm';
import FilterCheckbox from '../Movies/FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList'

function SavedMovies({cards, onLoading, isLoading, deleteMovies, saveMovies}) {

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
    </section>
  );
}

export default withRouter(SavedMovies);