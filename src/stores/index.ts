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
interface IAsyncReducers {
  [key: string]: any;
}

const asyncReducers: IAsyncReducers = {};
export const getNewReducer = (newModuleInfo: any) => {
  asyncReducers[newModuleInfo.name] = newModuleInfo.reducer;

  store.replaceReducer(combineReducers({
    todoReducer,
    filterReducer,
    ...asyncReducers
  }));
};
const codeSplitA = {
  aValue: ''
}
export const splitReducerA = (state = codeSplitA, action: any) => {
  switch (action.type){
    case 'set_A': return {...state, aValue: action.value};
  }
  return state;
}

export const testAction = (value: any) => ({
  type: "set_A", value,
});

sagaMiddleware.run(rootSaga);

export default store;
