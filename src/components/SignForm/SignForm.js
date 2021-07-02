import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import {useHistory} from 'react-router-dom';
import formValidator from '../formValidator';
import {validationSign} from '../../utils/utils';
import logo from '../../logo.svg';

function SignForm({title, button, question, link, linkText, children, identification}) {

  const history = useHistory();

  const [name, setname] = React.useState('');
  const [login, setlogin] = React.useState('');
  const [password, setpassword] = React.useState('');

  function handleChangeName(evt) {
    setname(evt.target.value);
  }

  function handleChangeLogin(evt) {
    setlogin(evt.target.value);
  }

  function handleChangePassword(evt) {
    setpassword(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
  
    identification({
      name: name,
      email: login,
      password: password
    });
  }

  React.useEffect(() => {
    formValidator(validationSign, `.signForm__form`);
  });

  return (
    <section className='signForm'>
      <form className='signForm__form'>
        <img src={logo} className="signForm__logo" alt="Логотип" />
        <h2 className="signForm__title">{title}</h2>
        {history.location.pathname === '/signup' && 
          <>
            <p className="signForm__placeholder">Имя</p>
            <input  autoComplete="off" type="text" id="name" name="name" className="signForm__input" required value={name} onChange={handleChangeName}/>
            <span id="name-error" className="signForm__input-error"></span>
          </>
        }
        <p className="signForm__placeholder">Email</p>
        <input  autoComplete="off" type="email" id="login" name="login" className="signForm__input" required value={login} onChange={handleChangeLogin}/>
        <span id="login-error" className="signForm__input-error"></span>
        <p className="signForm__placeholder">Пароль</p>
        <input  autoComplete="off" type="password" id="password" name="password" className="signForm__input" minLength="8" maxLength="200" required value={password} onChange={handleChangePassword}/>
        <span id="password-error" className="signForm__input-error"></span>
        <button className='signForm__button' type="submit" aria-label="Войти" onClick={handleSubmit}>{button}</button>
      </form>
      <p className="signForm__question">{question}<Link to={link} className='signForm__link'>{linkText}</Link></p>
    </section>
  );
}
export default withRouter(SignForm);