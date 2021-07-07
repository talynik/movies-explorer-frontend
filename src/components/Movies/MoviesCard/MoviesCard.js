import React from 'react';
import {useHistory} from 'react-router-dom';
// import {CurrentUserContext} from '../../../contexts/CurrentUserContext';

function MoviesCard({card, /* saveCards,  */deleteMovies, saveMovies}) {

  const history = useHistory();
  //переменная массива идентификаторов сохраненных карточек
  // const [saveCardsId, setSaveCardsId] = React.useState([]);

  // setSaveCardsId(saveCards.map(saveCards.movieId));

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
    // saveCards.map(i => i.movieId === card.id && isLiked = true);
    // setSaveCardsId(await saveCards.map(saveCards.movieId));
    // isLiked = saveCardsId.some(i => i === card.id);
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