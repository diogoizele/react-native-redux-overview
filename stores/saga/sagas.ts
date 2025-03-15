import { all, call, fork, put, select, takeLatest } from "redux-saga/effects";

import {
  incrementAsynchronous,
  IncrementAsynchronousResponse,
} from "@/api/counter";
import { Alert } from "react-native";
import { CounterState } from "../types";
import { CounterActions } from "./actions";
import { COUNTER_ACTIONS } from "./constants";

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
  const fakeRequest = new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, 1000);
  });

  yield call(() => fakeRequest);

  const state: CounterState = yield select((state) => state.counter.saga);

  yield put(CounterActions.decrementAsyncSuccess(state.value - 1));
}

function* reset() {
  yield put(CounterActions.resetSuccess());
}

function* watchCounter() {
  yield all([
    takeLatest(COUNTER_ACTIONS.INCREMENT, increment),
    takeLatest(COUNTER_ACTIONS.DECREMENT, decrement),
    takeLatest(COUNTER_ACTIONS.RESET, reset),
    takeLatest(COUNTER_ACTIONS.INCREMENT_ASYNC, incrementAsync),
    takeLatest(COUNTER_ACTIONS.DECREMENT_ASYNC, decrementAsync),
  ]);
}

export default function* rootSaga() {
  yield all([fork(watchCounter)]); // use fork to run the saga in the background
}
