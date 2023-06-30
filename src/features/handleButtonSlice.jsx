import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showUserProfile: false,
  showHome: true,
  showFolder: false,
  showComment: false,
  showListFriends: false,
  showChart: false,
  showHelp: false,
  showSetting: false,
};

export const handleButtonSlice = createSlice({
  name: "handle Button",
  initialState,
  reducers: {
    showProfile: (state, action) => {
      console.log(action.payload);
      state.showHome = false;
      state.showUserProfile = action.payload;
    },
  },
});

export const { showProfile } = handleButtonSlice.actions;
export default handleButtonSlice.reducer;
