import React from 'react';
import Preloader from '../Preloader/Preloader';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList({isLoading, cards, saveCards, deleteMovies, saveMovies}) {

  return (
    <section className="moviesCardList">
      {isLoading && <Preloader/>}
      <ul className="moviesCardList__list">
        {cards.map((card) => (
          <MoviesCard
            card={card}
            saveCards={saveCards}
            deleteMovies={deleteMovies}
            saveMovies={saveMovies}
          />
        ))}
      </ul>
    </section>
  );
}
export default MoviesCardList;