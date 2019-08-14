import React from 'react';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase';
import { compose } from 'redux';
import { Redirect } from 'react-router-dom';


const ProjectDetails = (props) => {
    const { project, auth } = props; //this makes it so you don't have to do props.project.title ect 
    if (!auth.uid) return <Redirect to ='/signin' /> //if they aren't logged in, redirect them to sign in page

    if (project) {
        return (
            <div className = 'container section project-details'>
                <div className = 'card z-depth-0'>
                    <div className = 'card-content'>
                        <span className = 'card-title'>{ project.title }</span>
                        <p>{project.content}</p>
                    </div>
                    <div className = 'card-action grey lighten-4 grey-text'>
                        <div>Posted by {project.authorFirstName} {project.authorLastName}</div>
                        <div>2nd Sept, 2am</div>
                    </div>
                </div>
            </div>
        )
    } else {
        return(
            <div className = 'container center'>
                <p>Loading Project...</p>
            </div>
        )
    }

}

const mapStateToProps = (state, ownProps) => {
    const id = ownProps.match.params.id; //stores the id of the specific project
    const projects = state.firestore.data.projects; //stores the list of projects from firestore insot const projects
    const project = projects ? projects[id] : null //stores the result of proejcts with the id of stored id into const project
    return {
        project: project, 
        auth: state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects' }
    ])
)(ProjectDetails)




