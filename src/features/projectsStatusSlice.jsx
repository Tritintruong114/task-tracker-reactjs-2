import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  active: true,
  cancel: true,
};

export const projectsStatusSlice = createSlice({
  name: "projectsStatus",
  initialState,
  reducers: {},
  extraReducers: {},
});

export default projectsStatusSlice.reducer;
