import React from 'react';
import { withRouter } from 'react-router-dom';
import SearchForm from './SearchForm/SearchForm';
import FilterCheckbox from './FilterCheckbox/FilterCheckbox';
import MoviesCardList from './MoviesCardList/MoviesCardList'

function Movies({cards, saveCardsId, onLoading, isLoading, deleteMovies, saveMovies}) {

  // переменная состояния чекбокса короткометражек
  const [checked, setChecked] = React.useState(false);
  // функция переключения чекбокса
  function handleChecked() {
    checked ? setChecked(false) : setChecked(true)
  }

  let maxCards = 0;
  let plus = 0;
  
  function handleAddCards() {
    plus = ++plus
    handleMaxCards(plus)
  }

  window.addEventListener("resize", handleMaxCards(plus));

  let movies = [];

  checked ? movies = cards.filter(card => card.duration < 40) : movies = cards;

  function handleMaxCards(plus) {
    if(document.documentElement.clientWidth >= 1280) {
      maxCards = 12 + (3 * plus);
    } else {
      if(document.documentElement.clientWidth >= 768) {
        maxCards = 8 + (2 * plus);
      } else {
        maxCards = 5 + (2 * plus);
      }
    }
  }

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
        cards={movies.slice(0, maxCards)}
        saveCardsId={saveCardsId}
        deleteMovies={deleteMovies}
        saveMovies={saveMovies}
      />
      <button className="movies__button" type="button" aria-label="Ещё" onClick={handleAddCards}>Ещё</button>
    </section>
  );
}

export default withRouter(Movies);