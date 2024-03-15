// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaOS-cJXfUF-QwB8dOjxJgyTWqbEFjLQ0",
  authDomain: "mid-hackaton-js.firebaseapp.com",
  databaseURL: "https://mid-hackaton-js-default-rtdb.firebaseio.com",
  projectId: "mid-hackaton-js",
  storageBucket: "mid-hackaton-js.appspot.com",
  messagingSenderId: "105802030788",
  appId: "1:105802030788:web:24334f9ec03e91094ab391"
};
// Initialize Firebase
const firebase_app = initializeApp(firebaseConfig);
const auth = getAuth(firebase_app);
const database = getDatabase(firebase_app);
export { firebase_app, auth, database }



