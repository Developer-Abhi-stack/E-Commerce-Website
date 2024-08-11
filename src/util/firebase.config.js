// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmMlopxkV2SuMaSHq5aJ5_kv-CTqmJ9zs",
  authDomain: "e-commerce-website-256ae.firebaseapp.com",
  projectId: "e-commerce-website-256ae",
  storageBucket: "e-commerce-website-256ae.appspot.com",
  messagingSenderId: "910677601294",
  appId: "1:910677601294:web:b3bd7613d7fcbdf442e05f",
  measurementId: "G-SE72H859WV"
};

// Initialize Firebase
const firebaseAppConfig = initializeApp(firebaseConfig);
export default firebaseAppConfig
