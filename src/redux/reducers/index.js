// import {} from './cartReducers'
import { combineReducers } from 'redux';

import {productsReducer} from './productReducer';
import { cartReducer } from './cartReducers';
import { userReducer } from './userReducer';

const rootReducer = combineReducers({
    products: productsReducer,
    carts: cartReducer,
    users: userReducer,
})

export default rootReducer;