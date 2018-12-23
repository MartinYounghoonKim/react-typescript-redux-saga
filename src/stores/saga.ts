import {call, put, takeEvery} from 'redux-saga/effects'
import { ajaxGet } from "../api/todo.api";
import {fetchTodosActionCreator} from "./actions";

export function* fetchTodo (fetchTodos: any) {
  try {
    const { data } = yield call(ajaxGet);
    yield put(fetchTodosActionCreator(data));
  } catch (e) {
    console.log(e);
  }
}

export default function* rootSaga() {
  yield takeEvery("@SAGA/TODO/FETCH_TODO", fetchTodo);
}
