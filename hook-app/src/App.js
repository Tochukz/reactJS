import React from 'react';
import './App.css';

import Book from './components/Book';
import Time from './components/Time';
import Car from './components/Car';
import GrandFather from './components/family/GrandFather';

function App() {
  return (
    <div className="container-fluid pt-4">
      <div className="row">
        <div className="col-sm-4">
          <Book />          
        </div>
        <div className="col-sm-3">
          <Time />
        </div>
        <div className="col-sm-4">
          <Car />
        </div>
      </div>    
      <div className="row">
        <div className="col-sm-4">
          <GrandFather />
        </div>
      </div>
    </div>
  );
}

export default App;
