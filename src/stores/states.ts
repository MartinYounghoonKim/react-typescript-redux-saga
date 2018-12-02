import {ITodo} from "@/interfaces/models";

interface ITodoStates {
  todos: ITodo[];
}

export const TodoStates: ITodoStates = {
  todos: [
    { id: '1', text: "투두 앱1", isDone: false },
    { id: '2', text: "투두 앱2", isDone: false },
    { id: '3', text: "투두 앱3", isDone: true },
  ]
};
