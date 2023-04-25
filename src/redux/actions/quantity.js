import axios from "axios";
import { ADD_TO_CART, DELETE_ITEM, ERROR, REMOVE_QUANTITY } from "./types"
import URL from "../../baseURL";

export const addQuantity = (products)=>async (dispatch, getState)=>{
    const addQty = {...products, qty:1}
    try{
        dispatch({type: ADD_TO_CART, payload: addQty});
        const res = await axios.post(`${URL}/user/add-to-cart`, {
            id: getState().users.users._id,
            cart: getState().carts.cartItems,
          });
        localStorage.setItem('cartItem', JSON.stringify(getState().carts.cartItems))
    }
    catch(err){
        dispatch({type: ERROR, payload: "Can't add to cart"});
    }
}

export const remoeQuantity = (product)=>async (dispatch, getState)=>{
    try{
        dispatch({type: REMOVE_QUANTITY, payload: product});
        localStorage.setItem('cartItem', JSON.stringify(getState().carts.cartItems))
    }
    catch(err){
        dispatch({type: ERROR, payload: "Can't remove products"})
    }
}

export const deleteItem = (product)=>async (dispatch, getState)=>{
    try{
        dispatch({type: DELETE_ITEM, payload: product});
        const res = await axios.post(`${URL}/user/add-to-cart`, {
            id: getState().users.users._id,
            cart: getState().carts.cartItems,
          });
          console.log(res);
        localStorage.setItem('cartItem', JSON.stringify(getState().carts.cartItems))
    }
    catch(err){
        dispatch({type: ERROR, payload: "Can't delete products"})
    }
}
