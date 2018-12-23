import {ITodo} from "../interfaces/models";
import {ADD_TODO, TOGGLE_TODO} from "../stores/actions";
import {DELETE_TODO, END_EDITING, FETCH_TODO, START_EDITING, UPDATE_TODO} from "@/stores/actions";

export interface IAddTodoAction {
  type: typeof ADD_TODO,
  payload: ITodo,
}

export interface IToggleTodoAction {
  type: typeof TOGGLE_TODO,
  targetId: string,
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

export interface IUpdateTodoAction {
  type: typeof UPDATE_TODO,
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
