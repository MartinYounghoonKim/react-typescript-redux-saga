import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import store from './stores';

const action = (type: any) => store.dispatch({type})

const Root = (
  <Provider store={store}>
    <App action={action}/>
  </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));
