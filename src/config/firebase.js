import Firebase from "firebase/compat/app";
import {getAuth, GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import "firebase/compat/firestore";
import { useState } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyCy9fOVma9LcQIrc6Hel3z9OLkoISt2NAA",
  authDomain: "flip-a71d8.firebaseapp.com",
  projectId: "flip-a71d8",
  storageBucket: "flip-a71d8.appspot.com",
  messagingSenderId: "652620282069",
  appId: "1:652620282069:web:f6f4343b8346c182a94a5c",
  measurementId: "G-7PVG03JTK6"
};

const firebase = Firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export { firebase, db }