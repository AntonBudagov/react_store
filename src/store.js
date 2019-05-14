import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk' // no changes here 😀

import reducer from './reducers';
// Middleware - моддифицирует то как работает функция dispatch
// первая функция принимает аргумент store
// const logMiddleware = (store) => (dispatch) => (action) ...
// чаще всего вместо dispatch используют next
const logMiddleware = ({getState}) => (next) => (action) => {
  console.log(action.type, getState());
  return next(action)
};

// applyMiddleware - (store enhancer) вызывает оргументы по порядку logMiddleware...
const store = createStore(reducer, applyMiddleware(thunkMiddleware, logMiddleware));

const myAction = (dispatch) => {
  setTimeout(() => dispatch({
      type: 'DELAY_ACTION'
    }), 2000)
};

store.dispatch(myAction);

export default store;