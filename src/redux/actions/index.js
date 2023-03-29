import axios from 'axios';
import {FETCH_PRODUCTS, ERROR, SUCCESS, FETCH_SUCCESS} from './types';

export const getProducts = ()=> async dispatch=>{
    dispatch({type: FETCH_PRODUCTS, payload: []});
    try{
        const data = await axios.get('http://localhost:8000/api/products');
        // console.log("fetched");
        dispatch({type: FETCH_SUCCESS, payload:data.data.success.data});
    }
    catch(err){
        dispatch({type: Error, payload: "Something went wrong!"});
    }
}