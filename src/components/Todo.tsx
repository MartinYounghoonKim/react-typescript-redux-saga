import React, {ChangeEvent} from 'react';
import Classnames from 'classnames';

interface IProps {
  id: string;
  text: string;
  isDone: boolean;
  editingId: string;
  deleteTodo: (id: string) => void;
  startEditing: (id: string) => void;
  endEditing: () => void;
  updateTodo: (payload: { id: string; text: string }) => void;
  toggleTodo: (targetId: string) => void;
}
export default class Todo extends React.Component<IProps> {
  private inputElement: HTMLInputElement;

  componentWillReceiveProps (prevProps: IProps) {
    const { id, editingId } = prevProps;
    if (id === editingId) {
      this.inputElement.value = prevProps.text;
    }
  }
  componentDidUpdate () {
    this.inputElement.focus();
  }
  updateTodo = (event: any) => {
    const inputElement = event.target;
    const text = inputElement.value;
    const id = this.props.id;
    const isPressedEnter = event.keyCode === 13;
    const isEmpty = text.length <= 0;
    if (isPressedEnter && !isEmpty) {
      this.props.updateTodo({ id, text });
      this.inputElement.blur();
    }
  };

  render() {
    const {
      id,
      text,
      isDone,
      editingId,
      deleteTodo,
      endEditing,
      toggleTodo,
      startEditing,
    } = this.props;
    return (
      <li className={Classnames("todo-item", { completed: isDone, editing: editingId === id })}
          onDoubleClick={() => startEditing(id)}>
        <button className="toggle" onClick={() => toggleTodo(id)}/>
        <div className="todo-item__view">
          <div className="todo-item__view__text">{text}</div>
          <button className="todo-item__destroy"
                  onClick={() => deleteTodo(id)}/>
        </div>
        <input ref={(inputElement: HTMLInputElement) => this.inputElement = inputElement}
               type="text"
               className="todo-item__edit"
               onBlur={endEditing}
               onKeyDown={this.updateTodo}/>
      </li>
    )
  }
}
