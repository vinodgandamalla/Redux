//ClearCompleted.js

import React from 'react';

export default React.createClass({
  render: function () {
    return (
        <div>
        <input type='button'
               value='ClearCompleted'
               onClick = {this.props.ClearCompleted} />
        </div>
    );
  }
});
