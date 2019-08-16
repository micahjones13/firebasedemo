import authReducer from './authReducer.js';
import projectReducer from './projectReducer.js';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore'; //premade reducer made to sync firestore data with state, already passed in fbConfig in index.js
import { firebaseReducer } from 'react-redux-firebase'; 

const rootReducer = combineReducers({
    auth: authReducer,
    project: projectReducer,
    firestore: firestoreReducer, //will auto sync this property on the db 
    firebase: firebaseReducer //sync auth status on firebase with redux on state has properties isEmpty: true, isLoaded: ture, authError: null
})

export default rootReducer;