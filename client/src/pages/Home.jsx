import React,{useEffect,useState} from 'react';
import {connect} from 'react-redux';
import Navbar from "../components/Navbar";
import Featured from "../components/Featured";
import List from '../components/List';
import {GetRandumMovie} from "../redux/actions/MoveAction";
import {GetLists} from "../redux/actions/ListsAction"

 function Home({type,user,lists,GetLists,GetRandumMovie}) {
   console.log("state",user)
   console.log("lists",lists)
   const [genre,setGenre]=useState("")
   useEffect(()=>{
     GetLists(type,genre);
     GetRandumMovie(type)
   },[type,genre])
  return (
      <div className="bg-black w-full overflow-hidden">
           <Navbar/>
           <Featured type={type} genre={genre} setGenre={setGenre}/>
          {lists?.map(list=>(
              <List key={list._id} list={list}/>
          ))
         
          }
        
      </div>
    );
}
const mapStateToProps=(state)=>{
  return{
    user:state.authState,
    token:state.authState.token,
    lists:state.listState.list
}
}
export default connect(mapStateToProps,{GetLists,GetRandumMovie})(Home);