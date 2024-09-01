import { createSlice } from "@reduxjs/toolkit";
import { getRequest, postRequest } from "../request/Request";

const initialState = {
  todos: [],
  isLoading: false,
  error: null,
  data: {},
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRequest.fulfilled, (state, { payload }) => {
        state.todos = payload;
      })
      .addCase(postRequest.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postRequest.fulfilled, (state) => {
        state.isLoading = false;
      })
      .addCase(postRequest.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      });
  },
});

export default todoSlice;
