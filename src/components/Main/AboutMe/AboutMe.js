import React from 'react';
import {withRouter} from "react-router-dom";
import picture from '../../../images/foto.jpg';

function AboutMe() {

  return (
    <section className="aboutMe" id="aboutMe">
      <h2 className="section__header">Студент</h2>
      <div className="aboutMe__blok">
        <img className="aboutMe__picture" src={picture} alt="Фото профиля"></img>
        <div className="aboutMe__about">
          <h3 className="aboutMe__title">Анатолий</h3>
          <p className="aboutMe__subtitle">Фронтенд-разработчик, 39 лет</p>
          <p className="aboutMe__text">Я родился и вырос в городе Набережные Челны. Отслужив срочную службу, решил остаться на контракт. Так и провёл 20 лет в армии. Параллельно продолжал учиться по разным специальностям, но служебные обстоятельства не давали полноценно получить образованние. В итоге закончил только факультет электроэнергетики КФУ. Всегда интересовался программированием. Сейчас, будучи военным пенсионером, решил воплотить мечты в реальность и стать Веб-разработчиком.</p>
          <ul className="aboutMe__list">
            <li><a className="aboutMe__link" href="https://www.facebook.com/talynik">Facebook</a></li>
            <li><a className="aboutMe__link" href="https://github.com/talynik/movies-explorer-frontend">Github</a></li>
          </ul>  
        </div>
      </div>
    </section>
  );
}
export default withRouter(AboutMe);