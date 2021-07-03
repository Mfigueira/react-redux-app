import { authReducer } from "./auth-slice";
import { counterReducer } from "./counter-slice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});

export default store;
