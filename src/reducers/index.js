import { combineReducers } from 'redux';
import product_info from './reducer-getProductInfo';

const rootReducer = combineReducers({
  product_info
});
export default rootReducer;
