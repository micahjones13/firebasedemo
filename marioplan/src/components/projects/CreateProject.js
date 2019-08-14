import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createProject } from '../../store/actions/projectActions.js';
import { Redirect } from 'react-router-dom';

class CreateProject extends Component {
    state = {
      title: '',
      content: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state);
        this.props.createProject(this.state); // will pass state into createProject and dispatch it, run the function in projectActions with the data in state
    }
    render() {
        const { auth } = this.props;
        if(!auth.uid) return <Redirect to = '/signin' />
        return (
            <div className = 'container'>
                <form onSubmit = {this.handleSubmit} className = 'white'>
                    <h5 className = 'grey-text text-darken-3'>Create Project</h5>
                    <div className = 'input-field'>
                        <label htmlFor = 'title'>Title</label>
                        <input type = 'text' id = 'title' onChange = {this.handleChange} />
                    </div>
                    <div className = 'input-field'>
                    <label htmlFor = 'content'>Project Content</label>
                    <textarea  id = 'content'  className = 'materialize-textarea' onChange = {this.handleChange} ></textarea>
                </div>
                <div className = 'input-field'>
                    <button className = 'btn pink lighten-1 z-depth-0'>Create</button>
                </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth //mapping the auth from state to props here
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        createProject: (project) => dispatch(createProject(project)) //add createProject to props. props.createProject takes in a project param and dispatches the createProject(project) action
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject) //the first param of connect should be mapStateToProps, since we don't have that, we can use null. But must have that first param filled in
