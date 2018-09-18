import axios from 'axios';
import {
    GET_PRODUCTINFO
} from "./types";

export function getProductInfo() {
    return async function (dispatch) {
        try {
            const response = await axios.get('http://localhost:4000/Product_info');
            // console.log('getdata', response.data);
            await dispatch({ type: GET_PRODUCTINFO, payload: response.data });
            console.log('get',response.data);
        } catch (e) {
            console.error(e);
        }
    }
};