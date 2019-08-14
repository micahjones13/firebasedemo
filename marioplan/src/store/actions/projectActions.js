

export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //make asyc calls to db, here is wehre you can add it to db before dispatch finishes 
        const firestore = getFirestore(); //reference to our firestore db
        firestore.collection('projects').add({
            ...project, //spread in the project that we got from state from the createproject.js
            authorFirstName:'Micah',
            authorLastName: 'Jones',
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