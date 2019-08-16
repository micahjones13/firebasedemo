//* This is where cloud functions go
//! This will be run on firebase's server!

const functions = require('firebase-functions');
const admin = require('firebase-admin'); //* this allows acces to the admin SDK so we can get things like auth and firestore
admin.initializeApp(functions.config().firebase)

exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase! Yes!");
});

const createNotification = (notification => {
    return admin.firestore().collection('notifications')
    .add(notification)
    .then( doc => {
        console.log('notification added', doc);
    })
})

//whenever a new project is created inside this collection, fire the callback function
//this reacts to a new project being created
exports.projectCreated = functions.firestore
    .document('projects/{projectId}')
    .onCreate(doc => {
        const project = doc.data(); //stores document data
        const notification = {
            content: 'Added a new project',
            user: `${project.authorFirstName} ${project.authorLastName}`,
            time: admin.firestore.FieldValue.serverTimestamp()
        }
    return createNotification(notification);
})

//trigger when a user is created using the auth service
exports.userJoined = functions.auth.user()
.onCreate(user => {
    return admin.firestore().collection('users')
    .doc(user.uid)
    .get()
    .then(doc => {
        const newUser = doc.data();
        const notification = {
            content: 'Joined the party',
            user: `${newUser.firstName} ${newUser.lastName}`,
            time: admin.firestore.FieldValue.serverTimestamp()
        }
    return createNotification(notification);

    })

})

//! To deploy, do  firebase deploy --only functions 
//! Do not do just firebase deploy, as that will deploy ALL of it 
//* when we go to the URL the terminal provids, it shows the response