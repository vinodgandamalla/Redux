import React from 'react';
import { Label } from 'react-bootstrap';
import {connect} from 'react-redux';
import store from './../state/store.js';
import Todo from './Todo.js';
import TodoList from './TodoList.js';
import Footer from './Footer.js';

const TodoManager = React.createClass({
    render: function () {
    return (
        <div>
        <Todo />
        <TodoList todos={this.props.todos}
                  visibile={this.props.visibile} />
        <Footer itemsleft={this.props.todos.filter(function (todo) { return !todo.pending}).length} />
        </div>
    );
  }
});

const mapStateToProps = function (store) {
  return {
    todos:store.todostate.tasks,
    visibile:store.visibile
  };
}

export default connect(mapStateToProps)(TodoManager);
