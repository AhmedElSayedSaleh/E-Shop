import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchBags = createAsyncThunk("bags/fetchBags", async () => {
  try {
    const { data } = await axios.get(
      "https://mocki.io/v1/5b84614a-f98a-477c-8b21-4a5fc0dcc65e"
    );
    return data;
  } catch (error) {
    return error.response && error.response.data.message
      ? error.response.data.message
      : error.message;
  }
});

const initialState = {
  loading: false,
  error: null,
  data: null,
};

const BagsSlice = createSlice({
  name: "bags",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchBags.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.data = [];
    });
    builder.addCase(fetchBags.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.data = action.payload;
    });
    builder.addCase(fetchBags.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error;
      state.data = [];
    });
  },
});

export const {} = BagsSlice.actions;

export default BagsSlice.reducer;
