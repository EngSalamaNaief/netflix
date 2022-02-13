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
export const LoadUser=()=>(dispatch,getState)=>{
  
  dispatch({type:LOADING});
  
  const token =getState().authState.token;
  const config={
    headers:{
      "type-content":"application/json"
    }
  }
    if(token){
      config.headers["x-auth-token"]=token;
      axios.get("/user/getuser",config)
           .then(res=>{
             dispatch({
               type:LOAD_USER_SUCCESS,
               payload:res.data.user
             })
           }).catch(e=>{
             console.log(e.response)
               dispatch({
               type:LOAD_USER_FAIL,
               payload:e.response.message
             })
           })
    }
  }

// reggister
export const Register=(user)=>(dispatch)=>{

  const config={
    headers:{
      "type-content":"application/json"
    }
  }
    
  const body=JSON.stringify({...user})

      axios.post("http://localhost:5000/api/auth/register",body,config)
           .then(res=>{
             dispatch({
               type:REGISTER_SUCCESS,
               payload:res.data
             })
           }).catch(e=>{
             console.log(e.response)
               dispatch({
               type:REGISTER_FAIL,
               payload:e.response.message
             })
           })
    }


//login
 export const Login=(user)=>(dispatch)=>{

      const config={
        headers:{
          "type-content":"application/json"
        }
      }
        
      const body=JSON.stringify({...user})
    
          axios.post("/auth/login",body,config)
               .then(res=>{
                 dispatch({
                   type:LOGIN_SUCCESS,
                   payload:res.data
                 })
               }).catch(e=>{
                 console.log(e.response)
                   dispatch({
                   type:LOGIN_FAIL,
                   payload:e.response.message
                 })
               })
        }
  