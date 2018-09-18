import { GET_PRODUCTINFO } from '../actions/types';

const INITIAL_STATE = {
    product_info : []
}
export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case GET_PRODUCTINFO:
            return { 
                ...state,
                product_info: action.payload
            };
        default:
            return state;
    }
}
