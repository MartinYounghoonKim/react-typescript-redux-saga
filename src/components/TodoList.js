import React from 'react';

import Todo from './Todo';

const todos = [
  {id: 1, text: "투두 앱", isDone: false},
  {id: 2, text: "투두 앱", isDone: false},
];
export default class TodoList extends React.Component {
  constructor() {
    super();
    this.state = {
      editingId: undefined
    };
  }

  setEditingId = (val) => {
    this.setState({
      editingId: val
    });
  };
  unsetEditingID = () => {
    this.setState({
      editingId: undefined
    });
  };

  render() {
    const {
      TodoStore,
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
                  setEditingId={this.setEditingId}
                  unsetEditingId={this.unsetEditingID}/>
          ))}
        </ul>
      </div>
    )
  }
}
