import axios from "axios";
import {
  ADD_CART_ITEM_TO_PROFILE_REQ,
  ADD_TO_CART_FROM_PROFILE,
  DELETE_CART,
  LOGIN_REQUEST,
  LOGOUT_REQUEST,
} from "./types";
import {
  LOGIN_ERROR,
  REGISTER_ERROR,
  REGISTER_REQ,
  REGISTER_SUCCESS,
  LOGIN_SUCCESS,
} from "./types";
import URL from "../../baseURL";

export const UserRegister = (user) => async (dispatch, getState) => {
  dispatch({ type: REGISTER_REQ, payload: {} });
  try {
    const res = await axios.post(`${URL}/user/register`, user);
    if (res.data.status === 200) {
      dispatch({ type: REGISTER_SUCCESS, payload: res.data.success });
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.success });
      localStorage.setItem("user", JSON.stringify(getState().users.users));
    } else {
      dispatch({ type: REGISTER_ERROR, payload: res.data.error });
    }
  } catch (err) {
    dispatch({ type: REGISTER_ERROR, payload: err });
  }
};

export const UserLogin = (user) => async (dispatch, getState) => {
  dispatch({ type: LOGIN_REQUEST, payload: {} });
  try {
    const res = await axios.post(`${URL}/user/login`, user);

    if (res.data.status === 200) {
      dispatch({ type: LOGIN_SUCCESS, payload: res.data.success });
      if (res.data.success.data.cart.length !== 0) {
        if(localStorage.getItem("cartItem")){
            const cartBeforeSignIn = JSON.parse(localStorage.getItem("cartItem"));
            const cartFromUser = res.data.success.data.cart;
            const combineCarts = [...cartBeforeSignIn, ...cartFromUser];
            console.log(combineCarts);
            localStorage.setItem(
              "cartItem",
              JSON.stringify(combineCarts)
            );
        }
        else{
            localStorage.setItem(
                "cartItem",
                JSON.stringify(res.data.success.data.cart)
              );
        }
        dispatch({ type: ADD_TO_CART_FROM_PROFILE, payload: {} });
      }
      localStorage.setItem("user", JSON.stringify(getState().users.users));
    } else {
      dispatch({ type: LOGIN_ERROR, payload: res.data.error });
    }
  } catch (err) {
    dispatch({ type: LOGIN_ERROR, payload: err });
  }
};

export const Logout = (id, cart) => async (dispatch) => {
  dispatch({ type: ADD_CART_ITEM_TO_PROFILE_REQ, payload: {} });
  try {
    const res = await axios.post(`${URL}/user/add-to-cart`, {
      id: id,
      cart: cart,
    });
    console.log(res);

    dispatch({ type: LOGOUT_REQUEST, payload: {} });
    dispatch({ type: DELETE_CART, payload: {} });
    localStorage.clear();
  } catch (err) {
    console.log(err);
  }
};
