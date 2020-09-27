import { configureStore } from '@reduxjs/toolkit';

//import reducer from './reducer';
import counterSlice from './reducer';

const store = configureStore({
    reducer: counterSlice.reducer,
});

export default store;