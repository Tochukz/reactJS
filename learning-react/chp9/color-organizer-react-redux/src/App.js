import React from 'react';

import SortMenuContainer from'./containers/sort-menu-container';
import AddColorFormContainer from './containers/add-color-form-container'
import ColorListContainer from './containers/color-list-container';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <SortMenuContainer />
      <AddColorFormContainer />
      <ColorListContainer />
    </div>
  );
}

export default App;
