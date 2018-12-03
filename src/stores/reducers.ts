import { TodoStates } from "./states";
import {ADD_TODO, DELETE_TODO, FETCH_TODO, UPDATE_TODO} from "../stores/actions";

export default function todoReducer(state = TodoStates, action: any) {
  switch (action.type) {
    case FETCH_TODO:
      return {
        ...state,
        todos: action.payload
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(({ id }) => id !== action.id),
      };
    case UPDATE_TODO:
      return {
        ...state,
        todos: action.payload
      };
    case ADD_TODO:
      return {
        ...state,
        todos: [
          ...state.todos,
          ...action.payload
        ]
      };
    default:
      return state
  }
}
