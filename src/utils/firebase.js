// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInAnonymously } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCMwJFRUryf63yZSt1iNZJskt_oa_WNEgY",
    authDomain: "netflixgpt-3440f.firebaseapp.com",
    projectId: "netflixgpt-3440f",
    storageBucket: "netflixgpt-3440f.appspot.com",
    messagingSenderId: "658318663593",
    appId: "1:658318663593:web:992bb66756c58b89fa6eb8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();