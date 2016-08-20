import { createStore,combineReducers } from 'redux';

 const data = [{id: 0, text: 'Bring the milk', pending:true},
               {id: 1, text:"Do Laundry", pending:true},
               {id: 2, text:"Implement Todo", pending:false}];


export const todoReducer = function (state ={tasks: data, index:4}, action) {
  switch(action.type) {
  case "ADD_TODO" :
    var newtasks= state.tasks.concat([{id: state.index,
                          text: action.text,
                          pending: false}]);
    var newindex = state.index + 1;
    return {tasks: newtasks,index: newindex};

  case "TOGGLE_TODO" :
    var toggleTodo = state.tasks.map(function (i) {
      if (i.id == action.id)
      {
        return  Object.assign({}, i, {pending: !i.pending});
      }
      else
      {
        return i;
      }});
    return {tasks:toggleTodo, index:state.index}

  case "CLEAR_COMPLETED" :
    var remainingTodos = state.tasks.filter(function (i) {
      return !i.pending;});
    return {tasks: remainingTodos , index: state.index};

  case "REMOVE_TODO" :
    var remainingTodos = state.tasks.filter(function (i) {
      if (action.id != i.id )
      {
        return i;
      }});
    return {tasks: remainingTodos, index: state.index};

  default:
    return state
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
