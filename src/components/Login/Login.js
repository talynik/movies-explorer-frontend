import React from 'react';
import {withRouter} from 'react-router-dom';
import SignForm from '../SignForm/SignForm'

function Login() {

  return (
    <SignForm
      title='Рады видеть!'
      button='Войти'
      question='Ещё не зарегистрированы?'
      link='/signup'
      linkText='Регистрация'
      // identification={identification}
    >
    </SignForm>
  );
}
export default withRouter(Login);