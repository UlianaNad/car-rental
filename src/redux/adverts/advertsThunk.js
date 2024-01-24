import { createAsyncThunk } from "@reduxjs/toolkit";
import { advertsApi } from "../../api/api";

export const fetchAdvertsThunk = createAsyncThunk(
  "fetchAdverts",
  async ({ page, limit }, thunkApi) => {
    try {
      const { data } = await advertsApi.get(
        `adverts?page=${page}&limit=${limit}`
      );
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
