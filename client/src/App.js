
import Home from './pages/Home';
import Watch from './pages/Watch';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import SignupPage from './pages/SignupPage';
import SigninPage from './pages/SigninPage';
function App() {
  return (
    <Router className="">
       <Switch>
         <Route path="/" exact>
           <Home/>
         </Route>
         <Route path="/watch">
           <Watch/>
         </Route>
         <Route path="/register">
           <SignupPage/>
         </Route>
         <Route path="/login">
           <SigninPage/>
         </Route>
       </Switch>
      
    </Router>
  );
}

export default App;
