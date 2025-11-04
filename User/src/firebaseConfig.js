// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDOMP3OtQ-ATZZkbyVL9L_sPopWsduY7XE",
  authDomain: "resort-45125.firebaseapp.com",
  projectId: "resort-45125",
  storageBucket: "resort-45125.firebasestorage.app",
  messagingSenderId: "1029269004793",
  appId: "1:1029269004793:web:8f03f6b5973c80498bdd28",
  measurementId: "G-429H2NGMLG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);