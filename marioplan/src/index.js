import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer.js';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase, authIsReady } from 'react-redux-firebase'; //allows access to firebase/firestore api
import fbConfig from './config/fbConfig.js';


// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //using firefox redux devtools
const store = createStore(rootReducer, 
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
        reduxFirestore(fbConfig), //pass in the firebase config
        reactReduxFirebase(fbConfig, {attatchAuthIsReady: true}) //allows access to authisready
        )
    ); 

authIsReady(store).then(() => {
        ReactDOM.render(<Provider store = {store} ><App /></Provider>, document.getElementById('root'));
    })

    //this waits on auth stuff before rending everything, so you don't get a flicker of icons on nav-bar
