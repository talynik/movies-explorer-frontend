import React from 'react';
import {Switch, Route, Redirect, useHistory, withRouter} from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavadMovies';
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

  //переменная состояния авторизации
  const [loggedIn, setLoggedIn] = React.useState(false);
  //переменная состояния информации о пользователе
  const [currentUser, setCurrentUser] = React.useState({});
  //пременная состояния загрузки
  const [isLoading, setIsLoading] = React.useState(false);
  //информация о карточках
  const [cards, setCards] = React.useState([]);
  //информация о сохраненных карточках
  const [saveCards, setSaveCards] = React.useState([]);

  function handleLoggedIn() {
    setLoggedIn(true);
  }

  //проверка наличия токена и загрузка данных
  React.useEffect(() => {
    if (localStorage.getItem('jwt')) {
      mainApi
        .getUserInfo()
        .then((data) => {
          setLoggedIn(true);
          loadData();
          history.replace('/movies');
        })
        .catch(err => console.log(err));
    }
  }, [history])

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

  // загрузка данных о пользователе и с сервиса beatfilm-movies
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
      })
      .catch(err => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
    setIsLoading(true);

    moviesApi
      .getCards()
      .then((cardData) => {
        setCards(cardData);
      })
      .catch(err => console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
    setIsLoading(true);
  }

  //обновление данных о пользователе
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

  // добавление новой карточки
  function handleSaveMovies(card) {
    mainApi
      .addMovies(card)
      .then((newCard) => {
        setCards([newCard.data, ...cards]);
      })
      .catch(err=>console.log(err))
      .finally(() => {
        setIsLoading(false);
      });
    setIsLoading(true);
  }

  // удаление карточки
  function handleDeleteMovies(card) {
    mainApi
      .removeCard(card._id)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== card._id));
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
          {onDispleyHeader && <Header/>}

          <Switch>
            <Route path='/main'>
              <Main/>
            </Route>

            <ProtectedRoute path='/movies'
              component={Movies}
              loggedIn={loggedIn}
              onLoading={loadData}
              isLoading={isLoading}
              cards={cards}
              saveMovies={handleSaveMovies}
              deleteMovies={handleDeleteMovies}
            />

            <ProtectedRoute path='/savedmovies'
              component={SavedMovies}
              loggedIn={loggedIn}
              // onLoading={loadData}
              isLoading={isLoading}
              cards={saveCards}
              saveMovies={handleSaveMovies}
              deleteMovies={handleDeleteMovies}
            />

            <ProtectedRoute path='/profile'
              component={Profile}
              loggedIn={loggedIn}
              onUpdateUser={handleUpdateUser}
              exit={handleExit}
            />

            <Route path='/signin'>
              <Login
                handleLoggedIn={handleLoggedIn}
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
