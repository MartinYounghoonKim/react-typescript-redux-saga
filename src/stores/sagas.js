import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import ajaxGet from "../api/todo.api";

export function* fetchTodos (action) {
  try {
    const { data } = yield call(ajaxGet);
    yield put({ type: "FETCH", payload: data } );
    // const todos
  } catch (e) {
    console.log(e);
  }
}

export default fetchTodos;
