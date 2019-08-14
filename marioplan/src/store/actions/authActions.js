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