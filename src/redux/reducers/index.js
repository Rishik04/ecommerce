// import {} from './cartReducers'
import { combineReducers } from 'redux';

import {productsReducer} from './productReducer';
import { cartReducer } from './cartReducers';
import { userReducer } from './userReducer';
import { addressReducer } from './addressReducer';

const rootReducer = combineReducers({
    products: productsReducer,
    carts: cartReducer,
    users: userReducer,
    address: addressReducer,
},)

export default rootReducer;