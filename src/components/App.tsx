import React from 'react';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import TodoList from './TodoList';
import {ITodo, IRootState} from "@/interfaces/models";
import { connect } from "react-redux";
import {
  endEditing,
  startEditing,
} from "../stores/todo/actions";
import {sagaAddTodo, sagaDeleteTodo, sagaFetchTodo, sagaToggleTodo, sagaUpdateTodo} from "../stores/todo/sagas";
import {match} from "react-router";

interface IState {
  todos: ITodo[];
}

interface IMapStateToProps {
  todos: ITodo[];
  editingId: string;
}

type IProps = {
  match: match;
} & IMapStateToProps & IMapDispatchToProps;

class App extends React.Component<IProps, IState> {
  componentWillMount() {
    this.props.fetchTodo();
  }

  addTodo = (text: string) => {
    this.props.addTodo(text);
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
      addTodo,
      deleteTodo,
      match
    } = this.props;
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
        <Footer url={match.url}
                count={todos.length}/>
      </div>
    );
  }
}

const mapStateToProps = (state: IRootState): IMapStateToProps => ({
  todos: state.todoReducer.todos,
  editingId: state.todoReducer.editingId,
});


interface IMapDispatchToProps {
  addTodo: (text: string) => void;
  deleteTodo: (id: string) => void;
  startEditing: (id: string) => void;
  endEditing: () => void;
  updateTodo: (payload: { id: string; text: string }) => void;
  toggleTodo: (payload: {
    id: string;
    isDone: boolean;
  }) => void;
  fetchTodo: () => void;
}

const mapDispatchToProps: IMapDispatchToProps = {
  deleteTodo: sagaDeleteTodo,
  startEditing: startEditing,
  endEditing: endEditing,
  updateTodo: sagaUpdateTodo,
  toggleTodo: sagaToggleTodo,
  fetchTodo: sagaFetchTodo,
  addTodo: sagaAddTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
