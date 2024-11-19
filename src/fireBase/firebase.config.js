// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDANYsMQJ-0SxvHVeeFCVnA9OQzx2fflh4",
  authDomain: "lingo-bingo-b40f0.firebaseapp.com",
  projectId: "lingo-bingo-b40f0",
  storageBucket: "lingo-bingo-b40f0.firebasestorage.app",
  messagingSenderId: "646000675341",
  appId: "1:646000675341:web:ddf529679d12f882aae344"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;