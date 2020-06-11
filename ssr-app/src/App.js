import React from 'react';

import Menu from './components/Menu';
import data from './data/recipes';

import './App.css';

function App() {
  return (
    <div className="App">
      <Menu recipes={data} />
    </div>
  );
}

export default App;
