//ClearCompleted.js

import React from 'react';
import store from './../state/store.js';
export default React.createClass({
   clearcompleted: function(todo) {
    store.dispatch({type:"CLEAR_COMPLETED" , filter:"CLEAR_COMPLETED"});
  },
  render: function () {
    return (
        <div>
        <input type='button'
               value='ClearCompleted'
               onClick = {this.clearcompleted} />
        </div>
    );
  }
});
