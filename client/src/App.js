
import Home from './pages/Home';
import Watch from './pages/Watch';
import {BrowserRouter as Router,Route,Switch,Redirect} from "react-router-dom"
import SignupPage from './pages/SignupPage';
import SigninPage from './pages/SigninPage';
import Notfound from './pages/Notfound';
function App() {
  const user=true;
  return (
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
  );
}

export default App;
