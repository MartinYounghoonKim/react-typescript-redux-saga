import {Record, Map, List} from "immutable";
import {ITodo} from "interfaces/models";

export const TodoItemRecord: Record.Factory<ITodo> = Record({
  id: "",
  text: "",
  isDone: false,
});

export const TodoStateRecord = Record({
  editingId: '',
  todos: List<ITodo>(),
});
