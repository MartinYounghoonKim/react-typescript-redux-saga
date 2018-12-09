import { TodoStates } from "./states";
import {ADD_TODO, DELETE_TODO, END_EDITING, FETCH_TODO, START_EDITING, UPDATE_TODO} from "../stores/actions";

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
        todos: state.todos.map(
          todo => todo.id === action.payload.id ?
            { ...todo, ...action.payload }:
            todo
        ),
      };
    case START_EDITING:
      return {
        ...state,
        editingId: action.editingId,
      };
    case END_EDITING:
      return {
        ...state,
        editingId: '',
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
