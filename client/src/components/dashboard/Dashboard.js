import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import setAuthToken from "../../utils/setAuthToken";
import { setCurrentUser } from "../../actions/authActions";
import { Provider } from "react-redux";
import jwt_decode from "jwt-decode";
import store from "../../store"
import ReactDOM from "react-dom";
import { SidebarData} from "./sidebarData"
import PrivateRoute from "../private-route/PrivateRoute";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  withRouter
} from "react-router-dom";
import TodoList from "../todo/todos-list";
import AddTodo from "../todo/add-todo";
import EditTodo from "../todo/edit-todo";

import NavBar from "./navbar"
import Sidebar from "./sidebar"

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

render() {
    const { user } = this.props.auth;
return (
  <Provider store={store}>
    <Router >
  <div className="dashboard" >
    <NavBar />
    <div className="container main-page"> 
    <div className="row">

    <div className="col-lg-2 col-xm-12 sd">
      <div className="container">
     <Sidebar /> 
     </div>
     </div>
    {/* <div className="sidebar">
                <div>
                <h2 style={{textAlign:"center"}}>Menu</h2>
                </div>
                <ul>
                <li>
                <Link className ="link-calor" to="/dashboard">Home</Link>
                </li>
                <li>
                <Link className ="link-calor" to={`${this.props.match.url}/create`}>Create Todo</Link>{" "}
                </li>
                </ul>
    </div>
    </div> */}
    <div className="col-lg-5 col-xm-12 a-w-m a-i-m">
  <Switch>
 {SidebarData.map((route, index) =>
 <PrivateRoute 
  //exact path={`${this.props.match.url}/create`} Component={AddTodo}
  key={index}
  path={route.path}
  exact={route.exact}
 component={route.main}
  />
  )} 
 <PrivateRoute exact path="/dashboard/edit/:id" component={EditTodo} />
</Switch> 
    </div>
    <div className="col-lg-5 col-xm-12 a-w-m a-i-m">
     <h3 style={{textAlign:"center"}}>Birthday Reminder</h3> 
    </div>
    </div>
    </div>
</div>
</Router>
</Provider>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default withRouter ( connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard));