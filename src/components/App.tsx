import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import TodoList from './TodoList';
import {ITodo, ITodoState} from "@/interfaces/models";
import { connect } from "react-redux";
import {Dispatch} from "redux";
import {addTodo, deleteTodo, endEditing, startEditing, toggleTodo, updateTodo} from "../stores/actions";

interface IState {
  todos: ITodo[];
}

interface IMapStateToProps {
  todos: ITodo[];
  editingId: string;
}

interface IMapDispatchToProps {
  addTodo: (payload: ITodo) => void;
  deleteTodo: (id: string) => void;
  startEditing: (id: string) => void;
  endEditing: () => void;
  updateTodo: (payload: { id: string; text: string }) => void;
  toggleTodo: (targetId: string) => void;
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
    this.props.deleteTodo(id);
  };

  render() {
    const {
      todos,
      editingId,
      startEditing,
      endEditing,
      updateTodo,
      toggleTodo,
    } = this.props;
    const {
      addTodo,
      deleteTodo
    } = this;
    return (
      <div className="todo-app">
        <Header addTodo={addTodo}/>
        <TodoList editingId={editingId}
                  deleteTodo={deleteTodo}
                  startEditing={startEditing}
                  endEditing={endEditing}
                  updateTodo={updateTodo}
                  toggleTodo={toggleTodo}
                  todos={todos}/>
        <Footer count={todos.length}/>
      </div>
    );
  }
}

const mapStateToProps = (state: ITodoState): IMapStateToProps => ({
  todos: state.todos,
  editingId: state.editingId,
});

const mapDispatchToProps = (dispatch: Dispatch): IMapDispatchToProps => {
  return {
    addTodo: (payload) => {
      dispatch(addTodo(payload));
    },
    deleteTodo: (id) => {
      dispatch(deleteTodo(id));
    },
    startEditing: (id) => {
      dispatch(startEditing(id));
    },
    endEditing: () => {
      dispatch(endEditing());
    },
    updateTodo: (payload) => {
      dispatch(updateTodo(payload));
    },
    toggleTodo: (targetId) => {
      dispatch(toggleTodo(targetId));
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
