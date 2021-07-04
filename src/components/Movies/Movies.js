import React from 'react';
import { withRouter } from 'react-router-dom';
import SearchForm from './SearchForm/SearchForm';
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';
import MoviesCardList from './MoviesCardList/MoviesCardList'

function Movies({cards, onLoading, isLoading, deleteMovies, saveMovies}) {

  // переменная состояния чекбокса короткометражек
  const [checked, setChecked] = React.useState(false);
  // функция переключения чекбокса
  function handleChecked() {
    checked ? setChecked(false) : setChecked(true)
  }

  let movies = [];
  let filterChecked = cards.filter(card => card.duration < 40);
  checked ? movies = filterChecked : movies = cards;
  
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
      <button className="movies__button" type="button" aria-label="Ещё">Ещё</button>
    </section>
  );
}

export default withRouter(Movies);