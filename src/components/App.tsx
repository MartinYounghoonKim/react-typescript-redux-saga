import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import TodoList from './TodoList';
import {ITodo, ITodoState} from "@/interfaces/models";
import { connect } from "react-redux";
import {Dispatch} from "redux";
import {addTodo, deleteTodo} from "../stores/actions";

interface IState {
  todos: ITodo[];
}

interface IMapStateToProps {
  todos: ITodo[];
}
interface IMapDispatchToProps {
  addTodo: (payload: ITodo) => void;
  deleteTodo: (id: string) => void;
}
type IProps = {} & IMapStateToProps & IMapDispatchToProps;

class App extends React.Component<IProps, IState> {
  componentWillMount() {
  }

  addTodo = (text: string) => {
    const id = new Date().getTime().toString();
    const isDone = false;
    this.props.addTodo({ id, text, isDone });
  };

  deleteTodo = (id: string) => {
    console.log(id);
    this.props.deleteTodo(id);
  };

  render() {
    const {
      todos
    } = this.props;
    const {
      addTodo,
      deleteTodo
    } = this;
    return (
      <div className="todo-app">
        <Header addTodo={addTodo}/>
        <TodoList deleteTodo={deleteTodo}
                  todos={todos}/>
        <Footer count={todos.length}/>
      </div>
    );
  }
}

const mapStateToProps = (state: ITodoState): IMapStateToProps => ({
  todos: state.todos
});

const mapDispatchToProps = (dispatch: Dispatch): IMapDispatchToProps => {
  return {
    addTodo: (payload) => {
      dispatch(addTodo(payload));
    },
    deleteTodo: (id) => {
      dispatch(deleteTodo(id));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
