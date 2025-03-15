import { PayloadAction, UnknownAction } from "@reduxjs/toolkit";
import { CounterState } from "../types";
import { COUNTER_ACTIONS } from "./constants";

const initialState: CounterState = {
  value: 0,
  status: "idle",
};

export function CounterReducer(
  state: CounterState = initialState,
  action: UnknownAction
): CounterState {
  switch (action.type) {
    case COUNTER_ACTIONS.INCREMENT:
      return { ...state, status: "loading" };
    case COUNTER_ACTIONS.INCREMENT_SUCCESS:
      return { ...state, value: state.value + 1, status: "idle" };
    case COUNTER_ACTIONS.DECREMENT:
      return { ...state, status: "loading" };
    case COUNTER_ACTIONS.DECREMENT_SUCCESS:
      return { ...state, value: state.value - 1, status: "idle" };
    case COUNTER_ACTIONS.INCREMENT_ASYNC:
      return { ...state, status: "loading" };
    case COUNTER_ACTIONS.INCREMENT_ASYNC_SUCCESS:
      return {
        ...state,
        value: (action as PayloadAction<number>).payload,
        status: "idle",
      };
    case COUNTER_ACTIONS.INCREMENT_ASYNC_FAILURE:
      return { ...state, status: "failed" };
    case COUNTER_ACTIONS.DECREMENT_ASYNC:
      return { ...state, status: "loading" };
    case COUNTER_ACTIONS.DECREMENT_ASYNC_SUCCESS:
      return {
        ...state,
        value: (action as PayloadAction<number>).payload,
        status: "idle",
      };
    case COUNTER_ACTIONS.RESET:
      return { ...state, status: "loading" };
    case COUNTER_ACTIONS.RESET_SUCCESS:
      return { ...initialState, status: "idle" };
    case COUNTER_ACTIONS.SET_STATUS:
      return {
        ...state,
        status: (action as PayloadAction<CounterState["status"]>).payload,
      };
    case COUNTER_ACTIONS.SET_VALUE:
      return {
        ...state,
        value: (action as PayloadAction<number>).payload,
      };
    default:
      return state;
  }
}
