import firebase from "firebase/app";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyB6R-QqtaJcQqeIZ3hkik-muFYFoGZwY7I",
  authDomain: "test-2d218.firebaseapp.com",
  projectId: "test-2d218",
  storageBucket: "test-2d218.appspot.com",
  messagingSenderId: "919226024454",
  appId: "1:919226024454:web:b3d806379a7c257fe97987",
  measurementId: "G-M6WXGNHNKQ",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
