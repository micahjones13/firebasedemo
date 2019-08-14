import firebase from 'firebase/app'; //basic features 
import 'firebase/firestore'
import 'firebase/auth'


  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAD6yJm4D_ZpHiRuJpT3rh20Q8aqMl6LBU",
    authDomain: "firstfirestoreproject-57f73.firebaseapp.com",
    databaseURL: "https://firstfirestoreproject-57f73.firebaseio.com",
    projectId: "firstfirestoreproject-57f73",
    storageBucket: "",
    messagingSenderId: "487291895227",
    appId: "1:487291895227:web:0d5139773b1c879a"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true }); //timestamps default to true now, but you need at least one arg for this to compile 

  export default firebase;
