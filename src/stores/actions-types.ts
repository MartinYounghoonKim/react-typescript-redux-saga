import {ITodo} from "../interfaces/models";

export const ADD_TODO = "TODO/ADD_TODO";
export const SAGA_ADD_TODO = "SAGA@TODO/ADD_TODO";

export const DELETE_TODO = "DELETE_TODO";
export const SAGA_DELETE_TODO = "SAGA@DELETE_TODO";

export const UPDATE_TODO = "UPDATE_TODO";
export const SAGA_UPDATE_TODO = "SAGA@TODO/UPDATE_TODO";

export const FETCH_TODO = "TODO/FETCH_TODO";
export const SAGA_FETCH_TODO = "SAGA@TODO/FETCH_TODO";
export const START_EDITING = "START_EDITING";
export const END_EDITING = "END_EDITING";

export const TOGGLE_TODO = "TOGGLE_TODO";
export const SAGA_TOGGLE_TODO = "SAGA@/TODO_TOGGLE_TODO";


export interface IAddTodoAction {
  type: typeof ADD_TODO,
  payload: ITodo,
}

export interface ISagaAddTodoAction {
  type: typeof SAGA_ADD_TODO,
  payload: {
    text: string;
  }
}

export interface IToggleTodoAction {
  type: typeof TOGGLE_TODO,
  payload: ITodo,
}

export interface ISagaToggleTodoAction {
  type: typeof SAGA_TOGGLE_TODO,
  payload: {
    id: string;
  }
}

export interface IStartEditingAction {
  type: typeof START_EDITING,
  editingId: string,
}

export interface IEndEditingAction {
  type: typeof END_EDITING,
}

export interface IDeleteTodoAction {
  type: typeof DELETE_TODO,
  id: string;
}

export interface ISagaDeleteTodoAction {
  type: typeof SAGA_DELETE_TODO,
  payload: {
    id: string;
  }
}

export interface IUpdateTodoAction {
  type: typeof UPDATE_TODO,
  payload: {
    id: string;
    text: string;
  }
}

export interface ISagaUpdateTodoAction {
  type: typeof SAGA_UPDATE_TODO,
  payload: {
    id: string;
    text: string;
  }
}

export interface IFetchTodosAction {
  type: typeof FETCH_TODO,
  payload: ITodo[]
}

export type ITodoActionTypes =
  IAddTodoAction
  | IToggleTodoAction
  | IStartEditingAction
  | IEndEditingAction
  | IDeleteTodoAction
  | IUpdateTodoAction
  | IFetchTodosAction;
