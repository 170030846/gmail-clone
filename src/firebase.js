import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD0uCbwDyM1bkL-NfI5794lXmAOkUBfHrU",
  authDomain: "clone-4e427.firebaseapp.com",
  projectId: "clone-4e427",
  storageBucket: "clone-4e427.appspot.com",
  messagingSenderId: "873904394902",
  appId: "1:873904394902:web:568c3c5e4b8a1669f768b7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
