// import {} from './cartReducers'
import { combineReducers } from 'redux';

import {productsReducer} from './productReducer';
import { cartReducer } from './cartReducers';
import { userReducer } from './userReducer';
import { addressReducer } from './addressReducer';
import { orderReducer } from './ordersReducer';

const rootReducer = combineReducers({
    products: productsReducer,
    carts: cartReducer,
    users: userReducer,
    address: addressReducer,
    order: orderReducer
},)

export default rootReducer;