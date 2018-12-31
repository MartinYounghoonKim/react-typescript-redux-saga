import {Record, Map, List} from "immutable";
import {ITodo} from "interfaces/models";

export const TodoItemRecord = Record({
  id: "",
  text: "",
  isDone: "",
});

export class TodoItem extends TodoItemRecord {
  constructor () {
    super();
  }
}

export const TodoStateRecord = Record({
  editingId: '',
  todos: List(),
});

export class TodoState extends TodoStateRecord {
  readonly todos: List<TodoItem>
}

const test = new TodoState();

interface ITodoStates {
  editingId: string;
  todos: ITodo[];
}

export const TodoStates: ITodoStates = {
  editingId: '',
  todos: []
};
