import React from 'react';
import {Link, withRouter} from 'react-router-dom';

function Profile() {

  return (
    <section className='profile'>
      <h2 className="profile__title">Привет, Анатолий!</h2>
      <div>
        <p className="profile__placeholder">Имя</p>
        <p className="profile__placeholder">Email</p>
      </div>
      <Link to='/signup' className='profile__link'>Редактировать</Link>
    </section>
  );
}
export default withRouter(Profile);