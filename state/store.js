import { createStore,combineReducers } from 'redux';
import {todoReducer,  visibilityReducer} from './reducers.js';


const reducers = combineReducers({
  todostate: todoReducer,
  visibile: visibilityReducer});

const store = createStore(reducers);

export default store;
