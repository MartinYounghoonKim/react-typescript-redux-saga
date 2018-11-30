import React, {Component} from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import TodoList from './TodoList';

class App extends Component {
  state = {
    todos: [
      { id: 1, text: "투두 앱", isDone: false },
      { id: 2, text: "투두 앱", isDone: false },
    ]
  };
  componentWillMount() {
  }

  render() {
    const {
      todos
    } = this.state;
    return (
      <div className="todo-app">
        <Header/>
        <TodoList todos={todos}/>
        <Footer count={todos.length}/>
      </div>
    );
  }
}

export default App;
