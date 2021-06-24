import React from 'react';
import {Switch, Route, /*Redirect,  useHistory,  */withRouter} from 'react-router-dom';
// import ProtectedRoute from './ProtectedRoute';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavadMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import {cards, saveCards} from '../../utils/utils'

function App() {

  //переменная состояния, отвечающие за видимость навигации
  const [isNavigationOpen, setIsNavigationOpen] = React.useState(false);

    //переменная состояния авторизации
  const [loggedIn, setLoggedIn] = React.useState(false);

  function handleNavigation() {
    setIsNavigationOpen(true);
  }

  function handleLoggedIn() {
    setLoggedIn(true);
  }

    //функция закрытия навигации
    function closeNavigation() {
      setIsNavigationOpen(false);
    }
  
    //закрытие навигации на ESC
    function handleEscapeClose(evt) {
      (evt.key === "Escape") && closeNavigation();
    }
  
    //закрытие навигации по оверлею
    function handleOverleyClose(evt) {
      (evt.target === evt.currentTarget) && closeNavigation();
    }

  return (
    <div className="app">
      <div className="app__content">
        <Header
          loggedIn={loggedIn}
          onMenu={handleNavigation}
        />

        <Switch>
          <Route path='/main'>
            <Main/>
          </Route>

          <Route path='/movies'>
            <Movies
              cards={cards}
            />
          </Route>

          <Route path='/savedmovies'>
            <SavedMovies
              cards={saveCards}
            />
          </Route>

          <Route path='/profile'>
            <Profile
              cards={saveCards}
            />
          </Route>

          <Route path='/signin'>
            <Login
              LoggedIn={handleLoggedIn}
              // identification={authorization}
            />
          </Route>

          <Route path='/signup'>
            <Register
              // identification={registration}
            />
          </Route>

        </Switch>

        <Footer/>

        <Navigation
            isOpen={isNavigationOpen}
            onClose={closeNavigation}
            handleEscapeClose={handleEscapeClose}
            handleOverleyClose={handleOverleyClose}
          />
          
      </div>
    </div>
  );
}

export default withRouter(App);
