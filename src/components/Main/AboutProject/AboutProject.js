import React from 'react';
import {withRouter} from "react-router-dom";

function AboutProject() {

  return (
    <section className="main__promo">
      <div className="main__promo-block">
        <div className="main__promo_block-text">
          <h1 className="main__promo_block-title">Учебный проект студента факультета Веб-разработки.</h1>
          <p className="main__promo_block-subtitle">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        </div>
      </div>
    </section>
  );
}
export default withRouter(AboutProject);