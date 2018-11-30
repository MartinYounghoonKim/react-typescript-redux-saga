import React from 'react';
import Classnames from 'classnames';

export default class Todo extends React.Component {
    toggle = (targetId) => {
        this.props.TodoStore.toggle(targetId);
    };
    deleteTodo = (targetId) => {
        this.props.TodoStore.deleteTodo(targetId);
    };
    focusEditingField = (id) => {
        this.props.setEditingId(id);
        setTimeout(() => {
            this.inputElement.value = this.props.text;
            this.inputElement.focus();
        },0);
    };
    updateTodo = (event) => {
        const inputElement = event.target;
        const isPressedEnter = event.keyCode === 13;
        if (isPressedEnter) {
            const text = inputElement.value;
            const id = this.props.id;
        }
    };

    render () {
        const {
            id,
            text,
            isDone,
            editingId,
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
                    <button className="todo-item__destroy" onClick={() => this.deleteTodo(id)}/>
                </div>
                <input
                    ref={inputElement => this.inputElement = inputElement}
                    type="text"
                    className="todo-item__edit"
                    onBlur={unsetEditingId}
                    onKeyDown={this.updateTodo}
                />
            </li>
        )
    }
}
