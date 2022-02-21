 
 import {combineReducers} from 'redux';
 import AuthReducer from './AuthReducer';
 import ListsReducer from './ListsReducer';
 import MovieReducer from './MovieReducer';
 
 export default combineReducers({
   authState:AuthReducer,
   movieState:MovieReducer,
   listState:ListsReducer
 })