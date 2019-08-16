

export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //make asyc calls to db, here is wehre you can add it to db before dispatch finishes 
        const firestore = getFirestore(); //reference to our firestore db
        const profile = getState().firebase.profile; //grabs the profile info from state
        const authorId = getState().firebase.auth.uid;
        firestore.collection('projects').add({
            ...project, //spread in the project that we got from state from the createproject.js
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authorId,
            createdAt: new Date()
        }) //this returns a promise
        .then(() => {
            dispatch({ type: 'CREATE_PROJECT', project }); //project: project same thing
        })
        .catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err });
        })
        
    }
};