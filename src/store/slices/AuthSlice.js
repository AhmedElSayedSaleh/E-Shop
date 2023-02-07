import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  displayName: null,
  email: null,
  photoURL: null,
  uid: null,
};

const AuthSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    setUserAuth: (state, action) => action.payload,
  },
});

export const { setUserAuth } = AuthSlice.actions;

export default AuthSlice.reducer;
