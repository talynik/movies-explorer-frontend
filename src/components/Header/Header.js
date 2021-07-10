import React from 'react';
import {Link, useHistory, withRouter} from "react-router-dom";
import Navigation from '../Navigation/Navigation'
import logo from '../../logo.svg';

function Header({loggedIn}) {

  const history = useHistory();

  //переменная состояния, отвечающие за видимость навигации
  const [isNavigationOpen, setIsNavigationOpen] = React.useState(false);

  
  //открытие навигации
  function openNavigation() {
    setIsNavigationOpen(true);
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
    <header className={`header ${history.location.pathname !== '/' && 'header-black'}`}>
      <Link to='/' className="header__link-main"><img src={logo} className="header__logo" alt="Логотип" /></Link>
      {!loggedIn ?
        <>
          <div className="header__links">
            <Link to='/signup' className="header__link-registration">Регистрация</Link>
            <Link to='/signin' className="header__link-authorization">Войти</Link>
          </div>
        </> :
        <>
          <button className="header__button-menu" type="button" aria-label="Меню" onClick={openNavigation}></button>
          <Navigation
            isOpen={isNavigationOpen}
            isClose={closeNavigation}
            handleEscapeClose={handleEscapeClose}
            handleOverleyClose={handleOverleyClose}
          />
        </>
      }
    </header>
  );
}
export default withRouter(Header);