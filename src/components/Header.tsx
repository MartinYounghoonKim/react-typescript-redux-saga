import React from 'react';

interface IState {
  newTodo: string;
}

export default class Header extends React.Component<{}, IState> {
  private inputElement: HTMLInputElement;
  readonly state: IState = {
    newTodo: ''
  };

  createTodoItem = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const ENTER_KEYCODE = 13;
    const value = this.inputElement.value;
    const isAbleAddStatus = e.keyCode === ENTER_KEYCODE && value.length > 0;
    this.setState({
      newTodo: e.currentTarget.value
    });
    if (isAbleAddStatus) {
      e.currentTarget.value = '';
    }
  };

  render() {
    return (
      <header>
        <h1 className="todo-app__header">todos</h1>
        <input type="text"
               className="todo-app__new-todo"
               onKeyDown={this.createTodoItem}
               ref={(inputElement: HTMLInputElement) => this.inputElement = inputElement}/>
        <button/>
      </header>
    )
  }
}

