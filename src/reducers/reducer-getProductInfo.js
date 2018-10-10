import { GET_PRODUCTINFO, SEARCH_INFO } from '../actions/types';

const INITIAL_STATE = {
    product_info: [],
    search_result: {}
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
            }

        default:
            return state;
    }
}
