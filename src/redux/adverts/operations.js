import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// const advertsApi = axios.create({
//   baseURL: 'https://65a930ca219bfa371868b9c0.mockapi.io/',
// });

// export const fetchAdvertsThunk = createAsyncThunk(
//   'fetchAdverts',
//   async ({ page = 1, limit = 12 }, thunkApi) => {
//     try {
//       const { data } = await advertsApi.get('adverts', {
//         params: {
//           page,
//           limit,
//         },
//       });
//       return data;
//     } catch (error) {
//       return thunkApi.rejectWithValue(error.message);
//     }
//   }
// );

const advertsApi = axios.create({
  baseURL: 'https://65a930ca219bfa371868b9c0.mockapi.io/',
});

export const fetchAdvertsThunk = createAsyncThunk(
  'fetchAdverts',
  async ({ page = 1, limit = 12 }, thunkApi) => {
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
