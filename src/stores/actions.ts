import {ITodo} from "@/interfaces/models";

export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const UPDATE_TODO = "UPDATE_TODO";
export const FETCH_TODO = "FETCH_TODO";

export function addTodo (payload: ITodo) {
  return {
    type: ADD_TODO,
    payload
  }
}

export function deleteTodo (id: string) {
  return {
    type: DELETE_TODO,
    id
  }
}

export function updateTodo (payload: { id: string; text: string}) {
  return {
    type: UPDATE_TODO,
    payload
  }
}

export function fetchTodos (payload: ITodo[]) {
  return {
    type: FETCH_TODO,
    payload
  }
}
