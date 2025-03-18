import { PayloadAction, UnknownAction } from "@reduxjs/toolkit";
import { LibDialogProps } from "../../components/ui/LibDialog";
import { CounterState } from "../types";
import { COUNTER_ACTIONS } from "./constants";

export interface SagaState extends CounterState {
  dialog: {
    visible: boolean;
    options: LibDialogProps;
  };
  dialogWithActionsHandler: {
    visible: boolean;
    options: LibDialogProps;
  };
}

const initialState: SagaState = {
  value: 0,
  status: "idle",
  dialog: {
    visible: false,
    options: {},
  },
  dialogWithActionsHandler: {
    visible: false,
    options: {},
  },
};

export function CounterReducer(
  state = initialState,
  action: UnknownAction
): SagaState {
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
    case COUNTER_ACTIONS.HANDLE_SOMETHING:
      return state;
    case COUNTER_ACTIONS.SHOW_DIALOG:
      return {
        ...state,
        dialog: {
          ...state.dialog,
          visible: true,
        },
      };
    case COUNTER_ACTIONS.HIDE_DIALOG:
      return {
        ...state,
        dialog: {
          ...state.dialog,
          visible: false,
        },
      };
    case COUNTER_ACTIONS.SET_DIALOG_OPTIONS:
      return {
        ...state,
        dialog: {
          ...state.dialog,
          options: (action as PayloadAction<LibDialogProps>).payload,
        },
      };
    case COUNTER_ACTIONS.CLEAR_DIALOG_OPTIONS:
      return {
        ...state,
        dialog: {
          ...state.dialog,
          options: initialState.dialog.options,
        },
      };
    case COUNTER_ACTIONS.HANDLE_SOMETHING_WITH_ACTIONS_HANDLER:
      return state;

    case COUNTER_ACTIONS.SHOW_DIALOG_WITH_ACTIONS_HANDLER:
      return {
        ...state,
        dialogWithActionsHandler: {
          ...state.dialogWithActionsHandler,
          visible: true,
        },
      };
    case COUNTER_ACTIONS.HIDE_DIALOG_WITH_ACTIONS_HANDLER:
      return {
        ...state,
        dialogWithActionsHandler: {
          ...state.dialogWithActionsHandler,
          visible: false,
        },
      };
    case COUNTER_ACTIONS.SET_DIALOG_OPTIONS_WITH_ACTIONS_HANDLER:
      return {
        ...state,
        dialogWithActionsHandler: {
          ...state.dialogWithActionsHandler,
          options: (action as PayloadAction<LibDialogProps>).payload,
        },
      };
    case COUNTER_ACTIONS.CLEAR_DIALOG_OPTIONS_WITH_ACTIONS_HANDLER:
      return {
        ...state,
        dialogWithActionsHandler: {
          ...state.dialogWithActionsHandler,
          options: initialState.dialogWithActionsHandler.options,
        },
      };
    default:
      return state;
  }
}
