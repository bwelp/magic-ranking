import React,  { useState } from 'react';

import Logo from './components/Logo';
import Navigation from './components/Navigation';
import Headline from './components/Headline';
import Content from './components/Content';

function App() {
  const [navActive, setNavActive] = useState("start");

  // const text = {
  //   headline: "Bestenliste",
  // };

  const navActiveDataHandler = (navAct) => {
    setNavActive(navAct);
  };

  return (
    <div>
      <Logo />
      <Navigation onNavActiveData={navActiveDataHandler} />
      <Headline items={navActive} />
      <Content items={navActive} />
    </div>
  );
}

export default App;
