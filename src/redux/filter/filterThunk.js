import { createAsyncThunk } from "@reduxjs/toolkit";
import { advertsApi } from "../../api/api";

export const fetchAllAdvertsThunk = createAsyncThunk(
  "fetchAllAdverts",
  async (_, thunkApi) => {
    try {
      const { data } = await advertsApi.get(`adverts`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
