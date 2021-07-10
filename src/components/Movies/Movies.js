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
  // переменная состояния разрешения экрана
  const [width, setWidth] = React.useState();
  // переменная количества карточек
  const [maxCards, setMaxCards] = React.useState(0);
  // переменная множителя
  const [plus, setPlus] = React.useState(0);

  React.useEffect(() => {
    function changeWindowWidth (){
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", changeWindowWidth);
    changeWindowWidth();
    return () => window.removeEventListener("resize", changeWindowWidth);
  }, []);

  function handleAddCards() {
    setPlus(plus + 1);
  }

  React.useEffect(() => {
    if(width >= 1280) {
      setMaxCards(12 + (3 * plus));
    } else if(width >= 768) {
      setMaxCards(8 + (2 * plus));
      } else {
        setMaxCards(5 + (2 * plus));
      }
  }, [width, setMaxCards, plus]);

  let movies = [];

  checked ? movies = cards.filter(card => card.duration < 40) : movies = cards;

  let length = movies.length;

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
      {length > maxCards && <button className="movies__button" type="button" aria-label="Ещё" onClick={handleAddCards}>Ещё</button>}
    </section>
  );
}

export default withRouter(Movies);