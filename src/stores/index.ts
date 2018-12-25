import {
  compose,
  createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import createSagaMiddleware from 'redux-saga';

import todoReducer from './todo/reducers';
import filterReducer from './filter/reducers';

import rootSaga from "./todo/sagas";

const todoReducers = combineReducers({
  todoReducer,
  filterReducer
});
const sagaMiddleware = createSagaMiddleware();
const composeEnhancers =
  typeof window === 'object' &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;
const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware),
);
const store = createStore(todoReducers, enhancer);

sagaMiddleware.run(rootSaga);

export default store;
