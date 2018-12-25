import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import todoReducer from './todo/reducers';
import filterReducer from './filter/reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./todo/sagas";

const combinedReducers = combineReducers({
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
const store = createStore(combinedReducers, enhancer);
sagaMiddleware.run(rootSaga);

export default store;
