export type IRootState = {
  todoReducer: {
    editingId: string;
    todos: ITodos;
  },
  filterReducer: {
    filter: string;
  }
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
