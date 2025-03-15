import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../store";
import { CounterState } from "../types";
import * as thunks from "./thunks";

export * from "./thunks";

const initialState: CounterState = {
  value: 0,
  status: "idle",
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
    setValue: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
    reset: (state) => {
      state.value = 0;
    },
    setStatus: (state, action: PayloadAction<CounterState["status"]>) => {
      state.status = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(thunks.decrementAsync.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(thunks.decrementAsync.fulfilled, (state, action) => {
        state.value = action.payload;
        state.status = "idle";
      })
      .addCase(thunks.decrementAsync.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});

export const {
  decrement,
  increment,
  incrementByAmount,
  reset,
  setValue,
  setStatus,
} = counterSlice.actions;

export const selectCount = (state: RootState) => state.counter;

export default counterSlice.reducer;
