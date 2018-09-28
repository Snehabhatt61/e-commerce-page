import { GET_SORTEDDATA } from '../actions/types';

const INITIAL_STATE = {
    sorted_product_info : []
}
export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case GET_SORTEDDATA:
            return { 
                ...state,
                sorted_product_info: action.payload
            };
        default:
            return state;
    }
}
