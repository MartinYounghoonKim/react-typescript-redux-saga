import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import TodoList from './TodoList';
import {ITodo, ITodoState} from "@/interfaces/models";
import { connect } from "react-redux";

interface IState {
  todos: ITodo[];
}

interface IMapStateToProps {
  todos: ITodo[];
}
type IProps = {} & IMapStateToProps;

class App extends React.Component<IProps, IState> {

  componentWillMount() {
  }

  render() {
    const {
      todos
    } = this.props;
    return (
      <div className="todo-app">
        <Header/>
        <TodoList todos={todos}/>
        <Footer count={todos.length}/>
      </div>
    );
  }
}

const mapStateToProps = (state: ITodoState) => ({
  todos: state.todos
});

export default connect(mapStateToProps)(App);
