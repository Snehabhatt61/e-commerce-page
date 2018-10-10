import { combineReducers } from 'redux';
import product_info from './reducer-getProductInfo';
import sorted_product_info  from './reducer-getSortedProductInfo';
import  search_result  from './reducer-getProductInfo';

const rootReducer = combineReducers({
  product_info,
  sorted_product_info,
  search_result
});
export default rootReducer;
