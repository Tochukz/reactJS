import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {addColor, rateColor, removeColor, sortColors} from './store/action-creators';
import {SORTING} from './data/constants'
// import store from './store/store'; //Say Deprecated. A better option may be to use store factory to create store instead.
import createStore from './store';

/* creating a store from store factory */
const store = createStore();


ReactDOM.render(<App />, document.getElementById('root'));


//console.log(`Initial number of Colors: ${store.getState().colors.length}`);

/* subscribing a listener to the store */
//store.subscribe( () => console.log(`Next no of colors: ${store.getState().colors.length}`));

//console.log(store.getState().colors.map(color => color.title));
//console.log(store.getState().colors.map(color => color.rating));
//console.log(store.getState().sort);

/* The subscribe method of the store object returns a function that can be used to unsubscribe the listener*/
const listenerFunc = () => console.log(`Next no of colors: ${store.getState().colors.length}`);
const unSubscribeFunc = store.subscribe(listenerFunc); //subscribe a listener to the store and return an unsubscribe function
unSubscribeFunc(); //This call will unsubscribe the listenerFunc 

//console.log("::::Working with state::::");
store.dispatch({
    type: "ADD_COLOR",
    id: "2222e1p5-3abl-0p523-30e4-8001l8yf2222",
    title: "Looki Pink",
    color: "#F142FF",
    timestamp: "Thu Mar 10 2016 01:11:12 GMT-0800 (PST)"
});
store.dispatch( addColor('redish', '#fa2101'));


//console.log(store.getState().colors.map(color => color.title));

store.dispatch( rateColor( "2222e1p5-3abl-0p523-30e4-8001l8yf2222", 5));
//console.log(store.getState().colors.map(color => color.rating));

store.dispatch( sortColors( SORTING.TITLE));
//console.log(store.getState().sort);

store.dispatch( removeColor("2222e1p5-3abl-0p523-30e4-8001l8yf2222"));

//console.log(store.getState().colors.map(color => color.title));

console.log('Type', typeof storeFactory);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
