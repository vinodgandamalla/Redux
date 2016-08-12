import React from 'react';
import { Label } from 'react-bootstrap';
import {connect} from 'react-redux';
import store from './../state/store.js';
import Todo from './Todo.js';
import TodoList from './TodoList.js';
import Footer from './Footer.js';

const TodoManager = React.createClass({
  addNewTodo: function(todo) {
    store.dispatch({type:"ADD_TODO" , text:document.getElementById('todo-textbox').value});
    document.getElementById('todo-textbox').value='';
  },

  toggleTodo: function (todo) {
    store.dispatch({type:"TOGGLE_TODO" , id: todo.id});
  },
  showAll: function (todo) {
    store.dispatch({type:"SHOW_ALL" , filter:"SHOW_ALL"});
  },
  completed: function (todo) {
    store.dispatch({type:"SHOW_COMPLETED" , filter:"SHOW_COMPLETED"});
  },
  active: function (todo) {
    store.dispatch({type:"SHOW_ACTIVE" , filter:"SHOW_ACTIVE"});
  },
  clearcompleted: function(todo) {
    store.dispatch({type:"CLEAR_COMPLETED" , filter:"CLEAR_COMPLETED"});
  },
  removetodo: function(todo) {
    store.dispatch({type:"REMOVE_TODO" , id:todo.id});
  },
  render: function () {
    return (
        <div>
        <Todo addNewTodo={this.addNewTodo} />
        <TodoList toggletodo={this.toggleTodo}
                  todos={this.props.todos}
                  visibile={this.props.visibile}
                  removetodo={this.removetodo} />
        <Footer showall={this.showAll}
                completed={this.completed}
                active={this.active}
                itemsleft={this.props.todos.filter(function (todo) { return !todo.pending}).length}
                clearcompleted={this.clearcompleted} />
        </div>
    );
  }
});

const mapStateToProps = function (store) {
  return {
    todos:store.todostate,
    visibile:store.visibile
  };
}

export default connect(mapStateToProps)(TodoManager);
