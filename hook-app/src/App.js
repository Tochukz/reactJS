import React from 'react';
import './App.css';

import Book from './components/Book';
import Time from './components/Time';

function App() {
  return (
    <div className="container-fluid pt-4">
      <div className="row">
        <div className="col-sm-4">
          <Book />          
        </div>
        <div className="col-sm-4">
          <Time />
        </div>
      </div>    
    </div>
  );
}

export default App;
