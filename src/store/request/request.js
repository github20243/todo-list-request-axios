import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getRequest = createAsyncThunk(
  "todo/getRequest",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get(
        "https://efc974846ba36c93.mokky.dev/todo"
      );
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const postRequest = createAsyncThunk(
  "todo/postRequest",
  async (value, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axios.post(
        "https://efc974846ba36c93.mokky.dev/todo",
        value
      );
      dispatch(getRequest());
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteRequest = createAsyncThunk(
  "todo/deleteRequest",
  async (id, { rejectWithValue, dispatch }) => {
    try {
      await axios.delete(`${"https://efc974846ba36c93.mokky.dev/todo"}/${id}`);
      dispatch(getRequest());
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
