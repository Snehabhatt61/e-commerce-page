import { combineReducers } from 'redux';
import product_info from './reducer-getProductInfo';

const rootReducer = combineReducers({
  // state: (state = {}) => state
  product_info
});

export default rootReducer;
