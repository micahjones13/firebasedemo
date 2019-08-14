import React from 'react';
import { NavLink } from 'react-router-dom';
import { signOut } from '../../store/actions/authActions.js';
import { connect } from 'react-redux';

const SignedInLinks = (props) => {
    return (
     <ul className = 'right'>
        <li><NavLink to = '/create'>New Project</NavLink></li>
        <li><a onClick = {props.signOut}>Log Out</a></li>
        <li><NavLink to = '/' className = 'btn btn-floating pink lighten-1'>MJ</NavLink></li>
     </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks); //remember null since no statetoprops here