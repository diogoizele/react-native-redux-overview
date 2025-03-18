import { all, call, fork, put, select, takeLatest } from "redux-saga/effects";

import {
  incrementAsynchronous,
  IncrementAsynchronousResponse,
} from "@/api/counter";
import { Dispatch } from "@reduxjs/toolkit";
import { Alert } from "react-native";
import { CounterState } from "../types";
import { CounterActions } from "./actions";
import { COUNTER_ACTIONS } from "./constants";

const fakeRequest = new Promise((resolve) => {
  setTimeout(() => {
    resolve(true);
  }, 1000);
});

function* increment() {
  yield put(CounterActions.incrementSuccess());
}

function* decrement() {
  yield put(CounterActions.decrementSuccess());
}

function* incrementAsync() {
  const state: CounterState = yield select((state) => state.counter.saga);

  const { data, status }: IncrementAsynchronousResponse = yield call(
    incrementAsynchronous,
    state.value
  );

  if (status === 200) {
    yield put(CounterActions.incrementAsyncSuccess(data.value!));
  } else {
    yield put(CounterActions.incrementAsyncFailure());
    Alert.alert("Error", data.message!);
  }
}

function* decrementAsync() {
  yield call(() => fakeRequest);

  const state: CounterState = yield select((state) => state.counter.saga);

  yield put(CounterActions.decrementAsyncSuccess(state.value - 1));
}

function* reset() {
  yield put(CounterActions.resetSuccess());
}

function* handleSomething() {
  yield call(() => fakeRequest);

  yield put(CounterActions.showDialog());
  yield put(
    CounterActions.setDialogOptions({
      title: "Dialog Title",
      description: "Dialog Description",
      primaryButton: {
        title: "Reset Counter",
        // https://redux.js.org/faq/actions#why-should-type-be-a-string-why-should-my-action-types-be-constants
        onPress: (dispatch: Dispatch) => {
          dispatch(CounterActions.hideDialog());
          dispatch(CounterActions.reset());
          dispatch(CounterActions.clearDialogOptions());
        },
      },
      secondaryButton: {
        title: "Close Dialog",
        onPress: (dispatch: Dispatch) => {
          dispatch(CounterActions.hideDialog());
          dispatch(CounterActions.clearDialogOptions());
        },
      },
    })
  );
}

function* handleSomethingWithActionsHandler() {
  yield call(() => fakeRequest);

  yield put(CounterActions.showDialogWithActionsHandler());
  yield put(
    CounterActions.setDialogOptionsWithActionsHandler({
      title: "Dialog With Actions Handler Title",
      description: "Dialog Description",
      primaryButton: {
        title: "Reset Counter",
        actions: [
          CounterActions.reset(),
          CounterActions.hideDialogWithActionsHandler(),
          CounterActions.clearDialogOptionsWithActionsHandler(),
        ],
      },
      secondaryButton: {
        title: "Close Dialog",
        actions: [
          CounterActions.hideDialogWithActionsHandler(),
          CounterActions.clearDialogOptionsWithActionsHandler(),
        ],
      },
    })
  );
}

function* watchCounter() {
  yield all([
    takeLatest(COUNTER_ACTIONS.INCREMENT, increment),
    takeLatest(COUNTER_ACTIONS.DECREMENT, decrement),
    takeLatest(COUNTER_ACTIONS.RESET, reset),
    takeLatest(COUNTER_ACTIONS.INCREMENT_ASYNC, incrementAsync),
    takeLatest(COUNTER_ACTIONS.DECREMENT_ASYNC, decrementAsync),
    takeLatest(COUNTER_ACTIONS.HANDLE_SOMETHING, handleSomething),
    takeLatest(
      COUNTER_ACTIONS.HANDLE_SOMETHING_WITH_ACTIONS_HANDLER,
      handleSomethingWithActionsHandler
    ),
  ]);
}

export default function* rootSaga() {
  yield all([fork(watchCounter)]); // use fork to run the saga in the background
}
