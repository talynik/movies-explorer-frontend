import React from 'react';
import {useHistory} from "react-router-dom";

function Error() {

  const history = useHistory();

  return (
    <section className="error">
      <h1 className="error__cod">404</h1>
      <h2 className="error__text">Страница не найдена</h2>
      <p className="error__back"onClick={history.goBack}>Назад</p>
    </section>
  );
}
export default Error;