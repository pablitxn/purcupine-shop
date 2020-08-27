import * as firebase from "firebase";

const firebaseConfig = {
  projectId: "purcupine-shop",
  appId: "1:73832685024:web:6926b5403f519cc6b15f85",
  databaseURL: "https://purcupine-shop.firebaseio.com",
  storageBucket: "purcupine-shop.appspot.com",
  locationId: "southamerica-east1",
  apiKey: "AIzaSyBJTSJEntNqU8rGurHMkY-oONZHT5kTLkM",
  authDomain: "purcupine-shop.firebaseapp.com",
  messagingSenderId: "73832685024",
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
