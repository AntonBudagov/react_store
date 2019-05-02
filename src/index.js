import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';


import * as serviceWorker from './serviceWorker';
import BookstoreService from './services/bookstore-service';

import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import {BookServiceProvider} from './components/bookstore-service-context';


// import {HomePage, CartPage} from './components/pages';

import store from './store';

const service = new BookstoreService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <BookServiceProvider value={service}>
        <Router>
          <App />
          {/*<ul className="navbar-nav mr-auto">*/}
            {/*<li className="nav-item active">*/}
              {/*<Link className="nav-link" to="/Home">Home <span className="sr-only">(current)</span></Link>*/}
            {/*</li>*/}
            {/*<li className="nav-item">*/}
              {/*<Link className="nav-link" to="/Cart">Cart</Link>*/}
            {/*</li>*/}
          {/*</ul>*/}
        </Router>
      </BookServiceProvider>
    </ErrorBoundry>
  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
