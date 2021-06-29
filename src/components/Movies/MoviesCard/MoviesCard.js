import React from 'react';
import {useHistory} from 'react-router-dom';

function MoviesCard({card, onCardLike}) {

  const history = useHistory();

  let activLike = '';
  history.location.pathname === '/savedmovies' ? activLike = 'moviesCard__like_save' : activLike = 'moviesCard__like_active';

  // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
const isLiked = card.like === 1;

function handleLikeClick() {
  onCardLike(card);
}

  return (
    <li className="moviesCard">
      <img className="moviesCard__image" src={card.link} alt={card.name} />
        <div className="moviesCard__group">
          <div className="moviesCard__text">
            <h2 className="moviesCard__name">{card.name}</h2>
            <h3 className="moviesCard__time">{card.time}</h3>
          </div>
          <button className={`moviesCard__like ${isLiked && activLike}`} type="button" aria-label="Нравится" onClick={handleLikeClick}></button>
        </div>
    </li>
  );
}
export default MoviesCard;

