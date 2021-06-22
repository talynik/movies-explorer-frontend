import React from 'react';
import {Link, withRouter} from "react-router-dom";
import logo from '../../logo.svg';

function Header({loggedIn, onMenu}) {

  function handleMenuClick() {
    onMenu();
  }

  return (
    <header className={`header ${loggedIn && 'header-black'}`}>
      <img src={logo} className="header__logo" alt="Логотип" />
      {!loggedIn ?
        <>
          <div className="header__links">
            <Link to='/signup' className="header__link-registration">Регистрация</Link>
            <button className="header__button-authorization" type="button" aria-label="Войти" onClick={handleMenuClick}>Войти</button>
          </div>
        </> :
          <button className="header__button-menu" type="button" aria-label="Меню" onClick={handleMenuClick}></button>
      }
    </header>
  );
}
export default withRouter(Header);