import React from 'react';
import {withRouter} from "react-router-dom";
import link from '../../../images/link.svg'

function Portfolio() {

  return (
    <section className="portfolio">
      <h3 className="portfolio__header">Портфолио</h3>
      <div className="portfolio__links">
        <a className="portfolio__link" href="https://www.facebook.com/talynik">Статичный сайт<img className="portfolio_picture" src={link} alt="Ссылка"></img></a>
        <img className="portfolio__picture" src={link} alt="Ссылка"></img>
        <a className="portfolio__link_line" href="https://www.facebook.com/talynik">Адаптивный сайт</a>
        <img className="portfolio__picture_line" src={link} alt="Ссылка"></img>
        <a className="portfolio__link_line" href="https://www.facebook.com/talynik">Одностраничное приложение</a>
        <img className="portfolio__picture_line" src={link} alt="Ссылка"></img>
      </div>
    </section>
  );
}
export default withRouter(Portfolio);