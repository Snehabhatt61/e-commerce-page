import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './components/app';
import reducers from './reducers';
import rootReducer from './reducers';

// const createStoreWithMiddleware = applyMiddleware()(createStore);
const store = createStore(
  rootReducer
);

ReactDOM.render(
  <Provider store={(store)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
