import {ITodo} from "@/interfaces/models";

export const ADD_TODO = "ADD_TODO";

export function addTodo (payload: ITodo) {
  return {
    type: ADD_TODO,
    payload
  }
}
