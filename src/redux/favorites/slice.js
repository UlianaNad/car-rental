import { createSlice } from '@reduxjs/toolkit';

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    favorites: [],
  },
  reducers: {
    addToFavorites: (state, action) => {
      const isFavoriteExist = state.favorites?.find(
        favorite => favorite.id === action.payload
      );

      if (!isFavoriteExist) {
        state.favorites?.push(action.payload);
      }
    },
    deleteFromFavorites: (state, action) => {
      state.favorites = state.favorites.filter(
        favorite => favorite.id !== action.payload
      );
    },
  },
});

export const { addToFavorites, deleteFromFavorites } = favoritesSlice.actions;

export const favoritesReducer = favoritesSlice.reducer;
