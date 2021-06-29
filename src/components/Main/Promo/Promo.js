import React from 'react';
import {withRouter} from "react-router-dom";
import poster from '../../../images/poster.svg';

function Promo({onNavTab}) {

  function handleNavTabClick() {
    onNavTab();
  }

  return (
    <section className="promo">
      <div className="promo__block">
        <img src={poster} className="promo__block_poster" alt="Логотип" />
        <div className="promo__block_text">
          <h1 className="promo__block_title">Учебный проект студента факультета Веб-разработки.</h1>
          <p className="promo__block_subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        </div>
      </div>
      <button className="promo__button" type="button" aria-label="Узнать больше" onClick={handleNavTabClick}>Узнать больше</button>
    </section>
  );
}
export default withRouter(Promo);