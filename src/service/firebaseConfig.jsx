// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5XfGxLHjwyvueLDAtUGIuMpJavbplTQQ",
  authDomain: "ai-trip-planner-d365d.firebaseapp.com",
  projectId: "ai-trip-planner-d365d",
  storageBucket: "ai-trip-planner-d365d.firebasestorage.app",
  messagingSenderId: "983823551565",
  appId: "1:983823551565:web:9579bb1a08ac4b8a92e004",
  measurementId: "G-ZEYZGKC481",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
