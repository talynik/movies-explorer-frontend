import React from 'react';
import {withRouter} from "react-router-dom";

function AboutProject() {

  return (
    <section className="main__aboutProject">
      <h2 className="main__section_header">О проекте</h2>
      <div className="main__aboutProject_block">
        <div className="main__aboutProject_stage">
          <h3 className="main__aboutProjec_title">Дипломный проект включал 5 этапов</h3>
          <p className="main__aboutProject_subtitle">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
        </div>
        <div className="main__aboutProject_time">
          <h3 className="main__aboutProjec_title">На выполнение диплома ушло 5 недель</h3>
          <p className="main__aboutProject_subtitle">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
        </div>
      </div>
      <div className="main__aboutProject_shema">
        <p className="main__aboutProject_shema-type1">1 неделя</p>
        <p className="main__aboutProject_shema-type2">4 неделя</p>
        <p className="main__aboutProject_shema-type3">Back-end</p>
        <p className="main__aboutProject_shema-type3">Front-end</p>
      </div>
    </section>
  );
}
export default withRouter(AboutProject);