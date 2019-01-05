export type IRootState = {
  todoReducer: ITodoReducerState;
  filterReducer: {
    filter: string;
  }
}

export type ITodoReducerState = {
  editingId: string;
  todos: ITodos;
}
export type ITodos = ITodo[];

export interface ITodo {
  id: string;
  text: string;
  isDone: boolean;
}

export type IFilterState = {
  filter: string;
}
