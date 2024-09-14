// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_APP_FIREBASE_API_KEY,
  authDomain: "eventmanagement-65886.firebaseapp.com",
  projectId: "eventmanagement-65886",
  storageBucket: "eventmanagement-65886.appspot.com",
  messagingSenderId: "589108395713",
  appId: "1:589108395713:web:67511e100dcf9d010b5e40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);