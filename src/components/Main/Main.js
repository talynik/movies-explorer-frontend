import React from 'react';
import { withRouter} from 'react-router-dom';
import Promo from './Promo/Promo';
import NavTab from './NavTab/NavTab';
import AboutProject from './AboutProject/AboutProject';
import Techs from './Techs/Techs';
import AboutMe from './AboutMe/AboutMe';
import Portfolio from './Portfolio/Portfolio';

function Main() {

  //переменная состояния навигации
  const [isNavTab, setIsNavTab] = React.useState(false);

  function handleOnNavTab() {
    setIsNavTab(true);
  }

  return (
    <main className="main">
      {!isNavTab ? 
        <Promo
          onNavTab={handleOnNavTab}
        /> : 
        <NavTab/>
      }
      <AboutProject/>
      <Techs/>
      <AboutMe/>
      <Portfolio/>
    </main>
  );
}

export default withRouter(Main);