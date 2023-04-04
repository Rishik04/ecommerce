import { ADD_PAYMENT_REQUEST, ADD_PAYMENT_SUCCESS } from "../actions/types";

export const orderReducer = (state = {loading: false}, action)=>{
    
    switch(action.type){

        case ADD_PAYMENT_REQUEST: return {...state, loading:true};
        case ADD_PAYMENT_SUCCESS : return {...state, loading: false, paymentMethod: action.payload}

        default: return state;
    }
}