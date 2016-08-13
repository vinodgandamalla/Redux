//Footer.js
import React from 'react';

import FilterTodos from './FilterTodos.js';

import ClearCompleted from './ClearCompleted.js';

import ItemsLeft from './ItemsLeft.js';

const Footer= React.createClass({
  render: function () {
    return (
        <div>

        <ItemsLeft items={this.props.itemsleft} />
        <FilterTodos All={this.props.showall}
                     Active={this.props.active}
                     Completed={this.props.completed} />
      <ClearCompleted ClearCompleted ={this.props.clearcompleted} />
        </div>
    );
  }
});

export default Footer;
