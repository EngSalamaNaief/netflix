
import Home from './pages/Home';
import Watch from './pages/Watch';
import {BrowserRouter as Router,Route,Switch,Redirect} from "react-router-dom"
import SignupPage from './pages/SignupPage';
import SigninPage from './pages/SigninPage';
import Notfound from './pages/Notfound';
import {Provider} from "react-redux";
import Store from './redux/store/Store';
import { useEffect, useState } from 'react';
import {LoadUser} from "./redux/actions/AuthAction"

function App() {
  const [user,setUser] = useState(null);

  useEffect(()=>{
       Store.dispatch(LoadUser());
     //  setUser(Store.getState.authState.user)
  },[])
  console.log(Store.getState.authState);
  return (
    <Provider store={Store}>
      <Router className="">
       <Switch>
         <Route path="/" exact>
           {user?(<Home/>):(<Redirect to="/register"/>)}
         </Route>
         <Route path="/series" >
           {user?(<Home type="series"/>):(<Redirect to="/register"/>)}
         </Route>
         <Route path="/movies" >
           {user?(<Home type="movies"/>):(<Redirect to="/register"/>)}
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
         <Route >
           <Notfound/>
         </Route>
       </Switch>
      
    </Router>
    </Provider>
  );
}

export default App;
