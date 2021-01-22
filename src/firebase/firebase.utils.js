import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyAZ_tuzHptE6zjGSuJ8ZAiTgdqzp7miNHk",
    authDomain: "eshop-db-4d571.firebaseapp.com",
    projectId: "eshop-db-4d571",
    storageBucket: "eshop-db-4d571.appspot.com",
    messagingSenderId: "372373878977",
    appId: "1:372373878977:web:55d88cc9f2d9bc7f83fc40",
    measurementId: "G-D1S6T3QVC6"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;


