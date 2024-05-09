// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDye0V1Yf7WyDmLIjQWRkHxIOBc6PKC6Ww",
  authDomain: "jobquest-73ad6.firebaseapp.com",
  projectId: "jobquest-73ad6",
  storageBucket: "jobquest-73ad6.appspot.com",
  messagingSenderId: "684548428084",
  appId: "1:684548428084:web:6b6db97364c82119ba1561"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;