import { authReducer } from './auth-slice';
import { counterReducer } from './counter-slice';
import { configureStore } from '@reduxjs/toolkit';

// This is how to merge multiple reducers into one -
// - THE STORE ALWAYS ACCEPTS ONLY 1 REDUCER FN -
const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});

export default store;
