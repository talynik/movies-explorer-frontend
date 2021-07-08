import React from 'react';
import {useHistory} from 'react-router-dom';

function MoviesCard({card, saveCardsId, deleteMovies, saveMovies}) {

  const history = useHistory();

  let isLiked = false;
  let activLike = '';
  let trailer = '';
  let image = '';
  
  if(history.location.pathname === '/savedmovies') {
    isLiked = true;
    activLike = 'moviesCard__like_save';
    trailer = card.trailer;
    image = card.image;
  } else {
    isLiked = saveCardsId.some(i => i === card.id);
    activLike = 'moviesCard__like_active';
    trailer = card.trailerLink;
    image = `https://api.nomoreparties.co${card.image.url}`;
  }

  function handleLikeClick() {
    isLiked ? deleteMovies(card) : saveMovies(card);
  } 

  return (
    <li className="moviesCard">
      <a className="moviesCard__link" href={trailer} target>
        <img className="moviesCard__image" src={image} alt={card.nameRU}></img>
      </a>
      <div className="moviesCard__group">
        <div className="moviesCard__text">
          <h2 className="moviesCard__name">{card.nameRU}</h2>
          <h3 className="moviesCard__time">{card.duration}</h3>
        </div>
        <button className={`moviesCard__like ${isLiked && activLike}`} type="button" aria-label="Нравится" onClick={handleLikeClick}></button>
      </div>
    </li>
  );
}
export default MoviesCard;