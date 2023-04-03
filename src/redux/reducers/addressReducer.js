import { ADDRESS_ERROR, ADDRESS_REQUEST, ADDRESS_SUCCESS, INIT_APP } from "../actions/types"

const initialState = {address: []};

export const addressReducer = (state = initialState, action)=>{
    
    switch(action.type){

        case ADDRESS_REQUEST: return state;

        case ADDRESS_SUCCESS:
        return {...state, address:[...state.address, action.payload.data]};

        case ADDRESS_ERROR: return state;

        case INIT_APP:
            if(localStorage.getItem('address')){
                return {...state, address:JSON.parse(localStorage.getItem('address'))}
            }
            else{
                return state;
            }

        default: return state;
    }
}