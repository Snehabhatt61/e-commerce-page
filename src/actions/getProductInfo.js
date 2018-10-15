import axios from 'axios';
import {
    GET_PRODUCTINFO,
    SEARCH_INFO,
    GET_SORTEDDATA,
    GET_DETAILPRODUCTINFO
} from "./types";

export function getSearchedProductInfo(search, success) {
    return async function (dispatch) {
        try {
            const response = await axios.get('http://localhost:4000/search', {
                params: {
                    search_bar: search
                }
            });
            await dispatch({ type: SEARCH_INFO, payload: response.data });
            success && success();
        } catch (e) {
            console.error(e);
        }
    }
};
export function getProductInfo(filter , success) {
    return async function (dispatch) {
        try {
            console.log("------------------")
            const response = await axios.get('http://localhost:4000/productDetail', {
                params: {
                  ...filter,  
                }
            });
            console.log('res', response)
            await dispatch({ type: GET_DETAILPRODUCTINFO, payload: response.data });
            success && success();
        } catch (e) {
            console.error(e);
        }
    }
};
export function getSortedProductInfo() {
    return async function (dispatch) {
        try {
            const response = await axios.put('http://localhost:4000/sort=asc');
            await dispatch({ type: GET_PRODUCTINFO, payload: response.data });
        } catch (e) {
            console.error(e);
        }
    }
};
