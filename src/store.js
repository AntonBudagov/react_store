import {createStore, compose} from 'redux';

import reducer from './reducers';

// enhancer - улучшать и совершенствовать store;
const stringEnhancer = createStore => (...args) => {
  const store = createStore(...args);
  const originalDispatch = store.dispatch;
  store.dispatch = (action) => {
    if (typeof action === 'string') {
      return originalDispatch({
        type: action
      })
    }
    return originalDispatch(action)
  };
  return store
};
const logEnhancer = createStore => (...args) => {
  const store = createStore(...args);
  const originalDispatch = store.dispatch;
  store.dispatch = (action) => {
    console.log(action.type);
    return originalDispatch(action)
  };
  return store
};
const store = createStore(reducer, compose(stringEnhancer, logEnhancer));
store.dispatch('Hello world');

// another way Monkey patching
// используют в редких случаях когда библиотека не поддерживает что то

export default store;