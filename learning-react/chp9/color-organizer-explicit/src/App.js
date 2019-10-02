import React, { Component } from 'react';

import AddColorForm from './components/add-color-form';
import ColorList from './components/color-list';
import SortMenu from './components/sort-menu';

import './App.css';

const App = ({ store }) => {
  return (
    <div className="App">
      <SortMenu store={store} />
      <AddColorForm store={store} />
      <ColorList store={store} />
    </div>
  );
}

export default App;
