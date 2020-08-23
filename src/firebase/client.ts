import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBJTSJEntNqU8rGurHMkY-oONZHT5kTLkM",
  authDomain: "purcupine-shop.firebaseapp.com",
  databaseURL: "https://purcupine-shop.firebaseio.com",
  projectId: "purcupine-shop",
  storageBucket: "purcupine-shop.appspot.com",
  messagingSenderId: "73832685024",
  appId: "1:73832685024:web:6926b5403f519cc6b15f85",
  measurementId: "G-9W6FEFJVVT"
};

!firebase.apps.length && firebase.initializeApp(firebaseConfig);

export const loginWithGoogle = () => {
  const authProvider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(authProvider);
};

export const getCurrentUser = (setUser) => {
  return firebase.auth().onAuthStateChanged(setUser)
};
