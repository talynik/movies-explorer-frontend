import React from 'react';
import {withRouter} from 'react-router-dom';
// import formValidator from './formValidator';
// import {validationSign} from '../utils/utils';

function SignForm({title, button, children, identification}) {

  const [login, setlogin] = React.useState('');
  const [password, setpassword] = React.useState('');

  function handleChangeLogin(evt) {
    setlogin(evt.target.value);
  }

  function handleChangePassword(evt) {
    setpassword(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
  
    identification({
      email: login,
      password: password
    });
  }

  // React.useEffect(() => {
  //   formValidator(validationSign, `.sign__form`);
  // });

  return (
    <section className='sign'>
      <form className='sign__form'>
        <h2 className="sign__title">{title}</h2>
        <input  autoComplete="off" type="email" id="login" name="login" className="sign__input" placeholder="Email" required value={login} onChange={handleChangeLogin}/>
        <span id="login-error" className="popup__visible-error"></span>
        <input  autoComplete="off" type="password" id="password" name="password" className="sign__input" placeholder="Пароль" minLength="8" maxLength="200" required value={password} onChange={handleChangePassword}/>
        <span id="password-error" className="popup__visible-error"></span>
        <button className='sign__button' type="submit" aria-label="Войти" onClick={handleSubmit}>{button}</button>
        {children}
      </form>
    </section>
  );
}
export default withRouter(SignForm);