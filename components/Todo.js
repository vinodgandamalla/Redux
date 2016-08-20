import React from 'react';
import ReactDOM from 'react-dom';
import store from './../state/store.js';

const Todo = React.createClass({
  getInitialState: function() {
    return {txt: ''};
  },
  addNewTodo: function() {
    store.dispatch({type:"ADD_TODO" , text: this.state.txt});
     this.setState({text: ''});
  },
  addtext: function (e) {
    this.setState({txt: e.target.value});
  },

  render: function () {
    return (
      <div>
      <input type="text" id="todo-textbox" onChange= {this.addtext}  />
      <input type="button"
             value="Add Todo"
             onClick = {this.addNewTodo}  />
      </div>
    )
  }
});

export default Todo
