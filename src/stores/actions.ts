import { ITodo } from "@/interfaces/models";
import {
  IAddTodoAction, ADD_TODO, // Add logic
  DELETE_TODO, IDeleteTodoAction, // Delete logic
  IFetchTodosAction, FETCH_TODO, // fetch logic
  IToggleTodoAction, TOGGLE_TODO, // toggle logic
  IUpdateTodoAction, UPDATE_TODO, // update logic
  END_EDITING, IEndEditingAction, // end editing logic
  IStartEditingAction, START_EDITING, // start editing logic
} from "./actions-types";

export function addTodoActionCreator (payload: ITodo): IAddTodoAction {
  return { type: ADD_TODO, payload }
}

export function toggleTodoActionCreate (payload: ITodo): IToggleTodoAction {
  return { type: TOGGLE_TODO, payload }
}

export function startEditing (editingId: string): IStartEditingAction {
  return { type: START_EDITING, editingId }
}

export function endEditing (): IEndEditingAction {
  return { type: END_EDITING }
}

export function deleteTodoActionCreator (id: string): IDeleteTodoAction {
  return { type: DELETE_TODO, id }
}

export function updateTodoActionCreator (payload: { id: string; text: string}): IUpdateTodoAction {
  return { type: UPDATE_TODO, payload }
}

export function fetchTodosActionCreator (payload: ITodo[]): IFetchTodosAction {
  return { type: FETCH_TODO, payload }
}
