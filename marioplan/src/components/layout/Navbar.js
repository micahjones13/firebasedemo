import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks.js';
import SignedOutLinks from './SignedOutLinks.js';
import { connect } from 'react-redux';

const Navbar = (props) => {
  const { auth } = props; //make sure to destructure this
  const links = auth.uid ? <SignedInLinks /> : <SignedOutLinks /> //auth.uid only exists if user is signed in. If it does exist, store the <signedinlinks /> component in links. If it doesn't, store signedoutlinks
    return (
      <nav className = 'nav-wrapper grey darken-3'> 
        <div className = 'container'>
            <Link to = '/' className = 'brand-logo'>MarioPlan</Link>
            { links }
        </div>
      </nav>
    )
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(Navbar);