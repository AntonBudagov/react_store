import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';


import * as serviceWorker from './serviceWorker';
import BookstoreService from './services/bookstore-service';

import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import {BookServiceProvider} from './components/bookstore-service-context';

import store from './store';

const service = new BookstoreService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <BookServiceProvider value={service}>
        <Router>
          <App />
        </Router>
      </BookServiceProvider>
    </ErrorBoundry>
  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
