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
      // return data;
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
      .addCase(getTodosGroupByColumn.pending, (state) => {
        return state;
      })
      .addCase(getTodosGroupByColumn.fulfilled, (state, action) => {
        state.todo = action.payload.documents.filter(
          (todo) => todo.status == "todo"
        );
        console.log(state.todo);
        state.inprogess = action.payload.documents.filter(
          (todo) => todo.status == "inprogress"
        );
        state.done = action.payload.documents.filter(
          (todo) => todo.status == "done"
        );
        state.todos = action.payload.documents;
      })
      .addCase(getTodosGroupByColumn.rejected, (state) => {
        return state;
      });
  },
});

export const { hideNavBar } = projectsStatusSlice.actions;
export default projectsStatusSlice.reducer;
