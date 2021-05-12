import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Link, Switch, withRouter} from "react-router-dom";
import { browserHistory } from "react-router"

import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store"

import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
// import AddTodo from "./components/todo/add-todo";
// import EditTodo from "./components/todo/edit-todo";
// import TodoList from "./components/todo/todos-list";
// import Login from "./components/login/login";
// import Signup from "./components/signup/signup"
// import Logo from "./Logo.png";
import "./App.css";
// import TodoList from "./components/todo/TodoList";
// import EditTodo from "./components/todo/edit-todo";
// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./";
  }
}

function App() {
  
  return(
    <Provider store={store}>
  {/* //  <>
  //  <div className="todo">
  //   <TodoList />
  //  </div>
  //  </> */}
  <div className="auth-wrapper">
   <div className="auth-inner">
   <Router > 
   <div className="container">
     {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
       <a className="navbar-brand" href="#" target="_blank">
         <img src={Logo} width="30" height="30" alt="CodingTheSmartWay.com" />
       </a>
       <Link to="/" className="navbar-brand">WELCOME TO THE FAMILY APP</Link>
       <div className="collpase navbar-collapse">
         <ul className="navbar-nav mr-auto">
           <li className="navbar-item">
             <Link to="/" className="nav-link">Todos</Link>
           </li>
           <li className="navbar-item">
             <Link to="/create" className="nav-link">Create Todo</Link>
           </li>
         </ul>
       </div>
     </nav>
     <br/> */}
     {/* <Route path="/" exact component={TodoList} />
     <Route path="/edit/:id" component={EditTodo} />
     <Route path="/create" component={AddTodo} /> */}
    {/* <route path="/" exact component={Login}/> */}
     {/* <Login /> */}
     <Switch>
       <Route  path="/" exact component={Login}></Route>
     <Route path="/signup" exact component={Register} />
     <PrivateRoute exact path="/dashboard" component={Dashboard} />
     </Switch>

   </div>
 </Router>
 </div>
 </div>
 </Provider>
);
}
export default withRouter (App);
