import { GET_PRODUCTINFO, SEARCH_INFO, GET_DETAILPRODUCTINFO } from '../actions/types';

const INITIAL_STATE = {
    product_info: [],
    search_result: {},
    allProduct_detail: {}
}
export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case GET_PRODUCTINFO:
            return {
                ...state,
                product_info: action.payload
            };
        case SEARCH_INFO:
            return {
                ...state,
                search_result: action.payload
            };
        case GET_DETAILPRODUCTINFO:
            return {
                ...state,
                allProduct_detail: action.payload
            }
        default:
            return state;
    }
}
