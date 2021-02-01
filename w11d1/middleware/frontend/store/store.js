import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/root_reducer';

const configureStore = (preloadedState = {}) => {
  const store = createStore(rootReducer, preloadedState, applyMiddleware(addLoggingToDispatch));
  store.subscribe(() => {
    localStorage.state = JSON.stringify(store.getState());
  });
  return store;
}

const addLoggingToDispatch = (store) => {
  let dispatchStore = store.dispatch;

  return (action) => {
    console.log(store.getState());
    console.log(store.action())
    dispatchStore(action)
    store.getState()
  }
}

export default configureStore;
