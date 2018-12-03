import React from 'react';

import Todo from './Todo';
import { ITodo } from "@/interfaces/models";

interface IProps {
  todos: ITodo[]
  deleteTodo: (id: string) => void;
}
interface IState {
  editingId: string
}
export default class TodoList extends React.Component<IProps, IState> {
  readonly state: IState = {
    editingId: ''
  };

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
      deleteTodo
    } = this.props;
    const {
      editingId
    } = this.state;
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
                  unsetEditingId={this.unsetEditingID}/>
          ))}
        </ul>
      </div>
    )
  }
}
