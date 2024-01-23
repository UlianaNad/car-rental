import { createSlice } from "@reduxjs/toolkit";
import { fetchAllAdvertsThunk, fetchFilteredAdvertsThunk } from "./filterThunk";

const initialState = {
  filter: [],
  loading: false,
  error: "",
};
export const filterSlice = createSlice({
  name: "filter",
  initialState: initialState,
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilteredAdvertsThunk.fulfilled, (state, action) => {
        // const newFilter = action.payload;
        // const uniqueNewFilter = newFilter.filter((newAdvert) => {
        //   return !state.filter.some(
        //     (existingAdvert) => existingAdvert.id === newAdvert.id
        //   );
        // });
        // state.filter = [...state.filter, ...uniqueNewFilter];
        state.filter = action.payload;
        state.loading = false;
      })
      .addCase(fetchFilteredAdvertsThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchFilteredAdvertsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const filterReducer = filterSlice.reducer;
