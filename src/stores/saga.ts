import {call, put, takeEvery} from 'redux-saga/effects'
import {ajaxDelete, ajaxGet, ajaxPost, ajaxPut} from "../api/todo.api";
import {
  SAGA_ADD_TODO,
  SAGA_TOGGLE_TODO,
  toggleTodoActionCreate,
  addTodoActionCreator,
  deleteTodoActionCreator,
  fetchTodosActionCreator,
  SAGA_DELETE_TODO,
  SAGA_FETCH_TODO,
  SAGA_UPDATE_TODO,
  updateTodoActionCreator
} from "./actions";
import {ISagaAddTodoAction} from "../stores/actions-types";
import {ISagaDeleteTodoAction, ISagaToggleTodoAction, ISagaUpdateTodoAction} from "@/stores/actions-types";

export const sagaFetchTodo = () => ({
  type: SAGA_FETCH_TODO
});

export const sagaAddTodo = (text: string) => ({
  type: SAGA_ADD_TODO, payload: { text }
});

export const sagaDeleteTodo = (id: string) => ({
  type: SAGA_DELETE_TODO, payload: { id }
});

export const sagaUpdateTodo = ({ text, id }: { text: string; id: string }) => ({
  type: SAGA_UPDATE_TODO, payload: { text, id }
});

export const sagaToggleTodo = (payload: { id: string; isDone: boolean; }) => ({
  type: SAGA_TOGGLE_TODO, payload
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

export function* updateTodo (action: ISagaUpdateTodoAction): IterableIterator<any> {
  try {
    const { data } = yield call(ajaxPut, action.payload);
    yield put(updateTodoActionCreator(data));
  } catch (e) {
    console.log(e);
  }
}

export function* toggleTodo (action: ISagaToggleTodoAction) {
  console.log(action.payload);
  try {
    const { data } = yield call(ajaxPut, action.payload);
    yield put(toggleTodoActionCreate(data));
  } catch (e) {
    console.log(e);
  }
}


export default function* rootSaga() {
  yield takeEvery(SAGA_FETCH_TODO, fetchTodo);
  yield takeEvery(SAGA_ADD_TODO, addTodo);
  yield takeEvery(SAGA_DELETE_TODO, deleteTodo);
  yield takeEvery(SAGA_UPDATE_TODO, updateTodo);
  yield takeEvery(SAGA_TOGGLE_TODO, toggleTodo);
}
