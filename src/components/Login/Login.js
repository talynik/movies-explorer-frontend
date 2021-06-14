import React from 'react';
import {withRouter} from 'react-router-dom';
import SignForm from './SignForm'

function Login({identification}) {

  return (
    <SignForm
      title='Вход'
      button='Войти'
      identification={identification}
    >
    </SignForm>
  );
}
export default withRouter(Login);