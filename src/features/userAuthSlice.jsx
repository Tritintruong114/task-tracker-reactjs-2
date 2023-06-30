import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isAuth: false,
  isRegister: false,
  isLogOut: false,
  email: "",
  userName: "",
  techStack: [],
};

export const userAuthSlice = createSlice({
  name: "projectsStatus",
  initialState,
  reducers: {
    registerNewUser: (state, action) => {
      console.log(action.payload);
      state.isRegister = false;
      state.email = action.payload.email;
      state.userName = action.payload.name;
    },
    logInUser: (state) => {
      state.isAuth = true;
      console.log(state.isAuth);
    },
    logOutUser: (state) => {
      state.isAuth = false;
      state.isRegister = false;
      state.isLogOut = true;
    },
    register: (state) => {
      state.isRegister = true;
    },
  },
  extraReducers: {},
});

export const { registerNewUser, logInUser, logOutUser, register } =
  userAuthSlice.actions;
export default userAuthSlice.reducer;
