import { TodoStates } from "./states";
import {ADD_TODO} from "../stores/actions";

export default function todoReducer(state = TodoStates, action: any) {
  switch (action.type) {
    case 'FETCH':
      return {
        ...state,
        payload: action.payload
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
