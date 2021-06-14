import React from 'react';
import {/* Switch, Route, Redirect, useHistory,  */withRouter} from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function App() {

    //переменная состояния авторизации
  const [loggedIn, setLoggedIn] = React.useState(false);

  function handleLoggedIn() {
    setLoggedIn(true);
  }

  return (
    <div className="app">
      <div className="app__content">
        <Header
          loggedIn={loggedIn}
          onMenu={handleLoggedIn}
        />

        <Footer/>
      </div>
    </div>
  );
}

export default withRouter(App);
