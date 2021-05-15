import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from "react-router-dom";
import { faCommentsDollar } from '@fortawesome/free-solid-svg-icons';

 class AddMember extends Component {

    constructor(props) {
        super(props);

        this.onChangeMemberFisrtName = this.onChangeMemberFisrtName.bind(this);
        this.onChangeMemberLastName = this.onChangeMemberLastName.bind(this);
        this.onChangeMemberDateOfBirth = this.onChangeMemberDateOfBirth.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
           firstName: '',
           firstNameError:"",
           lastName: '',
           firstNameError:"",
           dateOfBirth:"",
           dateOfBirtError:"",
         
           //complete: false
        }
    }

    onChangeMemberFisrtName(e) {
        this.setState({
            firstName: e.target.value
        });
    }

    onChangeMemberLastName(e) {
        this.setState({
            lastName: e.target.value
        });
    }
    onChangeMemberDateOfBirth(e) {
        this.setState({
          dateOfBirth: e.target.value
        });
    }
    validate = () => {
        let isError = false;
        const errors = {
         firstNameError: "",
         lastNameError: "",
         dateOfBirtError:""
        };
    
        if (!(this.state.firstName)) {
          isError = true;
          errors.firstName = "First is required";
        }
        if (!(this.state.lastName)) {
            isError = true;
            errors.lastName = "";
          }
          if (!(this.state.dateOfBirth)) {
            isError = true;
            errors.dateOfBirtError = "";
          }
          
    
        this.setState({
          ...this.state,
          ...errors
        });
    
        return isError;
      };

    onSubmit=async(e)=> {
        e.preventDefault();
        
         console.log(`Form submitted:`);
        console.log(`Todo Description: ${this.state.firstName}`);
        console.log(`Todo Responsible: ${this.state.lastName}`);
        console.log(`Todo Responsible: ${this.state.dateOfBirth}`);

        const newMember = {
            firstName: this.state.firstName,
           lastName: this.state.lastName,
           dateOfBirth:this.state.dateOfBirth
            //complete: this.state.complete
        };
        console.log(newMember);
        await axios.post('api/members/members', newMember)
            .then(res => console.log(res.data));
            console.log("test")
        
        this.setState({
            firstName: '',
            lastName: '',
            dateOfBirth:''

            //complete: false
        })
        this.props.history.push("/dashboard");
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Add a Family member</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>First name: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.firstName}
                                placeholder="First name"
                                onChange={this.onChangeMemberFisrtName}
                                ref="firstName"
                                 error={this.state.titleError}
                                />
                                <span style={{color: "red"}}>{this.state.firstNameError}</span>
                    </div>
                    <div className="form-group">
                        <label>Last name: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.lastName}
                                placeholder="Last name"
                                onChange={this.onChangeMemberLastName}
                                ref="lastName"
                                 error={this.state.responsibleError}
                                />
                                 <span style={{color: "red"}}>{this.state.lastNameError}</span>
                    </div>
                    <div className="form-group">
                        <label>Date of birth (YYYY-MM-DD): </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.dateOfBirth}
                                placeholder="Date of birth"
                                onChange={this.onChangeMemberDateOfBirth}
                                ref="dateOfBirth"
                                 error={this.state.dateOfBirtError}
                                />
                                 <span style={{color: "red"}}>{this.state.dateOfBirtError}</span>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Add" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter (AddMember)