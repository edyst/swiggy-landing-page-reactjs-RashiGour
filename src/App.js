import React from 'react';
import ic from './ic.ico';
import './App.css';

import {Home} from './components/Home';
import {Advn} from './components/Advn';
import {Store} from './components/Store';
import {About} from './components/About';
import {Footercity} from './components/Footercity';
import {Social} from './components/Social';

function App() {
  return (
    <div className="container">
      <Home/>
      <Advn/>
      <Store/>
      <About/>
      <Footercity/>
      <Social/>
    </div>
  );
}

export default App;
