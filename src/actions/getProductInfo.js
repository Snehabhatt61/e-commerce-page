import axios from 'axios';
import {
    GET_PRODUCTINFO,
    GET_SORTEDDATA
} from "./types";

export function getProductInfo(filterSort) {
    return async function (dispatch) {
        try {
            const response = await axios.get('http://localhost:4000/product-info', {
                params: {
                    // target_audience: audience,
                    filter : filterSort
                }
            });

            await dispatch({ type: GET_PRODUCTINFO, payload: response.data });
            // await console.log('action',response);
        } catch (e) {
            console.error(e);
        }
    }
};

export function getSortedProductInfo() {
    return async function (dispatch) {
        try {
            const response = await axios.put('http://localhost:4000/sort=asc');
            await dispatch({ type: GET_PRODUCTINFO, payload: response.data});       
        } catch (e) {
            console.error(e);
        }
    }  
};
