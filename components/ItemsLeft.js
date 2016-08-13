import React from 'react';

export default React.createClass({
  render: function() {
    return (
        <span>
        {this.props.items} itemsleft
        </span>
    );
  }
});
