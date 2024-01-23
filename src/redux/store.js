import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { advertsReducer } from "./adverts/advertsSlice";
import { favoritesReducer } from "./favorites/favoritesSlice";
import { filterReducer } from "./filter/filterSlice";

const rootReducer = combineReducers({
  adverts: advertsReducer,
  favorites: favoritesReducer,
  filter: filterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== "production",
});
