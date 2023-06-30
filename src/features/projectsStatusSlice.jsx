import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { client, databases } from "../appwrite";

export const getTestGroupByColumn = createAsyncThunk(
  "getTodosArray/Todos",
  async () => {
    try {
      client
        .setEndpoint(import.meta.env.VITE_PUBLIC_ENDPOINT)
        .setProject(import.meta.env.VITE_PUBLIC_PROJECT);
      
        const track = await databases.listDocuments(
        import.meta.env.VITE_PUBLIC_DATABASE_ID,
        import.meta.env.VITE_PUBLIC_COLLECTION
      );
      // return data;
      return track;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  active: true,
  cancel: true,
  todos: [],
  todo: [],
  inprogess: [],
  done: [],
  hideRightNavBar: false,
};

export const projectsStatusSlice = createSlice({
  name: "projectsStatus",
  initialState,
  reducers: {
    hideNavBar: (state, action) => {
      console.log(action.payload);
      state.hideRightNavBar = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTestGroupByColumn.pending, (state) => {
        return state;
      })
      .addCase(getTestGroupByColumn.fulfilled, (state, action) => {
        console.log(action.payload);
      })
      .addCase(getTestGroupByColumn.rejected, (state) => {
        return state;
      });
  },
});

export const { hideNavBar } = projectsStatusSlice.actions;
export default projectsStatusSlice.reducer;
