import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async (arg, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios.get(
        "https://mocki.io/v1/c2b9a068-ebec-4b92-b5b7-39a1247ae1c6"
      );
      return data;
    } catch (error) {
      return rejectWithValue(
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
      );
    }
  }
);

const initialState = {
  loading: false,
  error: null,
  data: null,
};

const ProductsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
      // state.error = null;
      // state.data = [];
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      // state.error = null;
      state.data = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      // state.data = [];
    });
  },
});

// export const {} = ProductsSlice.actions;

export default ProductsSlice.reducer;
