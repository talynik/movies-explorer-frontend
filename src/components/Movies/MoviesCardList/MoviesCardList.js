import React from 'react';
import Preloader from '../Preloader/Preloader'
import MoviesCard from '../MoviesCard/MoviesCard'

function MoviesCardList({isLoading, cards}) {

  return (
    <section className="moviesCardList">
      {isLoading && <Preloader/>}
      <ul className="moviesCardList__list">
        {cards.map((card) => (
          <MoviesCard
            card={card}
          />
        ))}
      </ul>
    </section>
  );
}
export default MoviesCardList;