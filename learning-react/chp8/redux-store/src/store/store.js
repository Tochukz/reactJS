/* Consider this store deprecated in favor of the store factory at src/store/index.js */
import {createStore, combineReducers, compose} from 'redux';
import {colors, sort} from './reducers';
import colorsData from '../data/colors-data';
import { addColor } from './action-creators';

const data = () => (localStorage['redux-store'])? JSON.parse(localStorage['redux-store']) : colorsData;
//const data = () => (localStorage['redux-store'])? JSON.parse(localStorage['redux-store']) : {};

const store = createStore(
    combineReducers({colors, sort}), data()
);

/* Saving state to local storage */
store.subscribe( () => localStorage['redux-store'] = JSON.stringify(store.getState()));

/* dispatching actions on the store: actions will add color to the colors object array */
const populate = compose(
  () => console.log('Total Colors', store.getState().colors.length),
  () => store.dispatch(addColor("Big Blue", "#0000FF")),
  () => store.dispatch(addColor("Tomato", "#990000")),
  () => store.dispatch(addColor("lawn", "#009900")),
  () => store.dispatch(addColor("Party Pink", "#F142FF"))
)
populate()

export default store;