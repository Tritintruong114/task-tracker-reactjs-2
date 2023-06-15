import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { databases } from "../appwrite";

export const getTodosGroupByColumn = createAsyncThunk(
  "getTodosArray/Todos",
  async () => {
    try {
      const data = await databases.listDocuments(
        import.meta.env.VITE_PUBLIC_DATABASE_ID,
        import.meta.env.VITE_PUBLIC_TODOS_COLLECTION_ID
      );

      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  active: true,
  cancel: true,
  todos: [],
};

export const projectsStatusSlice = createSlice({
  name: "projectsStatus",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTodosGroupByColumn.pending, (state) => {
        return state;
      })
      .addCase(getTodosGroupByColumn.fulfilled, (state, action) => {
        console.log(action.payload);
        state.todos = action.payload.documents;
      })
      .addCase(getTodosGroupByColumn.rejected, (state) => {
        return state;
      });
  },
});

export default projectsStatusSlice.reducer;
