import React,{useEffect} from 'react';
import {connect} from 'react-redux';
import Navbar from "../components/Navbar";
import Featured from "../components/Featured";
import List from '../components/List';

import {GetLists} from "../redux/actions/ListsAction"

 function Home({type,user,lists,GetLists}) {
   console.log("user",user)
   console.log("lists",lists)
   useEffect(()=>{
     GetLists();
   },[type])
  return (
      <div className="bg-black w-full overflow-hidden">
           <Navbar/>
           <Featured type={type} />
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
    lists:state.listState.list
}
}
export default connect(mapStateToProps,{GetLists})(Home);