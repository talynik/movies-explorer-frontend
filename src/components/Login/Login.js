import React from 'react';
import {withRouter} from 'react-router-dom';
import SignForm from '../SignForm/SignForm'

function Login({identification, isLoading}) {

  return (
    <SignForm
      title='Рады видеть!'
      button='Войти'
      question='Ещё не зарегистрированы?'
      link='/signup'
      linkText='Регистрация'
      identification={identification}
      isLoading={isLoading}
    >
    </SignForm>
  );
}
export default withRouter(Login);