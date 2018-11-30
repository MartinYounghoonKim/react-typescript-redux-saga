import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

const Root = (
  <App/>
);

ReactDOM.render(Root, document.getElementById('root'));
registerServiceWorker();
