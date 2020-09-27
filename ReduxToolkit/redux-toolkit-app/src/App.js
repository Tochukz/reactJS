import React, { useState } from 'react';
import './App.css';
import  store from './store';

//import {increment, decrement} from './store/actions';
import counterSlice from './store/reducer'; 

function App() {
  const [score, changeSCore] = useState(store.getState());

  const up = () => {
    //store.dispatch(increment());
    store.dispatch(counterSlice.actions.increment())
    const state = store.getState();
    changeSCore(state);
  };

  const down = () => {
    //store.dispatch(decrement())
    store.dispatch(counterSlice.actions.decrement());
    const state = store.getState();
    changeSCore(state);
  };

  return (
    <div className="App">
      <p>Score: <input value={score} readOnly /> </p>
      <p>
        <input type="button" value="+" onClick={up} /> {' | '}
        <input type="button" value="-" onClick={down} />
      </p>
    </div>
  );
}

export default App;
