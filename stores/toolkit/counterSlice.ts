import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Alert } from "react-native";
import { incrementAsynchronous } from "../../api/counter";
import { AppThunk, RootState } from "./store";

export interface CounterState {
  value: number;
  status: "idle" | "loading" | "failed";
}

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
});

export const {
  decrement,
  increment,
  incrementByAmount,
  reset,
  setValue,
  setStatus,
} = counterSlice.actions;

export const incrementAsync = (): AppThunk => async (dispatch, getState) => {
  dispatch(setStatus("loading"));
  const response = await incrementAsynchronous(getState().counter.value);

  if (response.status === 200) {
    dispatch(setValue(response.data.value!));
    dispatch(setStatus("idle"));
  } else {
    Alert.alert("Error", response.data.message!);
    dispatch(setStatus("failed"));
  }
};

export const selectCount = (state: RootState) => state.counter;

export default counterSlice.reducer;
