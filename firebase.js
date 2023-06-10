// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCfBRKDMKO7s441hx39W8XT1nzFGzELUG4",
  authDomain: "shopping-8cc1f.firebaseapp.com",
  // databaseURL: "https://shopping-8cc1f-default-rtdb.firebaseio.com",
  projectId: "shopping-8cc1f",
  storageBucket: "shopping-8cc1f.appspot.com",
  messagingSenderId: "691884011550",
  appId: "1:691884011550:web:9275e2ee13b5d642d3fe0f",
  measurementId: "G-9WEYVGZ9KF"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore();
const storage = getStorage();

export { app, db, storage };