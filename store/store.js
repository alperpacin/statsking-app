import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import searchbarSlice from "./slices/searchBarSlice";
import routeChangeMiddleware from "./middleware/routeChangeMiddleware ";

const reducer = combineReducers({
  user: userSlice.reducer,
  searchBar: searchbarSlice.reducer,
});

const store = configureStore({
  reducer: reducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(routeChangeMiddleware),
});

export default store;
