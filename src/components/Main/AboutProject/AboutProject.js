import React from 'react';
import {withRouter} from "react-router-dom";

function AboutProject() {

  return (
    <section className="aboutProject" id="aboutProject">
      <h2 className="main__section_header">О проекте</h2>
      <div className="aboutProject__block">
        <div className="aboutProject__stage">
          <h3 className="aboutProject__title">Дипломный проект включал 5 этапов</h3>
          <p className="aboutProject__subtitle">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className="aboutProject__time">
          <h3 className="aboutProject__title">На выполнение диплома ушло 5 недель</h3>
          <p className="aboutProject__subtitle">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className="aboutProject__shema">
        <p className="aboutProject__shema_type1">1 неделя</p>
        <p className="aboutProject__shema_type2">4 неделя</p>
        <p className="aboutProject__shema_type3">Back-end</p>
        <p className="aboutProject__shema_type3">Front-end</p>
      </div>
    </section>
  );
}
export default withRouter(AboutProject);