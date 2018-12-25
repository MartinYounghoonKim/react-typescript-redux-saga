import { FilterStates } from "./states";
import {SET_FILTER} from "./actions";

export default function filterReducer (state = FilterStates, action: any) {
  switch (action.type) {
    case SET_FILTER:
      return {
        filter: action.payload.filter
      };
    default:
      return state;
  }
}
