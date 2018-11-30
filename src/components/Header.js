import React from 'react';

export default class Header extends React.Component {
    createTodoItem = (e) => {
        const ENTER_KEYCODE = 13;
        const value = this.inputElement.value;
        const isAbleAddStatus = e.keyCode === ENTER_KEYCODE && value.length > 0;

        if (isAbleAddStatus) {
            e.target.value = '';
        }
    };
    render () {
        return (
            <header>
                <h1 className="todo-app__header">todos</h1>
                <input
                    type="text"
                    className="todo-app__new-todo"
                    onKeyDown={this.createTodoItem}
                    ref={inputElement => this.inputElement = inputElement}
                />
                <button/>
            </header>
        )
    }
}

