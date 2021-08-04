import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import rootReducer from './reducers/index';

const initialState = {
  books: [
    {
      id: Math.floor(Math.random() * 1000000),
      title: 'Book title one',
      category: 'Learning',
    },
    {
      id: Math.floor(Math.random() * 1000000),
      title: 'Book title two',
      category: 'Biography',
    },
    {
      id: Math.floor(Math.random() * 1000000),
      title: 'Book title three',
      category: 'Learning',
    },
  ],
  filter: 'All',
};

/* eslint-disable no-underscore-dangle */
const store = createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
