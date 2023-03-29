import { ADD_QUANTITY, ADD_TO_CART } from "../actions/types";

const initialState = {
    cartItems: [],
}
export const cartReducer = (state = initialState, action)=>{
    switch(action.type){
        case ADD_TO_CART:
        const item = action.payload
        const findItem = state.cartItems.filter(x => x._id == item._id);
        // console.log(findItem)
        if(findItem.length==0)
            return {...state, cartItems:[...state.cartItems, item]}
        else{
            const getItem = state.cartItems.map(x=>x._id === item._id?{...item, qty:item.qty+x.qty}:x);
            console.log(getItem);
            return {...state, cartItems:getItem};
        }
        default: return state;
    }
}