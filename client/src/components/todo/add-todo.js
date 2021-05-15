import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from "react-router-dom";

 class CreateTodo extends Component {

    constructor(props) {
        super(props);

        this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
        this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
           title: '',
           titleError:"",
           responsible: '',
           responsibleError:""
           //complete: false
        }
    }

    onChangeTodoDescription(e) {
        this.setState({
            title: e.target.value
        });
    }

    onChangeTodoResponsible(e) {
        this.setState({
            responsible: e.target.value
        });
    }
    validate = () => {
        let isError = false;
        const errors = {
         titleError: "",
         responsibleError: ""
        };
    
        if (!(this.state.title)) {
          isError = true;
          errors.emailError = "Please enter a  description";
        }
        if (!(this.state.responsible)) {
            isError = true;
            errors.emailError = "Please enter a responsible";
          }
    
        this.setState({
          ...this.state,
          ...errors
        });
    
        return isError;
      };

    onSubmit=async(e)=> {
        e.preventDefault();
        this.validate();
        
        console.log(`Form submitted:`);
        console.log(`Todo Description: ${this.state.title}`);
        console.log(`Todo Responsible: ${this.state.responsible}`);

        const newTodo = {
            title: this.state.title,
            responsible: this.state.responsible,
            //complete: this.state.complete
        };
        await axios.post('api/todo/todos', newTodo)
            .then(res => console.log(res.data));
        
        this.setState({
            title: '',
            responsible: '',
            //complete: false
        })
        this.props.history.push("/dashboard");
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Create New Todo</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Description: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.title}
                                placeholder="Description"
                                onChange={this.onChangeTodoDescription}
                                ref="title"
                                 error={this.state.titleError}
                                />
                                <span style={{color: "red"}}>{this.state.titleError}</span>
                    </div>
                    <div className="form-group">
                        <label>Responsible: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.responsible}
                                placeholder="Responsible"
                                onChange={this.onChangeTodoResponsible}
                                ref="responsible"
                                 error={this.state.responsibleError}
                                />
                                 <span style={{color: "red"}}>{this.state.titleError}</span>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create Todo" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}

export default withRouter (CreateTodo)