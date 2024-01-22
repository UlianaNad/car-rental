import { createSlice } from "@reduxjs/toolkit";

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    favorites: localStorage.getItem("favorites")
      ? JSON.parse(localStorage.getItem("favorites"))
      : [],
  },
  reducers: {
    addToFavorites: (state, action) => {
      const isFavoriteExist = state.favorites?.find(
        (favorite) => favorite.id === action.payload.id
      );
      if (!isFavoriteExist) {
        let newFavorite = { ...action.payload };
        state.favorites?.push(newFavorite);
        localStorage.setItem("favorites", JSON.stringify(state.favorites));
      }
    },
    deleteFromFavorites: (state, action) => {
      state.favorites = state.favorites?.filter(
        (favorite) => favorite.id !== action.payload.id
      );
      localStorage.setItem("favorites", JSON.stringify(state.favorites));
    },
  },
});

export const { addToFavorites, deleteFromFavorites } = favoritesSlice.actions;

export const favoritesReducer = favoritesSlice.reducer;
