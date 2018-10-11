import axios from 'axios';
import {
    GET_PRODUCTINFO,
    SEARCH_INFO,
    GET_SORTEDDATA
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
export function getProductInfoTarget(audience, brand, success) {
    return async function (dispatch) {
        try {
            const response = await axios.get('http://localhost:4000/productInfo', {
                params: {
                    target_audience: audience,
                    filter_brand: brand,
                    // high_to_low: sort 
                }
            });
            await dispatch({ type: GET_PRODUCTINFO, payload: response.data });
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
