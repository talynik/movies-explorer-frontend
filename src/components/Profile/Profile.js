import React from 'react';
import {Link, withRouter} from 'react-router-dom';

function Profile() {

  return (
    <section className='profile'>
      <h2 className="profile__title">Привет, Анатолий!</h2>
      <ul className="profile__list">
        <li className="profile__data profile__data_line">
          <p className="profile__name">Имя</p>
          <p className="profile__info">user.name</p>
        </li>
        <li className="profile__data">
          <p className="profile__name">E-mail</p>
          <p className="profile__info">user.email</p>
        </li>
      </ul>
      <Link to='/signup' className='profile__link profile__link_edit'>Редактировать</Link>
      <Link to='/main' className='profile__link profile__link_exit'>Выйти из аккаунта</Link>
    </section>
  );
}
export default withRouter(Profile);