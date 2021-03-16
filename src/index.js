import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

import history from './services/history';

import './config/ReactotronConfig';
import Store from './store';

import App from './App';

const Application = () => (
  <Provider store={Store.store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
);

ReactDOM.render(<Application />, document.getElementById('root'));
