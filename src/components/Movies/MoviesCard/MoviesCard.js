import React from 'react';

function MoviesCard({card}) {

  return (
    <li className="moviesCard">
      <img className="moviesCard__image" src={card.link} alt={card.name} />
        <div className="moviesCard__group">
          <div className="moviesCard__text">
            <h2 className="moviesCard__name">{card.name}</h2>
            <h3 className="moviesCard__time">{card.time}</h3>
          </div>
          <button className={`moviesCard__like`} type="button" aria-label="Нравится"></button>
        </div>
    </li>
  );
}
export default MoviesCard;