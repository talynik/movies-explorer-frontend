import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import SignForm from './SignForm'

function Register({identification}) {

  return (
    <SignForm
      title='Регистрация'
      button='Зарегистрироваться'
      identification={identification}
    >
      <Link to="/signin" className='sign__link'>Уже зарегистрированы? Войти</Link>
    </SignForm>
  );
}
export default withRouter(Register);