import axios from "axios";
import { ADDRESS_ERROR, ADDRESS_REQUEST, ADDRESS_SUCCESS } from "./types";



export const addAddress = (address) => async (dispatch, getState)=>{
    dispatch({type: ADDRESS_REQUEST, payload:{}})
    try{
        const res = await axios.post('http://localhost:8000/user/add-address', address);
        if(res.data.status === 200){
            dispatch({type: ADDRESS_SUCCESS, payload: res.data.success});
            localStorage.setItem('address', JSON.stringify(res.data.success.data));
        }
        else{
            dispatch({type:ADDRESS_ERROR, payload: res.data.error});
        }
    }
    catch(err){
        dispatch({type: ADDRESS_ERROR, payload:err});
    }
}