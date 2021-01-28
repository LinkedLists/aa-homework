import {createStore} from 'redux';
import Reduce from './reducer';

const store = createStore(Reduce);

export default store;