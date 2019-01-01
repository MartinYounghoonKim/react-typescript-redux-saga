import {Record, Map, List} from "immutable";
import {ITodo} from "interfaces/models";

export const TodoItemRecord: Record.Factory<ITodo> = Record({
  id: "",
  text: "",
  isDone: false,
});

export class TodoItem extends TodoItemRecord {
  constructor (params?: ITodo) {
    super(params);
  }
}

export const TodoStateRecord = Record({
  editingId: '',
  todos: List<ITodo>(),
});

export class TodoState extends TodoStateRecord {
  readonly todos: List<TodoItem>;
  constructor () {
    super();
  }
}
