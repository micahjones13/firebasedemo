import React from 'react';
import Notifications from './Notifications.js';
import ProjectList from '../projects/ProjectList.js';
import { connect } from 'react-redux';
import { firestoreConnect } from 'react-redux-firebase'; //HOC that tells firestore which collection you want to connect to
import { compose } from 'redux'; //used to combine 2 HOC's
import { Redirect } from 'react-router-dom';

class Dashboard extends React.Component{
    render(){
        // console.log(this.props);
        const { projects, auth } = this.props;
        if (!auth.uid) return <Redirect to ='/signin' /> //if they aren't logged in, redirect them to sign in page
        return(
            <div className = 'dashboard container'>
                <div className = 'row'>
                    <div className = 'col s12 m6'>
                    <ProjectList projects = {projects} />
                        <div className = 'col s12 m5 offset-m1'>
                            <Notifications />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    console.log(state);
    return {
        projects: state.firestore.ordered.projects, // loads in projects data from firestore db
        auth: state.firebase.auth 
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'projects' } //ok, when this compoonent is active the collection i want to listen to is the project collection. if the project collection changes, this compononet will hear about that and update with current info
    ])
)(Dashboard);

