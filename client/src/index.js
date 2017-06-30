import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CheeseList from './components/cheese-list';
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';

import {fetchCheesesReducer} from './reducers';

createStore(fetchCheesesReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
  <CheeseList />
  </Provider>,
  document.getElementById('root')
);
