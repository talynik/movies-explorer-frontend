import React from 'react';
import {useHistory} from 'react-router-dom';
import {CurrentUserContext} from '../../../contexts/CurrentUserContext';

function MoviesCard({card, deleteMovies, saveMovies}) {

  const history = useHistory();

  //информация о профиле
  const currentUser = React.useContext(CurrentUserContext);

  let activLike = '';
  let trailer = '';
  let image = '';
  
  if(history.location.pathname === '/savedmovies') {
    activLike = 'moviesCard__like_save';
    trailer = card.trailer;
    image = card.image;
  } else {
    activLike = 'moviesCard__like_active';
    trailer = card.trailerLink;
    image = `https://api.nomoreparties.co${card.image.url}`;
  }

  // Определяем, являемся ли мы владельцем текущей карточки
  const isLiked = card.owner === currentUser._id;

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