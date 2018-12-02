import { TodoStates } from "./states";

export default function todoReducer(state = TodoStates, action: any) {
  switch (action.type) {
    case 'FETCH':
      return {
        ...state,
        payload: action.payload
      };
    default:
      return state
  }
}
