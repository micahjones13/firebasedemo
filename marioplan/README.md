This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Notes

## Secruity Rules for Firebase
    
    rules_version = '2';
    service cloud.firestore {  <-- Scopes these rules for the firebase db only
        match /databases/{database}/documents {   <-- rules should match any firestore db in our project
        match /{document=**} {  <-- match any doc in the database
        allow read, write; <-- what to allow access to 
    }
  }
}
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /projects/{project} {
      allow read, write: if request.auth.uid != null
    }
    match /users/{userId} {
    	allow create
      allow read: if request.auth.uid != null
      allow write: if request.auth.uid == userId
    }
  }
}

## Server Side Code (Cloud Functions)

 -To Get Started: 
  - $ npm install -g firebase-tools 
  - firebase login (might need to do firebase login --interactive)
  - browser should open, log in
  - firebase init -- will ask if you want to proceed, before hitting y, make sure you're in right dir
  - Should probably say yes to install all dependecies 
  - What do you want to use as your public directory? -- NN had us name this dist
  - Configure as single page app? Yes 
  - Done (this creates dist folder, and functions folder)

## Deploying to Firebase
 - npm run build (this will but the react app inside a build folder )
 - move build into dist 
 - run firebase deploy
