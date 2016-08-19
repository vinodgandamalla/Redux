import React from 'react';
import ReactDOM from 'react-dom';
import store from './../state/store.js';


const TodoList = React.createClass({

   toggleTodo: function (todo) {
    store.dispatch({type:"TOGGLE_TODO" , id: todo.id});
   },
  removetodo: function(todo) {
    store.dispatch({type:"REMOVE_TODO" , id:todo.id});
  },
  filterTodos: function (filter,todos) {
    switch(filter)
    {
    case "SHOW_ALL":
      return todos;
    case "SHOW_ACTIVE":
      return todos.filter(function (i) {
         return !i.pending;}
                          );
    case "SHOW_COMPLETED":
      return todos.filter(function (i){
        return i.pending; });
    }
  },
    generateTodoItem: function(todo){
    return (<div  key= {todo.id}>
            <span
            style={{textDecoration: todo.pending ? 'line-through' : 'none', cursor: 'pointer'}}
            onClick = {this.toggleTodo.bind(null, todo)} > {todo.text} </span>
            <span>
            <input type = "button" value="delete" onClick = {this.removetodo.bind(null,todo)} />
            </span>
           </div>);
  },
   generateTodoList: function (filter, todos) {
     return this.filterTodos(filter,todos).map(this.generateTodoItem);
   },

 // render: function () {
 //    return (<ul> {this.props.todos.map(this.generateTodoItem)} </ul>);

  render: function () {
    return (<div> {this.generateTodoList(this.props.visibile, this.props.todos)} </div>);
  }
});

export default TodoList
