// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "md-app-react.firebaseapp.com",
  projectId: "md-app-react",
  storageBucket: "md-app-react.appspot.com",
  messagingSenderId: "450179331384",
  appId: "1:450179331384:web:757b28bd5eaa80fec43dcd",
});

export const db = getFirestore();
