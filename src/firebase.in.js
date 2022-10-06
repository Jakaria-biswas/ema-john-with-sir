// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC77KIXqWZir8tSA960LXgiPnjziSR0bIY",
  authDomain: "ema-john-with-sir.firebaseapp.com",
  projectId: "ema-john-with-sir",
  storageBucket: "ema-john-with-sir.appspot.com",
  messagingSenderId: "211967824266",
  appId: "1:211967824266:web:ca70cf4c9cff5623a0f873"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth  = getAuth(app)
export default auth;