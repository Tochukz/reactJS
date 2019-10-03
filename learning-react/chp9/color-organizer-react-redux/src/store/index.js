/* Store Factory */
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {colors, sort} from './reducers';
import data from '../data';

/* In Redux, middleware is defined as a higher-order function: it’s a function that returns a function that returns a function. 
 * The last function returned is invoked every time an action is dispatched.
 * When this function is invoked, you have access to the action, the store, and the function for sending the action to the next middleware. 
 */
/* A middleware */
const logger = store => next => action => {
    let result;
    console.groupCollapsed("dispatched", action.type);
    console.log('prev state', store.getState());
    console.log('action', action);
    result = next(action);
    console.log('next state', store.getState());
    console.groupEnd();
    return result;
};

/*Another middleware */
const saver = store => next => action => {
    let result = next(action);
    localStorage['redux-store'] = JSON.stringify(store.getState());
    return result;
};

const storeFactory = (initalData = null ) => {
    const storeData = initalData || data;
    return createStore(combineReducers({colors, sort}), storeData, applyMiddleware(logger, saver));
}
export default storeFactory;
