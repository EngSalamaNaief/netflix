import Home from '../pages/Home';
import Dashboard from './Dashboard';
import React from 'react';
import Watch from '../pages/Watch';
import {BrowserRouter as Router,Route,Switch,Redirect} from "react-router-dom"
import SignupPage from '../pages/SignupPage';
import SigninPage from '../pages/SigninPage';
import Notfound from '../pages/Notfound';
import { useEffect, useState } from 'react';
import {connect} from 'react-redux';
import {LoadUser} from "../redux/actions/AuthAction"
import UsersList from "./Dashboard/UserList";
import MovieList from "./Dashboard/MovieList";
import User from "./Dashboard/User";
import DashHome from "./Dashboard/DashHome";

function RootPage({userState}) {
 const [user,setUser] = useState(null);
  
  useEffect(()=>{
      
    setUser(userState.user)
  },[userState.user])
 
  return (
 
      <Router >
       <Switch>
       
         <Route path="/" exact>
           {user?(<Home/>):(<Redirect to="/register"/>)}
         </Route>
         <Route path="/series" >
           {user?(<Home type="series"/>):(<Redirect to="/register"/>)}
         </Route>
         <Route path="/movies" >
           {user?(<Home type="movie"/>):(<Redirect to="/register"/>)}
         </Route>
         <Route path="/watch">
           {user?(<Watch/>):(<Redirect to="/register"/>)}
         </Route>
         <Route path="/register">
          {!user?( <SignupPage/>):(<Redirect to="/"/>)}
         </Route>
         <Route path="/login">
           {!user?(<SigninPage/>):(<Redirect to="/"/>)}
         </Route>
         {/*
              <Route path="/dashboard" >
                 <DashHome/>
              </Route>
              
              <Route path="/dashboard/users">
                  <UsersList/>
              </Route>
              <Route path="/dashboard/user/:id">
                  <User/>
              </Route>
              <Route path="/dashboard/movies">
                  <MovieList/>
              </Route>
              */}
            <Route> <Dashboard/></Route>
         <Route >
           <Notfound/>
         </Route>
         
       </Switch>
      
    </Router>
    
   
  );
}
const mapStateToProps=(state)=>{
  return{
    userState:state.authState
}
}
export default connect(mapStateToProps)(RootPage);
