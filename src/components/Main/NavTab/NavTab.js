import React from 'react';
import {withRouter} from "react-router-dom";

function NavTab() {

  return (
    <section className="navTab">
      <h1 className="navTab__title">Учебный проект студента факультета Веб-разработки.</h1>
      <ul className="navTab__links">
        <li><a className="navTab__link" href="#aboutProject">О проекте</a></li>
        <li><a className="navTab__link navTab__link_centr" href="#techs">Технологии</a></li>
        <li><a className="navTab__link" href="#aboutMe">Студент</a></li>
      </ul>
    </section>
  );
}
export default withRouter(NavTab);