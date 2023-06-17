import { configureStore } from "@reduxjs/toolkit";
import projectsStatusReducer from "../features/projectsStatusSlice";
import userAuthReducer from "../features/userAuthSlice";
import handleButtonReducer from "../features/handleButtonSlice";
export const store = configureStore({
  reducer: {
    projectsStatus: projectsStatusReducer,
    userAuth: userAuthReducer,
    handleButton: handleButtonReducer,
  },
});
