import {call, put, takeEvery} from 'redux-saga/effects'
import {ajaxDelete, ajaxGet, ajaxPost} from "../api/todo.api";
import {
  addTodoActionCreator, deleteTodoActionCreator, fetchTodosActionCreator, SAGA_DELETE_TODO,
  SAGA_FETCH_TODO
} from "./actions";
import {ISagaAddTodoAction} from "../stores/actions-types";
import {SAGA_ADD_TODO} from "../stores/actions";
import {ISagaDeleteTodoAction} from "@/stores/actions-types";

export const sagaFetchTodo = () => ({
  type: SAGA_FETCH_TODO
});

export const sagaAddTodo = (text: string) => ({
  type: SAGA_ADD_TODO, payload: { text }
});

export const sagaDeleteTodo = (id: string) => ({
  type: SAGA_DELETE_TODO, payload: { id }
});

export function* fetchTodo () {
  try {
    const { data } = yield call(ajaxGet);
    yield put(fetchTodosActionCreator(data));
  } catch (e) {
    console.log(e);
  }
}

export function* addTodo (action: ISagaAddTodoAction): IterableIterator<any> {
  try {
    const { data } = yield call(ajaxPost, action.payload.text);
    yield put(addTodoActionCreator(data));
  } catch (e) {
    console.log(e);
  }
}

export function* deleteTodo (action: ISagaDeleteTodoAction): IterableIterator<any> {
  const { id } = action.payload;
  try {
    yield call(ajaxDelete, id);
    yield put(deleteTodoActionCreator(id));
  } catch (e) {
    console.log(e);
  }
}


export default function* rootSaga() {
  yield takeEvery(SAGA_FETCH_TODO, fetchTodo);
  yield takeEvery(SAGA_ADD_TODO, addTodo);
  yield takeEvery(SAGA_DELETE_TODO, deleteTodo);
}
