import {ITodo} from "@/interfaces/models";

interface ITodoStates {
  editingId: string;
  todos: ITodo[];
}

export const TodoStates: ITodoStates = {
  editingId: '',
  todos: []
};
