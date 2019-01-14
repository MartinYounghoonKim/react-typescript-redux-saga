import React from 'react';
import {match} from "react-router";
import {connect} from "react-redux";

import './App.css';

import Header from './Header';
import Footer from './Footer';
import TodoList from './TodoList';

import {ITodo, IRootState, ITodos} from "@/interfaces/models";
import {
  endEditing,
  startEditing,
} from "../stores/todo/actions";
import {setFilter} from "../stores/filter/actions";

import {
  sagaAddTodo,
  sagaFetchTodo,
  sagaDeleteTodo,
  sagaToggleTodo,
  sagaUpdateTodo
} from "../stores/todo/sagas";
import {getNewReducer, splitReducerA, testAction} from "../stores";

interface IState {
  todos: ITodo[];
}

type IProps = {
  match: match;
} & IMapStateToProps & IMapDispatchToProps;

class App extends React.Component<IProps, IState> {
  componentWillMount() {
    const { match: { url }} = this.props;
    this.props.fetchTodo();
    this.props.setFilter(url);
  }

  addTodo = (text: string) => {
    this.props.addTodo(text);
  };

  deleteTodo = (id: string) => {
    this.props.deleteTodo(id);
  };
  test = () => {
    getNewReducer({ name: 'aModule', reducer: splitReducerA });
  }
  action = () => {
    this.props.testAction("test");
  }

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
      setFilter,
      filter
    } = this.props;
    return (
      <div className="todo-app">
        <button onClick={this.test}>
          create
        </button>
        <button onClick={this.action}>action</button>
        <Header addTodo={addTodo}/>
        <TodoList editingId={editingId}
                  deleteTodo={deleteTodo}
                  startEditing={startEditing}
                  endEditing={endEditing}
                  updateTodo={updateTodo}
                  toggleTodo={toggleTodo}
                  todos={todos}/>
        <Footer setFilter={setFilter}
                filter={filter}
                count={todos.length}/>
      </div>
    );
  }
}

const filteredTodos = (todos: ITodos, filter: string) => {
  switch (filter) {
    case "active":
      return todos.filter(todo => !todo.isDone);
    case "completed":
      return todos.filter(todo => todo.isDone);
    default:
      return todos;
  }
};

const mapStateToProps = (state: IRootState): IMapStateToProps => ({
  todos: filteredTodos(state.todoReducer.todos, state.filterReducer.filter),
  editingId: state.todoReducer.editingId,
  filter: state.filterReducer.filter,
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
  setFilter: (filter: string) => void;
  testAction: (value: any) => void;
}

interface IMapStateToProps {
  todos: ITodo[];
  editingId: string;
  filter: string;
}

const mapDispatchToProps: IMapDispatchToProps = {
  deleteTodo: sagaDeleteTodo,
  startEditing: startEditing,
  endEditing: endEditing,
  updateTodo: sagaUpdateTodo,
  toggleTodo: sagaToggleTodo,
  fetchTodo: sagaFetchTodo,
  addTodo: sagaAddTodo,
  setFilter: setFilter,
  testAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
