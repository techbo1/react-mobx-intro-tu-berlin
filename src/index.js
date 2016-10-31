import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './app';
import {store} from './store';
import {startRouter} from './router';

startRouter(store)

ReactDOM.render(
  <App />,
  document.getElementById('root')
);