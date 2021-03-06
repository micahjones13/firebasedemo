//action creator for signing in

export const signIn = (creds) => {
    return(dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        //firebase auth service to sign in with email and pw
        firebase.auth().signInWithEmailAndPassword(
            creds.email,
            creds.password
        )
        .then(() => {
            dispatch ({ type: 'LOGIN_SUCCESS' });
        })
        .catch((err) => {
            dispatch ({ type: 'LOGIN_ERROR', err });
        })
    }
}

//action creator for sign out
export const signOut = () => {
    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();

        firebase.auth().signOut().then(() => {
            dispatch ({ type: 'SIGNOUT_SUCCESS' });
        });

    }
}

//action creator for sign up
export const signUp = (newUser) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
        )
        .then(res => {
            return firestore.collection('users').doc(res.user.uid).set({
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                initials: newUser.firstName[0] + newUser.lastName[0]
            }); //creating a new doc with the id generated by firebase
        }).then(() => {
            dispatch({ type: 'SIGNUP_SUCCESS' });
        })
        .catch( err => {
            dispatch({ type: 'SIGNUP-ERROR' });
        })
    }
}