import {
GET_LISTS_SUCCES,
GET_LISTS_FAIL,
LOADING
} from "../constants/ListsConst";
import axios from "axios"
export const GetLists=()=>(dispatch,getState)=>{
  dispatch({type:LOADING});
  axios.get("/api/lists/getlist")
       .then(res=>{
         dispatch({
           type:GET_LISTS_SUCCES,
           payload:res.data.list
         })
       }).catch(e=>{
         dispatch({
           type:GET_LISTS_FAIL,
           payload:e.response.data.msg
         })
       })
}