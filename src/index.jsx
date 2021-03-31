import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './components/app';
import { Provider } from 'react-redux';
import store from './state/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
