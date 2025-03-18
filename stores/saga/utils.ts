import { RootState } from "../store";

export const createAction = (type: string) => (payload?: any) => ({
  type,
  payload,
});

export const selectDialog = (state: RootState) => state.counter.saga.dialog;
export const selectDialogWithActionsHandler = (state: RootState) =>
  state.counter.saga.dialogWithActionsHandler;
