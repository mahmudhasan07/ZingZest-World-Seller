// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCJh9TvVew8SflEI2luNKx3l9HB-xKMJE",
  authDomain: "seller-zingzest.firebaseapp.com",
  projectId: "seller-zingzest",
  storageBucket: "seller-zingzest.appspot.com",
  messagingSenderId: "11078789589",
  appId: "1:11078789589:web:2f322a9e3a275ec819f55c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;