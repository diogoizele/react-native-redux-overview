import { COUNTER_ACTIONS } from "./constants";
import { createAction } from "./utils";

const increment = createAction(COUNTER_ACTIONS.INCREMENT);
const incrementSuccess = createAction(COUNTER_ACTIONS.INCREMENT_SUCCESS);
const decrement = createAction(COUNTER_ACTIONS.DECREMENT);
const decrementSuccess = createAction(COUNTER_ACTIONS.DECREMENT_SUCCESS);
const incrementAsync = createAction(COUNTER_ACTIONS.INCREMENT_ASYNC);
const incrementAsyncSuccess = createAction(
  COUNTER_ACTIONS.INCREMENT_ASYNC_SUCCESS
);
const incrementAsyncFailure = createAction(
  COUNTER_ACTIONS.INCREMENT_ASYNC_FAILURE
);
const decrementAsync = createAction(COUNTER_ACTIONS.DECREMENT_ASYNC);
const decrementAsyncSuccess = createAction(
  COUNTER_ACTIONS.DECREMENT_ASYNC_SUCCESS
);
const reset = createAction(COUNTER_ACTIONS.RESET);
const resetSuccess = createAction(COUNTER_ACTIONS.RESET_SUCCESS);
const setStatus = createAction(COUNTER_ACTIONS.SET_STATUS);
const setValue = createAction(COUNTER_ACTIONS.SET_VALUE);

export const CounterActions = {
  increment,
  incrementSuccess,
  decrement,
  decrementSuccess,
  incrementAsync,
  incrementAsyncSuccess,
  incrementAsyncFailure,
  decrementAsync,
  decrementAsyncSuccess,
  reset,
  resetSuccess,
  setStatus,
  setValue,
};
