import { configureStore } from "@reduxjs/toolkit";
import projectsStatusReducer from "../features/projectsStatusSlice";
import userAuthReducer from "../features/userAuthSlice";
export const store = configureStore({
  reducer: {
    projectsStatus: projectsStatusReducer,
    userAuth: userAuthReducer,
  },
});
