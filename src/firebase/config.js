import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCGvDZPSf2eodkVG8SUXorPwAUR62k7wXQ",
    authDomain: "mymoney-f63cf.firebaseapp.com",
    projectId: "mymoney-f63cf",
    storageBucket: "mymoney-f63cf.appspot.com",
    messagingSenderId: "298630537300",
    appId: "1:298630537300:web:4fac49bb35828021e04dc1"
  };

  // init firebase
  firebase.initializeApp(firebaseConfig);

  // init service
  const projectFirestore = firebase.firestore();
  const projectAuth = firebase.auth();

  // timestamp
  const timestamp = firebase.firestore.Timestamp

  export { projectFirestore, projectAuth, timestamp }