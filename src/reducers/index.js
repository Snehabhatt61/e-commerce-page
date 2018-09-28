import { combineReducers } from 'redux';
import product_info from './reducer-getProductInfo';
import sorted_product_info from './reducer-getSortedProductInfo';

const rootReducer = combineReducers({
  product_info,
  sorted_product_info
});
export default rootReducer;
