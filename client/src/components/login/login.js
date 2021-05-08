import React, { Component } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserLock } from "@fortawesome/free-solid-svg-icons";
import { Link }  from 'react-router-dom'
//import Nav from './navBar';


export default class Login extends Component {
    render() {
        return (
            <form>
                <div className="icon"><FontAwesomeIcon icon={faUserLock} size="3x"/>  </div>
                <h3 style={{marginTop:'20px'}}>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgot-password text-right">
                Don'have an account?<Link to={"/signup"} >Sign up</Link>
                </p>
            </form>
        );
    }
}
