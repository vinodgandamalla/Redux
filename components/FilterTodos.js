//FilterTodos.js

import React from 'react';
import {Button} from 'react-bootstrap';
import {ButtonGroup} from 'react-bootstrap';
import store from './../state/store.js';
export default React.createClass({
   showAll: function (todo) {
    store.dispatch({type:"SHOW_ALL" , filter:"SHOW_ALL"});
  },
  completed: function (todo) {
    store.dispatch({type:"SHOW_COMPLETED" , filter:"SHOW_COMPLETED"});
  },
  active: function (todo) {
    store.dispatch({type:"SHOW_ACTIVE" , filter:"SHOW_ACTIVE"});
  },
  render: function() {
    return (
        <div>
        <input type="button"
               value="All"
               onClick={this.showAll} />
        <input type="button"
               value="Active"
               onClick={this.active} />
         <input type="button"
               value="Completed"
               onClick={this.completed} />
        </div>
    );
  }
});
