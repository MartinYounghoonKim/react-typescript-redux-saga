import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import store from './stores';


import Loadable from 'react-loadable';

const ButtonContainer = Loadable({
  loader: () => import("./components/Button"),
  loading() {
    return <div>Loading...</div>
  }
});
const Button1Container = Loadable({
  loader: () => import("./components/Button1"),
  loading() {
    return <div>Loading...</div>
  }
});

const action = (type: any) => store.dispatch({type});
const options = [
  { code: 1000 },
  { code: 1001 },
];

const buttonList = [
  { code: 1000, component: <ButtonContainer/> },
  { code: 1001, component: <Button1Container/> }
];

const Root = (
  <Provider store={store}>
    <Fragment>
      <App action={action}/>
      {options.map(option => {
        return (
          buttonList.map(({code, component}) => {
            if (code === option.code) {
              return component;
            }
          })
        )
      })}
    </Fragment>
  </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));
