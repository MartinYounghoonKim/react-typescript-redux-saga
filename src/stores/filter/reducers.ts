import { FilterStates } from "./states";

export default function filterReducer (state = FilterStates, action: any) {
  switch (action.type) {
    default:
      return state;
  }
}
