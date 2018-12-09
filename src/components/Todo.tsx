import React, {ChangeEvent} from 'react';
import Classnames from 'classnames';

interface IState {
  isEditing: boolean
}

interface IProps {
  id: string;
  text: string;
  isDone: boolean;
  editingId: string;
  deleteTodo: (id: string) => void;
  startEditing: (id: string) => void;
  unsetEditingId: (e: ChangeEvent) => void;
  endEditing: () => void;
}
export default class Todo extends React.Component<IProps, IState> {
  private inputElement: HTMLInputElement;
  readonly state: IState = {
    isEditing: false,
  };


  componentDidUpdate (prevProps: IProps, prevState: IState) {
    const { isEditing } = this.state;
    if (isEditing) {
      this.inputElement.value = this.props.text;
      this.inputElement.focus();
    }
  }

  toggle = (targetId: string) => {
  };
  focusEditingField = (id: string) => {
    this.setState({
      isEditing: true
    });
  };
  onBlurHandler = () => {
    this.setState({
      isEditing: false
    });
  }
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
      endEditing,
      startEditing,
      unsetEditingId,
    } = this.props;
    const {
      isEditing,
    } = this.state;
    const {
      onBlurHandler
    } = this;
    return (
      <li className={Classnames("todo-item", { completed: isDone, editing: editingId === id })}
          onDoubleClick={() => startEditing(id)}>
        <button className="toggle" onClick={() => this.toggle(id)}/>
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
