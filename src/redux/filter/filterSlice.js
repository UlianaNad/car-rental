import { createSlice } from "@reduxjs/toolkit";
import { fetchAllAdvertsThunk } from "./filterThunk";

const initialState = {
  filter: [],
  loading: false,
  error: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState: initialState,
  reducers: {
    cleanFilterState: (state) => {
      state.filter = initialState.filter;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllAdvertsThunk.fulfilled, (state, action) => {
        const newFilter = action.payload;
        const uniqueNewFilter = newFilter
          .filter((newAdvert) => {
            return !state.filter.some(
              (existingAdvert) => existingAdvert.id === newAdvert.id
            );
          })
          .map((item) => ({
            ...item,
            rentalPrice: parseFloat(item.rentalPrice.replace("$", "")),
          }));
        state.filter = [...state.filter, ...uniqueNewFilter];
        state.loading = false;
      })
      .addCase(fetchAllAdvertsThunk.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAllAdvertsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { cleanFilterState } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
