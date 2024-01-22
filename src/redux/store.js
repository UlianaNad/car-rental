import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { advertsReducer } from "./adverts/advertsSlice";
import { favoritesReducer } from "./favorites/favoritesSlice";

const rootReducer = combineReducers({
  adverts: advertsReducer,
  favorites: favoritesReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});
