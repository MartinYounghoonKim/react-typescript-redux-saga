import { TodoItemRecord, TodoStateRecord } from "./states";
import {
  ADD_TODO,
  FETCH_TODO,
  TOGGLE_TODO,
  UPDATE_TODO,
  DELETE_TODO,
  END_EDITING,
  START_EDITING,
} from "./actions-types";
import {ITodoActionTypes} from "stores/todo/actions-types";
import {List} from "immutable";

export default function todoReducer(state = new TodoStateRecord(), action: ITodoActionTypes) {
  switch (action.type) {
    case FETCH_TODO:
      return state.withMutations(record => {
        record.set("todos", List(action.payload));
      });
    case DELETE_TODO:
      console.log(state);
      return state.update("todos", todos => todos.filter(({ id }) => id !== action.id));
    case UPDATE_TODO:
      return state.update("todos", todos => todos.map(
        todo => todo.id === action.payload.id ?
          { ...todo, ...action.payload } :
          todo
      ));
    case TOGGLE_TODO:
      return state.update("todos", todos => todos.map(
        todo => todo.id === action.payload.id ?
          {...todo, ...action.payload } :
          todo
      ));
    case START_EDITING:
      return state.set("editingId", action.editingId);
    case END_EDITING:
      return state.remove("editingId");
    case ADD_TODO:
      return state.withMutations(record => {
        record.set("todos", state.todos.push(new TodoItemRecord(action.payload)));
      });
    default:
      return state
  }
}
