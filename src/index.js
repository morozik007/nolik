import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';

const initialState = [
  'x'
];

function move(state = initialState, action) {
  if (action.type === 'ADD_MOVE') {
    return [
      ...state,
      action.payload
    ];
  }
  return state;
}

const store = createStore(move);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
