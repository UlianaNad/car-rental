import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

const advertsApi = axios.create({
  baseURL: "https://65a930ca219bfa371868b9c0.mockapi.io/",
});

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

export const fetchFilteredAdvertsThunk = createAsyncThunk(
  "fetchFilteredAdverts",
  async (filter, thunkApi) => {
    console.log(filter);
    try {
      const { data } = await advertsApi.get(`adverts?make=${filter.make}`);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
