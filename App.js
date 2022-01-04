import React from 'react';

import Logo from './components/Logo';
import Navigation from './components/Navigation';
import Headline from './components/Headline';

function App() {
  const text = {
    headline: 'Bestenliste'
  };

  return (
    <div>
      <Logo />
      <Navigation />
      <Headline items={text}/>
    </div>
  );
}

export default App;
