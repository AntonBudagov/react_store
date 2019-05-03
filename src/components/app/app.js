import React from 'react';
import {Route, Switch} from "react-router-dom";

// import {withBookServices} from '../hoc-helper'


import './app.css';
import ShopHeader from '../shop-header';
// Pages
import {HomePage, CartPage} from "../pages";


const App = (props) => {
  // console.log(props.service.getBooks());
  return (
    <main role="main" className="container">
      <ShopHeader numItems={11} total={2011}/>
      <Switch>
        <Route path='/' exact component={HomePage} />
        <Route path='/cart' component={CartPage}/>
      </Switch>
    </main>
  );
};

// export default withBookServices()(App);

export default App;