import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDmj0oZLlYe5BOHRo9JE__6sWta9FpYjAs",
    authDomain: "slack-clone-a6dd5.firebaseapp.com",
    databaseURL: "https://slack-clone-a6dd5.firebaseio.com",
    projectId: "slack-clone-a6dd5",
    storageBucket: "slack-clone-a6dd5.appspot.com",
    messagingSenderId: "404375281976",
    appId: "1:404375281976:web:22400ff55f2c9dc85961cd",
    measurementId: "G-0EF63TFC0X"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig); 

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider};
  export default db;