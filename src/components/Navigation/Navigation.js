import React from 'react';
import {Link} from "react-router-dom";

function Navigation({isOpen, onClose, card, handleEscapeClose, handleOverleyClose}) {
  // закрытие на ESC
  React.useEffect(() => {
    if (!isOpen) {
      document.addEventListener("keydown", handleEscapeClose);
    } else {
      document.removeEventListener("keydown", handleEscapeClose);
    }
  }, [handleEscapeClose, isOpen, onClose]);

  return (
    <section className={`navigation ${isOpen && 'navigation_opened'}`} onClick={handleOverleyClose}>
      <button className="navigation__close" type="button" aria-label="Закрыть" onClick={onClose}></button>
      <ul className="navigation__list">
        <li>
          <Link to='/main' className="navigation__link" onClick={onClose}>Главная</Link>
        </li>
        <li>
          <Link to='/movies' className="navigation__link" onClick={onClose}>Фильмы</Link>
        </li>
        <li>
          <Link to='/savedmovies' className="navigation__link" onClick={onClose}>Сохранённые фильмы</Link>
        </li>
      </ul>
      <Link to='/profile' className="navigation__akkaunt" onClick={onClose}>Аккаунт</Link>
    </section>
    );
}
export default Navigation;