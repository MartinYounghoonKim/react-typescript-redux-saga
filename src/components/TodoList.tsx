import React from 'react';

import Todo from './Todo';
import { ITodo } from "@/interfaces/models";

interface IProps {
  todos: ITodo[];
  editingId: string;
  deleteTodo: (id: string) => void;
  startEditing: (id: string) => void;
  endEditing: () => void;
}

export default class TodoList extends React.Component<IProps> {
  setEditingId = (val: string) => {
    this.setState({
      editingId: val
    });
  };
  unsetEditingID = () => {
    this.setState({
      editingId: ""
    });
  };

  render() {
    const {
      todos,
      deleteTodo,
      editingId,
      startEditing,
      endEditing,
    } = this.props;
    return (
      <div className="todo-app__main">
        <ul className="todo-list">
          {todos.map(({id, text, isDone}) => (
            <Todo key={id}
                  id={id}
                  editingId={editingId}
                  text={text}
                  isDone={isDone}
                  deleteTodo={deleteTodo}
                  startEditing={startEditing}
                  endEditing={endEditing}
                  unsetEditingId={this.unsetEditingID}/>
          ))}
        </ul>
      </div>
    )
  }
}
