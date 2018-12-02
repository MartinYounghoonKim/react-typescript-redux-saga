import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
// import { fetchTodos } from './stores/sagas'
import { t } from './test';
console.log(t);

// const sagaMiddleware = createSagaMiddleware()
// const store = createStore(
//   applyMiddleware(sagaMiddleware)
// )
// sagaMiddleware.run(fetchTodos)
//
// const action = type => store.dispatch({type})

const Root = (
  <App/>
);

ReactDOM.render(Root, document.getElementById('root'));
