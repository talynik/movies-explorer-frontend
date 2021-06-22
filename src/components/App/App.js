import React from 'react';
import {/* Switch, Route, Redirect, useHistory,  */withRouter} from 'react-router-dom';
// import Header from '../Header/Header';
// import Main from '../Main/Main';
// import Movies from '../Movies/Movies';
import Login from '../Login/Login';
// import Footer from '../Footer/Footer';

function App() {

/*     //переменная состояния авторизации
  const [loggedIn, setLoggedIn] = React.useState(true);

  function handleLoggedIn() {
    setLoggedIn(true);
  } */

  return (
    <div className="app">
      <div className="app__content">
        {/* <Header
          loggedIn={loggedIn}
          onMenu={handleLoggedIn}
        /> */}

        {/* <Main/> */}

        {/* <Movies/> */}
        <Login/>

        {/* <Footer/> */}
      </div>
    </div>
  );
}

export default withRouter(App);
