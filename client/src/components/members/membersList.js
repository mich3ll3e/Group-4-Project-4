import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { withRouter } from "react-router-dom";
import Moment from "moment";

 class MembersList extends Component {

    constructor(props) {
        super(props);
        this.state = {members: []};
    }

    componentDidMount() {
        axios.get('/api/members/members')
            .then(response => {
                this.setState({ members: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    // todoList() {
    //     return this.state.members.map(function(currentTodo, i){
    // //         return <Todo todo={currentTodo} key={i} />;
    // {this.state.members.map(function(currentTodo, i){
    // }

    //     })
    // }

    render() {
        return (
            <div>
             {
                 this.state.members.map((member, index)=>(
                 <h5>{member.firstName} --- {Moment(member.dateOfBirth).format("DD-MM-YYYY")}</h5>
        
                 )
                 )}
            </div>
        )
    }
}
export default withRouter (MembersList)