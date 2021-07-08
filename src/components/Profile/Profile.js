import React from 'react';
import {withRouter} from 'react-router-dom';
import Preloader from '../Preloader/Preloader';
import formValidator from '../formValidator';
import {validationEditProfile} from '../../utils/utils';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';

function Profile({editProfile, isLoading, handleExit}) {

  //информация о профиле
  const currentUser = React.useContext(CurrentUserContext);

  const [name, setname] = React.useState('');
  const [login, setlogin] = React.useState('');
  const [edit, setedit] = React.useState(false);

  function handleChangeName(evt) {
    setname(evt.target.value);
  }

  function handleChangeLogin(evt) {
    setlogin(evt.target.value);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
  
    editProfile({
      name: name,
      email: login,
    });
  }

  function handleEdit() {
    setedit(true);
  }
  
  React.useEffect(() => {
    edit && formValidator(validationEditProfile, `.profile__form`);
  });

  return (
    <section className='profile'>
      <h2 className="profile__title">Привет, {currentUser.name}!</h2>
      <form className="profile__form">
        <div className="profile__data profile__data_line">
          <p className="profile__name">Имя</p>
          <input  autoComplete="off" type="text" id="name" name="name" className="profile__input" required placeholder={currentUser.name} value={name} onChange={handleChangeName}/>
        </div>  
          <span id="name-error" className="signForm__input-error"></span>
        <div className="profile__data">
          <p className="profile__name">E-mail</p>
          <input  autoComplete="off" type="email" id="login" name="login" className="profile__input" required placeholder={currentUser.email} value={login} onChange={handleChangeLogin}/>
        </div>  
          <span id="login-error" className="signForm__input-error"></span>
        {isLoading && <Preloader/>}
        {edit && <button className='signForm__button' type="submit" aria-label="Войти" onClick={handleSubmit}>Сохраннить</button>}
      </form>
      {!edit &&
        <>
          <p className='profile__link profile__link_edit' onClick={handleEdit}>Редактировать</p>
          <p className='profile__link profile__link_exit' onClick={handleExit}>Выйти из аккаунта</p>
        </>
      }
    </section>
  );
}
export default withRouter(Profile);