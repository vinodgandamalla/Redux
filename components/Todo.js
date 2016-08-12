import React from 'react';
import ReactDOM from 'react-dom';

const Todo = React.createClass({
  render: function () {
    return (
      <div>
      <input type="text" id="todo-textbox" />
      <input type="button"
             value="Add Todo"
             onClick = {this.props.addNewTodo}  />
      </div>
    )
  }
});

export default Todo
