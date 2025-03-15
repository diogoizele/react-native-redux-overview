import { Alert } from "react-native";

import { incrementAsynchronous } from "@/api/counter";
import { AppThunk } from "../store";
import { decrement, setStatus, setValue } from "./counterSlice";
import { createAppAsyncThunk } from "./withTypes";

export const incrementAsync = (): AppThunk => async (dispatch, getState) => {
  dispatch(setStatus("loading"));
  const response = await incrementAsynchronous(
    getState().counter.toolkit.value
  );

  if (response.status === 200) {
    dispatch(setValue(response.data.value!));
    dispatch(setStatus("idle"));
  } else {
    Alert.alert("Error", response.data.message!);
    dispatch(setStatus("failed"));
  }
};

export const decrementAsync = createAppAsyncThunk(
  "counter/decrementAsync",
  async (_, { dispatch, getState }) => {
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(true);
      }, 1000);
    });

    dispatch(decrement());

    return getState().counter.toolkit.value;
  }
);
