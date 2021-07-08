import React from 'react';
import {withRouter} from 'react-router-dom';
import SignForm from '../SignForm/SignForm'

function Register({identification, isLoading}) {

  const [name, setname] = React.useState('');

  function handleChangeName(evt) {
    setname(evt.target.value);
  }

  return (
    <SignForm
      title='Добро пожаловать!'
      button='Зарегистрироваться'
      question='Уже зарегистрированы?'
      link='/signin'
      linkText='Войти'
      name={name}
      identification={identification}
      isLoading={isLoading}
    >
      <p className="signForm__placeholder">Имя</p>
      <input  autoComplete="off" type="text" id="name" name="name" className="signForm__input" required value={name} onChange={handleChangeName}/>
      <span id="name-error" className="signForm__input-error"></span>
    </SignForm>
  );
}
export default withRouter(Register);