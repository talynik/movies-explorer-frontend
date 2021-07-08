import React from 'react';
import {Switch, Route, Redirect, useHistory, withRouter} from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Footer from '../Footer/Footer';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';
import * as moviesApi from '../../utils/MoviesApi'
import mainApi from '../../utils/MainApi'

function App() {

  const history = useHistory();

  // переменная отображения шапки
  let onDispleyHeader = (
    history.location.pathname === '/main' ||
    history.location.pathname === '/movies' ||
    history.location.pathname === '/savedmovies' ||
    history.location.pathname === '/profile'
    );

  // переменная отображения подвала
  let onDispleyFooter = (
    history.location.pathname === '/main' ||
    history.location.pathname === '/movies' ||
    history.location.pathname === '/savedmovies'
    );

  // переменная состояния авторизации
  const [loggedIn, setLoggedIn] = React.useState(false);
  // переменная состояния информации о пользователе
  const [currentUser, setCurrentUser] = React.useState({});
  // пременная состояния загрузки
  const [isLoading, setIsLoading] = React.useState(false);
  // информация о фильмах
  // const [cardsMovies, setCardsMovies] = React.useState([]);
  // информация о карточках
  const [cards, setCards] = React.useState([]);
  // информация о сохраненных карточках
  const [saveCards, setSaveCards] = React.useState([]);
  //переменная массива идентификаторов сохраненных карточек
  const [saveCardsId, setSaveCardsId] = React.useState([]);

  // проверка наличия токена и загрузка данных
  React.useEffect(() => {
    if (localStorage.getItem('jwt')) {
      mainApi
        .getUserInfo()
        .then(() => {
          setLoggedIn(true);
          history.replace('/movies');
          loadData();
        })
        .catch(err => console.log(err));
    }
  }, [history])

  // проверка наличия данных карточек в LS
  React.useEffect(() => {
    if (localStorage.cards) {
      setCards(JSON.parse(localStorage.cards))
    }
  }, [setCards])

  //авторизация пользователя
  function authorization(user) {
    mainApi
      .authorize(user)
      .then((data) => {
        localStorage.setItem('jwt', data.token);
        setLoggedIn(true);
        loadData();
        history.replace('/movies');
      })
      .catch(err=>console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
    setIsLoading(true);
  }

  //регистрация пользователя
  function registration(newUser) {
    mainApi
      .register(newUser)
      .then((data) => {
        localStorage.setItem('jwt', data.token);
        setLoggedIn(true);
        loadData();
        history.replace('/movies');
        // setTitleInfoTooltip('Вы успешно зарегистрировались!');
        // setStatusTitleInfoTooltip(success);
      })
      .catch((err) => {
        console.log(err);
        // setTitleInfoTooltip('Что-то пошло не так! Попробуйте ещё раз.');
        // setStatusTitleInfoTooltip(failure);
      })
      .finally(() => {
        setIsLoading(false);
      });
    setIsLoading(true);
  }

  //выход пользователя из системы
  function handleExit() {
    localStorage.removeItem('jwt');
    setLoggedIn(false);
  }

  // загрузка данных
  function loadData() {
    mainApi
      .getUserInfo()
      .then((userData) => {
        setCurrentUser(userData.data);
      })
      .catch(err => console.log(err));

    mainApi
      .getCard()
      .then((cardData) => {
        setSaveCards(cardData.data);
        setSaveCardsId(cardData.data.map(i => i.movieId));
      })
      .catch(err => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
    setIsLoading(true);
  }

  // обновление данных о пользователе
  function handleUpdateUser(newUserData) {
    mainApi
      .setUserInfo(newUserData)
      .then((userData) => {
        setCurrentUser(userData.data);
      })
      .catch(err=>console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
    setIsLoading(true);
  }

  // загрузка данных с сервиса beatfilm-movies и поиск фильмов
  function loadDataMovies(name) {
    moviesApi
      .getCards()
      .then((cardData) => {
        if (name !== "") {
          setCards(cardData.filter(card => card.nameRU.toLowerCase().includes(name.toLowerCase())));
          localStorage.cards = JSON.stringify(cardData.filter(card => card.nameRU.toLowerCase().includes(name.toLowerCase())));
        }
      })
      .catch(err => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
    setIsLoading(true);
  }

  // функция фильтра по имени для избранных фильмов
  function filterName(name) {
    name !== "" && setSaveCards(saveCards.filter(card => card.nameRU.toLowerCase().includes(name.toLowerCase())))
  }

  // добавление новой карточки
  function handleSaveMovies(card) {
    const saveCard = {
      country: card.country,
      director: card.director,
      duration: card.duration,
      year: card.year,
      description: card.description,
      image: `https://api.nomoreparties.co${card.image.url}`,
      trailer: card.trailerLink,
      nameRU: card.nameRU,
      nameEN: card.nameEN,
      thumbnail: `https://api.nomoreparties.co${card.image.formats.thumbnail.url}`,
      movieId: card.id
    }

    mainApi
      .addMovies(saveCard)
      .then((newCard) => {
        setSaveCards([newCard.data, ...saveCards]);
        setSaveCardsId([newCard.data.movieId, ...saveCardsId])
      })
      .catch(err=>console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
    setIsLoading(true);
  }

  // удаление карточки
  function handleDeleteMovies(card) {
    let id = '';
    history.location.pathname === '/savedmovies' ? id = card._id : id = saveCards.filter((c) => c.movieId === card.id)[0]._id;
    mainApi
    .removeMovies(id)
    .then(() => {
      setSaveCards((state) => state.filter((c) => c._id !== id));
      setSaveCardsId(saveCardsId.filter((c) => c !== card.id));
    })
    .catch(err => console.log(err))
    .finally(() => {
      setIsLoading(false);
    });
  setIsLoading(true);
}

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <div className="app__content">
          {onDispleyHeader &&
          <Header
            loggedIn={loggedIn}
          />}

          <Switch>
            <Route path='/main'>
              <Main/>
            </Route>

            <ProtectedRoute path='/movies'
              component={Movies}
              loggedIn={loggedIn}
              onLoading={loadDataMovies}
              isLoading={isLoading}
              cards={cards}
              saveCardsId={saveCardsId}
              saveMovies={handleSaveMovies}
              deleteMovies={handleDeleteMovies}
            />

            <ProtectedRoute path='/savedmovies'
              component={SavedMovies}
              loggedIn={loggedIn}
              onLoading={filterName}
              isLoading={isLoading}
              cards={saveCards}
              saveMovies={handleSaveMovies}
              deleteMovies={handleDeleteMovies}
            />

            <ProtectedRoute path='/profile'
              component={Profile}
              loggedIn={loggedIn}
              editProfile={handleUpdateUser}
              handleExit={handleExit}
            />

            <Route path='/signin'>
              <Login
                identification={authorization}
              />
            </Route>

            <Route path='/signup'>
              <Register
                identification={registration}
              />
            </Route>

            <Route>
                {loggedIn ? <Redirect to='/movies' /> : <Redirect to='/main' />}
            </Route>

          </Switch>

          {onDispleyFooter && <Footer/>}

        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default withRouter(App);
