//Footer.js
import React from 'react';

import FilterTodos from './FilterTodos.js';

import ClearCompleted from './ClearCompleted.js';

const Footer= React.createClass({
  render: function () {
    return (
        <div>
         <span>{this.props.itemsleft} items left </span>
        <FilterTodos All={this.props.showall}
                     Active={this.props.active}
                     Completed={this.props.completed} />
      <ClearCompleted ClearCompleted ={this.props.clearcompleted} />
        </div>
    );
  }
});

export default Footer;
