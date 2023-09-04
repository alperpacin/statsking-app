import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";

const reducer = combineReducers({
  user: userSlice.reducer,
});

const store = configureStore({
  reducer: reducer,
});

export default store;
