import React from 'react';
import {withRouter} from "react-router-dom";
import poster from '../../../images/poster.svg';

function Promo({onNavTab}) {

  function handleNavTabClick() {
    onNavTab();
  }

  return (
    <section className="main__promo">
      <div className="main__promo-block">
        <img src={poster} className="main__promo_block-poster" alt="Логотип" />
        <div className="main__promo_block-text">
          <h1 className="main__promo_block-title">Учебный проект студента факультета Веб-разработки.</h1>
          <p className="main__promo_block-subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        </div>
      </div>
      <button className="main__promo_button" type="button" aria-label="Узнать больше" onClick={handleNavTabClick}>Узнать больше</button>
    </section>
  );
}
export default withRouter(Promo);