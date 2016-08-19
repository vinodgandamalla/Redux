import React from 'react';
import ReactDOM from 'react-dom';
import store from './../state/store.js';

const Todo = React.createClass({
   addNewTodo: function() {
    store.dispatch({type:"ADD_TODO" , text:document.getElementById('todo-textbox').value});
    document.getElementById('todo-textbox').value='';
  },
  render: function () {
    return (
      <div>
      <input type="text" id="todo-textbox" />
      <input type="button"
             value="Add Todo"
             onClick = {this.addNewTodo}  />
      </div>
    )
  }
});

export default Todo
