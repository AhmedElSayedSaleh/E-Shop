import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const ErrorAlertSlice = createSlice({
  name: "errorAlert",
  initialState,
  reducers: {
    setError: (state, action) => action.payload,
  },
});

export const { setError } = ErrorAlertSlice.actions;

export default ErrorAlertSlice.reducer;
