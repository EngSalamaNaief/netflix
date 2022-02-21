import {
GET_MOVIE_SUCCES,
GET_MOVIE_FAIL,
UPDATE_MOVIE_SUCCES,
UPDATE_MOVIE_FAIL,
DELETE_MOVIE_SUCCESS,
DELETE_MOVIE_FAIL,
GET_ALL_MOVIES_SUCCESS,
GET_ALL_MOVIES_FAIL,
GET_RANDUM_MOVIES_SUCCESS,
GET_RANDUM_MOVIES_FAIL,
LOADING_ALL,
LOADING_MOVIE,
LOADING_RANDUM
} from "../constants/MovieConst";

const initState={
  randumMovie:null,
  movie:null,
  allMovies:null,
  loading_all:null,
  loading_movie:null,
  loading_randum:null,
  msg:""
}
export default function AuthReducer(state=initState,action){
  switch (action.type) {
    case LOADING_RANDUM:
      return{
        ...state,
        loading_randum:true
      }
    case LOADING_MOVIE:
      return{
        ...state,
        loading_movie:true
      }
    case LOADING_ALL:
      return{
        ...state,
        loading_all:true
      }
    case GET_MOVIE_SUCCES:
      return{
        ...state,
        loading_movie:false,
        movie:action.payload
      }
    case GET_RANDUM_MOVIES_SUCCESS:
      return{
        ...state,
        loading_randum:false,
        randumMovie:action.payload
      }
    case GET_ALL_MOVIES_SUCCESS:
      return{
        ...state,
        loading_all:false,
        allMovies:action.payload
      }
    case GET_MOVIE_FAIL:
      return{
        ...state,
        loading_movie:false,
        movie:null,
        msg:action.payload
      }
    case GET_RANDUM_MOVIES_FAIL:
      return{
        ...state,
        loading_randum:false,
        randumMovie:null,
        msg:action.payload
      }
    case GET_ALL_MOVIES_FAIL:
      return{
        ...state,
        loading_all:false,
        allMovies:null,
        msg:action.payload
      }
    
    default:return state
      // code
  }
}