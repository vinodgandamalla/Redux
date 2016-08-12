import { createStore,combineReducers } from 'redux';

 const data = [{id: 0, text: 'Bring the milk', pending:true},
               {id: 1, text:"Do Laundry", pending:true},
               {id: 2, text:"Implement Todo", pending:false}];

 var idx = 3;

export const todoReducer = function (state = data, action) {
  switch(action.type) {
  case "ADD_TODO" :
    return state.concat([{id: idx++,
                          text: action.text,
                          pending: false}]);
  case "TOGGLE_TODO" :
    return state.map(function (i) {
      if (i.id == action.id)
      {
        return  Object.assign({}, i, {pending: !i.pending});
      }
      else
      {
        return i;
      }});
  case "CLEAR_COMPLETED" :
    return state.filter(function (i) {
      return !i.pending;});

  case "REMOVE_TODO" :
    return state.filter(function (i) {
      return (action.id != i.id );});
  default:
    return state;
  }
}

export const visibilityReducer = function (state = 'SHOW_ALL',action) {
  switch(action.type) {
  case "SHOW_ALL":
    return action.filter;
  case "SHOW_COMPLETED":
    return action.filter;
  case "SHOW_ACTIVE":
    return action.filter;
  default:
    return state;
  }
}
