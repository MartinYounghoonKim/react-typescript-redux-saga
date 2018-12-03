import React, {ChangeEvent} from 'react';
import Classnames from 'classnames';

interface IProps {
  id: string;
  text: string;
  isDone: boolean;
  editingId: string;
  deleteTodo: (id: string) => void;
  unsetEditingId: (e: ChangeEvent) => void;
}
export default class Todo extends React.Component<IProps> {
  private inputElement: HTMLInputElement;
  toggle = (targetId: string) => {
  };
  deleteTodo = (targetId: string) => {
  };
  focusEditingField = (id: string) => {
    // setTimeout(() => {
    //   this.inputElement.value = this.props.text;
    //   this.inputElement.focus();
    // }, 0);
  };
  updateTodo = (event: any) => {
    const inputElement = event.target;
    const isPressedEnter = event.keyCode === 13;
    if (isPressedEnter) {
      const text = inputElement.value;
      const id = this.props.id;
    }
  };

  render() {
    const {
      id,
      text,
      isDone,
      editingId,
      deleteTodo,
      unsetEditingId
    } = this.props;
    return (
      <li className={Classnames("todo-item", {
        completed: isDone,
        editing: editingId === id
      })}
          onDoubleClick={() => this.focusEditingField(id)}
      >
        <button className="toggle" onClick={() => this.toggle(id)}/>
        <div className="todo-item__view">
          <div className="todo-item__view__text">{text}</div>
          <button className="todo-item__destroy"
                  onClick={() => deleteTodo(id)}/>
        </div>
        <input
          ref={(inputElement: HTMLInputElement) => this.inputElement = inputElement}
          type="text"
          className="todo-item__edit"
          onBlur={unsetEditingId}
          onKeyDown={this.updateTodo}
        />
      </li>
    )
  }
}
