import React from 'react';
import {Link, useHistory} from "react-router-dom";

function Navigation({isOpen, isClose, handleEscapeClose, handleOverleyClose}) {

  const history = useHistory();

  // закрытие на ESC
  React.useEffect(() => {
    if (!isOpen) {
      document.addEventListener("keydown", handleEscapeClose);
    } else {
      document.removeEventListener("keydown", handleEscapeClose);
    }
  }, [handleEscapeClose, isOpen, isClose]);

  return (
    <section className={`navigation ${isOpen && 'navigation_opened'} ${history.location.pathname === '/' && 'header-main'}`} onClick={handleOverleyClose}>
      <button className="navigation__close" type="button" aria-label="Закрыть" onClick={isClose}></button>
      <div className="navigation__links">
        <ul className="navigation__list">
          <li>
            <Link to='/' className="navigation__link navigation__link_main" onClick={isClose}>Главная</Link>
          </li>
          <li>
            <Link to='/movies' className="navigation__link" onClick={isClose}>Фильмы</Link>
          </li>
          <li>
            <Link to='/savedmovies' className="navigation__link" onClick={isClose}>Сохранённые фильмы</Link>
          </li>
        </ul>
        <Link to='/profile' className="navigation__akkaunt" onClick={isClose}>Аккаунт</Link>
      </div>
    </section>
    );
}
export default Navigation;