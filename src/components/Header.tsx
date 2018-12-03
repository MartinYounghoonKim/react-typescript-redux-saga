import React from 'react';

interface IState {
  newTodo: string;
}

interface IProps {
  addTodo: (text: string) => void;
}

export default class Header extends React.Component<IProps, IState> {
  private inputElement: HTMLInputElement;
  readonly state: IState = {
    newTodo: ''
  };

  addTodo = (e: React.FormEvent) => {
    e.preventDefault();
    const text = this.state.newTodo;
    if (text.length > 0) {
      this.props.addTodo(text);
      this.resetInputField();
    }
  };

  onKeyDownHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({
      newTodo: e.currentTarget.value
    });
  };

  resetInputField = () => {
    this.inputElement.value = "";
  };

  render() {
    const {
      addTodo,
      onKeyDownHandler,
    } = this;
    return (
      <header>
        <form onSubmit={addTodo}>
        <h1 className="todo-app__header">todos</h1>
        <input type="text"
               className="todo-app__new-todo"
               onChange={onKeyDownHandler}
               ref={(inputElement: HTMLInputElement) => this.inputElement = inputElement}/>
        <button type='submit'/>
        </form>
      </header>
    )
  }
}

