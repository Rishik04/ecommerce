// import {} from './cartReducers'
import {productsReducer} from './productReducer';

import { combineReducers } from 'redux';
import { cartReducer } from './cartReducers';

const rootReducer = combineReducers({
    products: productsReducer,
    carts: cartReducer
})

export default rootReducer;