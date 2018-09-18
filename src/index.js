import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import {createLogger} from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import App from './components/app';
import reducers from './reducers';
import rootReducer from './reducers';

const logger = createLogger();
// const createStoreWithMiddleware = applyMiddleware(thunk, promise, logger)(createStore);
const store = createStore(
  rootReducer,
  applyMiddleware(thunk, promise, logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.querySelector('.container'));
