import { createReducer, createSlice } from '@reduxjs/toolkit';
import {increment, decrement} from './actions';

// Old style of creating reducers
/*
const reducer = function(state = 0, action) {
    // You can get the action type string by either call the type property or the toString() method of the action function
    switch (action.type) {
        case increment.type:  
            return state + 1
        case decrement.toString():
            return state - 1
        default:
            return state
    }
}
*/

// Using the createReducer function
/*
const reducer = createReducer(0, {
    [increment.type]: state => state + 1,
    [decrement]: state => state - 1,
});
*/
// Here we use the "computed property" syntax, [variable], to name the properties e.g [increment.type]. 
// We can also use the action directly [increase] or [decrease] be to toString() method od the variable will be called which also returns the type

// Let take it one step futher by using createSlice
const counterSlice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        increment: state => state + 1,
        decrement: state => state - 1,
    }
});
// Here the keys of the reducers object bear the same same as the action function. 
// Therefore an action can be dispatched like this: store.dispatch(counterSlice.actions.increment())
// counterSlice also holds the reducer function as counterSlice.reducer 

//export default reducer

export default counterSlice;