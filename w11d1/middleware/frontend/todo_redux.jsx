import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';

import Root from './components/root';
import { applyMiddleware } from 'redux';

document.addEventListener('DOMContentLoaded', () => {
  const preloadedState = localStorage.state ?
    JSON.parse(localStorage.state) : {};
  const store = configureStore(preloadedState);
  store = applyMiddlewares(store, addLoggingToDispatch);
  
  const root = document.getElementById('content');
  ReactDOM.render(<Root store={store} />, root);
});

// const addLoggingToDispatch = (store) => {
//   let dispatchStore = store.dispatch;

//   return (action) => {
//     console.log(store.getState());
//     console.log(store.action())
//     dispatchStore(action)
//     store.getState()
//   }
// }

// const applyMiddlewares = (store) => { //use es6 arrows
//   return (next) => (action) => {

//   }
// }



const applyMiddleware = store => next => action => {
  let dispatch = store.dispatch;

  applyMiddleware.forEach( (middleware) => {
    dispatch = middleware(store)(dispatch)
  })

  return Object.assign({}, store, { dispatch })
}