import { ADD_PAYMENT_REQUEST, ADD_PAYMENT_SUCCESS } from "./types";


export const addPayment = (payment) => async (dispatch)=>{
    dispatch({type: ADD_PAYMENT_REQUEST, payload:{}})
    dispatch({type: ADD_PAYMENT_SUCCESS, payload:payment})
}