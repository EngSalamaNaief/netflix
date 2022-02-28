import Topbar from "../components/Dashboard/Topbar";
import SideBar from "../components/Dashboard/Sidebar";
import DashHome from "./Dashboard/DashHome";
import MovieUpdate from "./Dashboard/MovieUpdate";
import MovieDetails from "./Dashboard/MovieDetails";
import CreateUser from "./Dashboard/CreateUser";
import CreateMovie from "./Dashboard/CreateMovie";
//import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import {Route} from 'react-router-dom';
import UsersList from "./Dashboard/UserList";
import MovieList from "./Dashboard/MovieList";
import User from "./Dashboard/User";

function Dashboard() {
  return (
   
    <div className="px-2">
       <Topbar/>
       <div className="grid md:grid-cols-5">
         <div className="p-3">
           <SideBar/>
         </div>
         <div className="pt-3 col-span-4">
           
              <Route path="/dashboard" exact >
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
              <Route path="/dashboard/movieupdate/:id">
                  <MovieUpdate/>
              </Route>
              <Route path="/dashboard/moviedetails/:id">
                  <MovieDetails/>
              </Route>
              <Route path="/dashboard/createuser">
                  <CreateUser/>
              </Route>
              <Route path="/dashboard/createmovie">
                  <CreateMovie/>
              </Route>
           
            
         </div>
       </div>
    </div>
  
  );
}

export default Dashboard;
