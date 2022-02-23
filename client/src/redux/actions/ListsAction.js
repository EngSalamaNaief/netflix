import {
GET_LISTS_SUCCES,
GET_LISTS_FAIL,
LOADING
} from "../constants/ListsConst";
import axios from "axios"
export const GetLists=(type,genre)=>(dispatch,getState)=>{
  dispatch({type:LOADING});
   const token =getState().authState.token;
  const config={
    headers:{
      "type-content":"application/json"
    }
  }
  
    if(token){
      config.headers["x-auth-token"]=token;
        axios.get(`/api/lists/getlist${type?"?type="+type:""}${genre?"&genre="+genre:""}`,config)
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
}