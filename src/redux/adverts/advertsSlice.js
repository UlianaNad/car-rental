import { createSlice } from "@reduxjs/toolkit";
import { fetchAdvertsThunk } from "./advertsThunk";

const initialState = {
  adverts: [],
  loading: false,
  error: "",
};
export const advertsSlice = createSlice({
  name: "adverts",
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdvertsThunk.fulfilled, (state, action) => {
        const newAdverts = action.payload;
        const uniqueNewAdverts = newAdverts
          .filter((newAdvert) => {
            return !state.adverts.some(
              (existingAdvert) => existingAdvert.id === newAdvert.id
            );
          })
          .map((item) => ({
            ...item,
            rentalPrice: parseFloat(item.rentalPrice.replace("$", "")),
          }));
        state.adverts = [...state.adverts, ...uniqueNewAdverts];
        state.loading = false;
      })
      .addCase(fetchAdvertsThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAdvertsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const advertsReducer = advertsSlice.reducer;
