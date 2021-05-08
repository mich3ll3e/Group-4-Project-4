import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import AddTodo from "./components/todo/add-todo";
import EditTodo from "./components/todo/edit-todo";
import TodoList from "./components/todo/todos-list";
import Login from "./components/login/login";
import Signup from "./components/signup/signup"
import Logo from "./Logo.png";
import "./App.css";
// import TodoList from "./components/todo/TodoList";
// import EditTodo from "./components/todo/edit-todo";

function App() {
  
  return(
  //  <>
  //  <div className="todo">
  //   <TodoList />
  //  </div>
  //  </>
  <div className="auth-wrapper">
   <div className="auth-inner">
   <Router>
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
     <Route path="/signup" exact component={Signup} />
     </Switch>

   </div>
 </Router>
 </div>
 </div>
);
}

export default App;
