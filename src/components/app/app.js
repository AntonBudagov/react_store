import React from 'react';
import {connect} from 'react-redux';

import {withBookServices} from '../hoc-helper'


import './app.css';

const App = (props) => {
  console.log(props.service.getBooks());
  return <div>App</div>;
};

export default withBookServices()(App);
