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
  useRouteMatch
} from "react-router-dom";

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
  <div className="dashboard" >
    <NavBar />
    <div className="container"> 
    <div className="row">

    <div className="col-lg-3 col-xm-12">
    <Sidebar />
    </div>
    <div className="col-lg-4 col-xm-12">
    <Switch>
 {SidebarData.map((route, index) =>
 <PrivateRoute 
  key={index}
  path={route.path}
  exact={route.exact}
 component={route.main} />
 )} 
</Switch> 
    </div>
    <div className="col-lg-3 col-xm-12">
      Birthday Reminder
    </div>
    </div>
    </div>
</div>
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
export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);