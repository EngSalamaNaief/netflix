import {
GET_LISTS_SUCCES,
GET_LISTS_FAIL,
LOADING
} from "../constants/ListsConst";

const initailState={
  list:[],
  loading:null,
  msg:""
}

export default function ListsReducer(state=initailState,action){
switch (action.type) {
  case LOADING:{
    return{
      ...state,
      loading:true
    }
  }
  case GET_LISTS_SUCCES:{
    return{
      ...state,
      loading:false,
      list:action.payload
    }
  }
  case GET_LISTS_FAIL:{
    return{
      ...state,
      loading:false,
      list:[],
      msg:action.payload
    }
  }
  
  
  default:return state
    // code
}
  
  
}