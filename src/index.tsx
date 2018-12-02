import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import store from './stores';
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
// import { fetchTodos } from './stores/sagas'

// const sagaMiddleware = createSagaMiddleware()
// const store = createStore(
//   applyMiddleware(sagaMiddleware)
// )
// sagaMiddleware.run(fetchTodos)
//
// const action = type => store.dispatch({type})

const Root = (
  <Provider store={store}>
    <App/>
  </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));
