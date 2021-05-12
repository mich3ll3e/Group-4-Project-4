import React, { Component } from 'react';
import axios from 'axios';
export default class CreateTodo extends Component {

    constructor(props) {
        super(props);

        this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
        this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
           title: '',
           responsible: '',
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


    onSubmit=async(e)=> {
        e.preventDefault();
        
        console.log(`Form submitted:`);
        console.log(`Todo Description: ${this.state.title}`);
        console.log(`Todo Responsible: ${this.state.responsible}`);

        const newTodo = {
            title: this.state.title,
            responsible: this.state.responsible,
            //complete: this.state.complete
        };
        await axios.post('http://localhost:3001/api/todo/todos', newTodo)
            .then(res => console.log(res.data));
        
        this.setState({
            title: '',
            responsible: '',
            //complete: false
        })
        this.props.history.push('/dashboard');
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
                                onChange={this.onChangeTodoDescription}
                                />
                    </div>
                    <div className="form-group">
                        <label>Responsible: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.responsible}
                                onChange={this.onChangeTodoResponsible}
                                />
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create Todo" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}