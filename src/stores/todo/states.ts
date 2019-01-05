import {Record, Map, List} from "immutable";
import {ITodo} from "interfaces/models";
import {ITodoReducerState} from "@/interfaces/models";

export const TodoItemRecord: Record.Factory<ITodo> = Record({
  id: "",
  text: "",
  isDone: false,
});

const TodoItemRecordFactory: Record.Factory<ITodo> = Record({
  id: "",
  text: "",
  isDone: false,
});
const todoItem: Record<ITodo> = TodoItemRecordFactory({ isDone: true });
console.log(todoItem.toJS());

export class TodoItem extends TodoItemRecord {
  constructor (params?: ITodo) {
    super(params);
  }
}

export const TodoStateRecord = Record({
  editingId: '',
  todos: List<ITodo>(),
});


interface Person {
  name: string;
  height: number;
  eyeColor: string;
}

// const PersonRecordFactory: Record.Factory<Person> = Record({name: '', height: 0, eyeColor: 'brown'});
// const user: Record<Person> = PersonRecordFactory({name: 'Chuck', height: 180});
//

export class TodoState extends TodoStateRecord {
  readonly todos: List<TodoItem>;
  constructor (params?: ITodoReducerState) {
    super();
  }
}
