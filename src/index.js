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
      id: 1,
      title: 'Book title one',
      category: 'Learning',
    },
    {
      id: 2,
      title: 'Book title two',
      category: 'Biography',
    },
    {
      id: 3,
      title: 'Book title three',
      category: 'Learning',
    },
  ],
};

const store = createStore(rootReducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
