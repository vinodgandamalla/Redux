//FilterTodos.js

import React from 'react';
import {Button} from 'react-bootstrap';
import {ButtonGroup} from 'react-bootstrap';

export default React.createClass({
  render: function() {
    return (
        <div>
        <input type="button"
               value="All"
               onClick={this.props.All} />
        <input type="button"
               value="Active"
               onClick={this.props.Active} />
         <input type="button"
               value="Completed"
               onClick={this.props.Completed} />
        </div>
    );
  }
});
