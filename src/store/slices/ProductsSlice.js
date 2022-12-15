import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try {
      const { data } = await axios.get(
        "https://mocki.io/v1/c2b9a068-ebec-4b92-b5b7-39a1247ae1c6"
      );
      return data;
    } catch (error) {
      return error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    }
  }
);

const ProductsSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const {} = ProductsSlice.actions;

export default ProductsSlice.reducer;
