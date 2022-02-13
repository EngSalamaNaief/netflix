import {
LOAD_USER_SUCCESS,
LOAD_USER_FAIL,
REGISTER_SUCCESS,
REGISTER_FAIL,
LOGIN_SUCCESS,
LOGIN_FAIL,
LOADING
} from "../constants/AuthConst";
import axios from "axios"; 
const LoadUser=()=>(dispatch,getState)=>{
  
  dispatch({type:LOADING});
  
  const token =getState().authState.token;
  const config={
    headers:{
      "type-content":"application/json"
    }
    if(token){
      config.headers["x-auth-token"]=token;
      axios.get("/getuser",config)
           .then(res=>{
             dispatch{
               type:LOAD_USER_SUCCESS,
               payload:res.data.user
             }
           }).catch(e=>{
               dispatch{
               type:LOAD_USER_FAIL,
               payload:e.response.message
             }
           })
    }
  }
}