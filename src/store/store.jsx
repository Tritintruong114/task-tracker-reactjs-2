import { configureStore } from "@reduxjs/toolkit";
import projectsStatusReducer from "../features/projectsStatusSlice";
export const store = configureStore({
  reducer: {
    projectsStatus: projectsStatusReducer,
  },
});
