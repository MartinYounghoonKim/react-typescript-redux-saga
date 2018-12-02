import React from 'react';

import Todo from './Todo';
import {ITodo, ITodos} from "@/interfaces/models";

const todos = [
  {id: '1', text: "투두 앱", isDone: false},
  {id: '2', text: "투두 앱", isDone: false},
];

interface IProps {
  todos: ITodo[]
}
interface IState {
  editingId: string
}
export default class TodoList extends React.Component<IProps, IState> {
  readonly state: IState = {
    editingId: ''
  }

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
                  unsetEditingId={this.unsetEditingID}/>
          ))}
        </ul>
      </div>
    )
  }
}
