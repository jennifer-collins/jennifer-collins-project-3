// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA5cJBWcyGaquZaOdVr23EZx9EBc857em4",
    authDomain: "daily-affirmations-29e06.firebaseapp.com",
    projectId: "daily-affirmations-29e06",
    storageBucket: "daily-affirmations-29e06.appspot.com",
    messagingSenderId: "921223082355",
    appId: "1:921223082355:web:cdcb7d694eccb63f701506"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;