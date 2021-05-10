import React ,{Component} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import { ReactReduxContext } from 'react-redux';
import { Link} from "react-router-dom";
import { logoutUser } from "../../actions/authActions";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import "./styles.css";
import "../../App.css"

class NavBar extends Component { 
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
      };
      render(){
      return(
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
  <div className="container">
    <a className="navbar-brand" href="#">Family App </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <FontAwesomeIcon icon={faBars} style={{color:"#fff"}}/>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item active">
          {/* <Link smooth={true} to="home" className="nav-link" aria-current="page" href="#">Logout</Link> */}
          <button
              style={{
                width: "150px",
                borderRadius: "3px",
                letterSpacing: "1.5px",
                marginTop: "1rem",
                color:"white"
              }}
              onClick={this.onLogoutClick}
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >Logout</button>
        </li>
      </ul>
    </div>
  </div>
</nav>
  );
}
}

NavBar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
  };
  const mapStateToProps = state => ({
    auth: state.auth
  });
  export default connect(
    mapStateToProps,
    { logoutUser }
  )(NavBar);