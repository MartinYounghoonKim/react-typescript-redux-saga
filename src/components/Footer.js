import React from 'react'
import { inject, observer } from 'mobx-react';

@inject('TodoStore')
@observer
export default class Footer extends React.Component {
    render() {
        const {
            TodoStore
        } = this.props;
        return (
            <footer className="footer">
                <span className="todo-count">
                  <strong>{TodoStore.todoCount}</strong>
                    <span>item</span>
                    left
                </span>
                <ul className="todo-filters">
                    <li><a href="#none">All</a></li>
                    <li><a href="#none">Active</a></li>
                    <li><a href="#none">Completed</a></li>
                </ul>
            </footer>
        )
    }
}