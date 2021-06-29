import React from 'react';
import MoviesCard from '../MoviesCard/MoviesCard'

function MoviesCardList({cards}) {

  return (
    <section className="moviesCardList">
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