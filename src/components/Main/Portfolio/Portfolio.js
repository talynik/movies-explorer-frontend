import React from 'react';
import {withRouter} from "react-router-dom";
import link from '../../../images/link.svg'

function Portfolio() {

  return (
    <section className="portfolio">
      <h3 className="portfolio__header">Портфолио</h3>
      <ul className="portfolio__links">
        <li className="portfolio__block">
          <a className="portfolio__link" href="https://talynik.github.io/how-to-learn/index.html">Статичный сайт</a>
          <img className="portfolio__picture" src={link} alt="Статичный сайт"></img>
        </li>
        <li className="portfolio__block portfolio__block-line">
          <a className="portfolio__link" href="https://talynik.github.io/russian-travel/index.html">Адаптивный сайт</a>
          <img className="portfolio__picture" src={link} alt="Адаптивный сайт"></img>
        </li>
        <li className="portfolio__block portfolio__block-line">
          <a className="portfolio__link" href="https://talynik.student.nomoredomains.club">Одностраничное приложение</a>
          <img className="portfolio__picture" src={link} alt="Одностраничное приложение"></img>
        </li>
      </ul>
    </section>
  );
}
export default withRouter(Portfolio);