import React, { Component } from 'react';
import axios from 'axios';

export default class EditTodo extends Component {

    constructor(props) {
        super(props);

        this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
        this.onChangeTodoResponsible = this.onChangeTodoResponsible.bind(this);
        this.onChangeTodoCompleted = this.onChangeTodoCompleted.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.deleteTodo=this.deleteTodo.bind(this);

        this.state = {
            title: '',
            responsible: '',
            complete: false
        }
    }
   
     componentDidMount() {
        //  if (this.props.match && this.props.computeMatch.params.id) {
         //const postid= this.props.computeMatch.params.id
         console.log(this.props);
         axios.get('api/todo/todos/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    title: response.data.title,
                    responsible: response.data.responsible,
                    complete: response.data.complete
                })   
                console.log(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
        //this.getData();
    }

    
    deleteTodo = async(e) =>{
        e.preventDefault();
        await axios
          .delete('/api/todo/todos/'+this.props.match.params.id)
          .then(res => console.log(res.data))
          this.props.history.push('/dashboard');
      };

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

    onChangeTodoCompleted(e) {
        this.setState({
            complete: !this.state.complete
        });
    }

    onSubmit=async(e) =>{
        e.preventDefault();
        const obj = {
            title: this.state.title,
            responsible: this.state.responsible,
            complete: this.state.complete
        };
        console.log(obj);
        await axios.post('http://localhost:3001/api/todo/todos/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));
        
        this.props.history.push('/dashboard');
    }

    render() {
        return (
            <div>
                <h3 align="center">Update Todo</h3>
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
                    <div className="form-check">
                        <input  className="form-check-input"
                                id="completedCheckbox"
                                type="checkbox"
                                name="completedCheckbox"
                                onChange={this.onChangeTodoCompleted}
                                checked={this.state.complete}
                                value={this.state.complete}
                                />
                        <label className="form-check-label" htmlFor="completedCheckbox">
                            Completed
                        </label>                        
                    </div>

                    <br />

                    <div className="form-group">
                        <input type="submit" value="Update Todo" className="btn btn-primary" />
                        <input type="button" style={{marginLeft:'20px'}} className="btn btn-danger" value="Delete Todo" onClick={this.deleteTodo}/>
                    </div>
                </form>
            </div>
        )
    }
}