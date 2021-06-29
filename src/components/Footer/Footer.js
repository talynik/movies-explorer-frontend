import React from 'react';

function Footer() {
    return (
      <footer className="footer">
        <p className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</p>
        <div className="footer__block">
          <lu className="footer__links">
            <li><a className="footer__link" href="https://praktikum.yandex.ru">Яндекс.Практикум</a></li>
            <li><a className="footer__link" href="https://github.com/talynik/movies-explorer-frontend">Github</a></li>
            <li><a className="footer__link" href="https://www.facebook.com/talynik">Facebook</a></li>
          </lu>
          <p className="footer__copyright">&#169; {new Date().getFullYear()}</p>
        </div>
      </footer>
    );
  }
export default Footer;