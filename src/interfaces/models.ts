export type ITodoState = {
  todos: ITodos;
}
export type ITodos = ITodo[];

export interface ITodo {
  id: string;
  text: string;
  isDone: boolean;
}
