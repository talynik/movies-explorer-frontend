import React from 'react';
import {withRouter} from "react-router-dom";

function Techs() {

  return (
    <section className="main__techs">
      <h2 className="main__section_header">Технологии</h2>
      <h3 className="main__techs_title">7 технологий</h3>
      <p className="main__techs_subtitle">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
      <ul className="main__techs_list">
        <li className="main__techs_element">HTML</li>
        <li className="main__techs_element">CSS</li>
        <li className="main__techs_element">JS</li>
        <li className="main__techs_element">React</li>
        <li className="main__techs_element">Git</li>
        <li className="main__techs_element">Express.js</li>
        <li className="main__techs_element">mongoDB</li>
      </ul>
    </section>
  );
}
export default withRouter(Techs);