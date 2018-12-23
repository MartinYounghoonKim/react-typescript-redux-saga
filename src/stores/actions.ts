import {ITodo} from "@/interfaces/models";
import {IAddTodoAction} from "../stores/actions-types";
import {
  IDeleteTodoAction, IEndEditingAction, IFetchTodosAction, IStartEditingAction, IToggleTodoAction,
  IUpdateTodoAction
} from "@/stores/actions-types";

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


export function addTodoActionCreator (payload: ITodo): IAddTodoAction {
  return { type: ADD_TODO, payload }
}

export function toggleTodo (targetId: string): IToggleTodoAction {
  return { type: TOGGLE_TODO, targetId }
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
  return {
    type: FETCH_TODO,
    payload
  }
}
