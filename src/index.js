import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';

const initialState = {
  currentMove: '-',
  field: [
    ['','',''],
    ['','',''],
    ['','','']
  ]
};

function move(state = initialState, action) {
  if (action.type === 'ADD_MOVE') {
    const field = state.field
      .map((row, i) => i === action.i
       ? (
         row.map((value, j) => j === action.j ? action.player : value)
       )
       : row);
    return {
      field,
      currentMove: action.player
    };
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
