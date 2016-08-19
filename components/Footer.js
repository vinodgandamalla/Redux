//Footer.js
import React from 'react';

import FilterTodos from './FilterTodos.js';

import ClearCompleted from './ClearCompleted.js';

import ItemsLeft from './ItemsLeft.js';

import store from './../state/store.js';

const Footer= React.createClass({
    render: function () {
    return (
        <div>

        <ItemsLeft items={this.props.itemsleft} />
        <FilterTodos />
        <ClearCompleted />
        </div>
    );
  }
});

export default Footer;
