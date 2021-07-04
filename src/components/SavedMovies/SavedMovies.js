import React from 'react';
import { withRouter } from 'react-router-dom';
import SearchForm from '../Movies/SearchForm/SearchForm';
import FilterCheckbox from '../Movies/FilterCheckbox/FilterCheckbox';
import MoviesCardList from '../Movies/MoviesCardList/MoviesCardList'

function SavedMovies({cards, onLoading, isLoading, deleteMovies, saveMovies}) {
  // переменная состояния чекбокса короткометражек
  const [checked, setChecked] = React.useState(false);
  // функция переключения чекбокса
  function handleChecked() {
    checked ? setChecked(false) : setChecked(true)
  }
  
  let movies = [];

  checked ? movies = cards.filter(card => card.duration < 40) : movies = cards;

  return (
    <section className="movies">
      <SearchForm
        onLoading={onLoading}
      />
      <FilterCheckbox
        handleChecked={handleChecked}
        checked={checked}
      />
      <MoviesCardList
        isLoading={isLoading}
        cards={movies}
        deleteMovies={deleteMovies}
        saveMovies={saveMovies}
      />
    </section>
  );
}

export default withRouter(SavedMovies);