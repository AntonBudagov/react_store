import React from 'react';
import {connect} from 'react-redux';

import {withBookServices} from '../hoc-helper'


import './app.css';
import {Route, Switch} from "react-router-dom";
import {HomePage, CartPage} from "../pages";

const App = (props) => {
  // console.log(props.service.getBooks());
  return (
    <Switch>
      <Route path='/' exect component={HomePage}/>
      <Route path='/cart' component={CartPage}/>
    </Switch>
  );
};

export default withBookServices()(App);
