import React from 'react';
import {Switch, Route, Redirect, useHistory, withRouter} from 'react-router-dom';
// import ProtectedRoute from './ProtectedRoute';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavadMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Footer from '../Footer/Footer';
import {saveCards} from '../../utils/utils'
import moviesApi from '../../utils/MoviesApi'

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
  //пременная состояния загрузки
  const [isLoading, setIsLoading] = React.useState(false);
  //информация о карточках
  const [cards, setCards] = React.useState([]);

  function handleLoggedIn() {
    setLoggedIn(true);
  }

  //включение Preloader
  /* function onLoading () {
    setIsLoading(true);
  } */

  //выключение Preloader
  function ofLoading() {
    setIsLoading(false);
  }

  // загрузка данных с сервиса beatfilm-movies
  function loadData() {
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

  return (
    <div className="app">
      <div className="app__content">
        {onDispleyHeader && <Header/>}

        <Switch>
          <Route path='/main'>
            <Main/>
          </Route>

          <Route path='/movies'>
            <Movies
              cards={cards}
              onLoading={loadData}
              isLoading={isLoading}
              ofLoading={ofLoading}
            />
          </Route>

          <Route path='/savedmovies'>
            <SavedMovies
              cards={saveCards}
            />
          </Route>

          <Route path='/profile'>
            <Profile/>
          </Route>

          <Route path='/signin'>
            <Login
              handleLoggedIn={handleLoggedIn}
              // identification={authorization}
            />
          </Route>

          <Route path='/signup'>
            <Register
              // identification={registration}
            />
          </Route>

          <Route>
              {loggedIn ? <Redirect to='/movies' /> : <Redirect to='/main' />}
          </Route>

        </Switch>

        {onDispleyFooter && <Footer/>}

      </div>
    </div>
  );
}

export default withRouter(App);
