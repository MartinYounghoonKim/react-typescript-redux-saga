import { createStore } from "redux";
import todoReducer from './reducers';

export default createStore(
  todoReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
