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

const handleSomething = createAction(COUNTER_ACTIONS.HANDLE_SOMETHING);
const showDialog = createAction(COUNTER_ACTIONS.SHOW_DIALOG);
const hideDialog = createAction(COUNTER_ACTIONS.HIDE_DIALOG);
const setDialogOptions = createAction(COUNTER_ACTIONS.SET_DIALOG_OPTIONS);
const clearDialogOptions = createAction(COUNTER_ACTIONS.CLEAR_DIALOG_OPTIONS);

const handleSomethingWithActionsHandler = createAction(
  COUNTER_ACTIONS.HANDLE_SOMETHING_WITH_ACTIONS_HANDLER
);
const showDialogWithActionsHandler = createAction(
  COUNTER_ACTIONS.SHOW_DIALOG_WITH_ACTIONS_HANDLER
);
const hideDialogWithActionsHandler = createAction(
  COUNTER_ACTIONS.HIDE_DIALOG_WITH_ACTIONS_HANDLER
);
const setDialogOptionsWithActionsHandler = createAction(
  COUNTER_ACTIONS.SET_DIALOG_OPTIONS_WITH_ACTIONS_HANDLER
);
const clearDialogOptionsWithActionsHandler = createAction(
  COUNTER_ACTIONS.CLEAR_DIALOG_OPTIONS_WITH_ACTIONS_HANDLER
);

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
  handleSomething,
  showDialog,
  hideDialog,
  setDialogOptions,
  clearDialogOptions,
  handleSomethingWithActionsHandler,
  showDialogWithActionsHandler,
  hideDialogWithActionsHandler,
  setDialogOptionsWithActionsHandler,
  clearDialogOptionsWithActionsHandler,
};
