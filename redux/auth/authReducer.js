import { createSlice } from "@reduxjs/toolkit";

const state = {
  userId: null,
  name: null,
  stateChange: false,
  photoUri: "",
};

const actions = {
  updateUserProfile: (state, { payload }) => ({
    ...state,
    userId: payload.userId,
    name: payload.name,
    photoURL: payload.photoURL,
  }),
  authStateChange: (state, { payload }) => ({
    ...state,
    stateChange: payload.stateChange,
  }),
  authSignOut: () => state,
  setPhotoUri: (state, { payload }) => ({
    ...state,
    photoUri: payload.photoUri,
  }),
};

export const authSlice = createSlice({
  name: "auth",
  initialState: state,
  reducers: actions,
});
