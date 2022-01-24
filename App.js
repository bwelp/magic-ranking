import React,  { useState } from 'react';

import './App.css';

import Logo from './components/Logo';
import Navigation from './components/Navigation';
// import Headline from './components/Headline';
import Content from './components/Content';

function App() {
  const [navActive, setNavActive] = useState("start");

  const navActiveDataHandler = (navAct) => {
    setNavActive(navAct);
  };

  return (
    <div id="app_container">
      <div id="fixed_content">
        <Logo />
        <Navigation onNavActiveData={navActiveDataHandler} />
      </div>
      <div id="variable_content">
        {/* <Headline items={navActive} /> */}
        <Content items={navActive} />
      </div>
    </div>
  );
}

export default App;
