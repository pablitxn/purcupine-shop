import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDlhsdUHra-ZavqHqbY7a8FJ2y8FUD0BCo",
  authDomain: "operating-codex-272519.firebaseapp.com",
  databaseURL: "https://operating-codex-272519.firebaseio.com",
  projectId: "operating-codex-272519",
  storageBucket: "operating-codex-272519.appspot.com",
  messagingSenderId: "868153774957",
  appId: "1:868153774957:web:10c7902f312bcaa9a94064",
  measurementId: "G-WN15215P2Y"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account ' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;