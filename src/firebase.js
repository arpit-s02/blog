// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxUIp9Y4aWRboqdX6PDia1JdjHSrZjS2A",
  authDomain: "blog-d9882.firebaseapp.com",
  projectId: "blog-d9882",
  storageBucket: "blog-d9882.appspot.com",
  messagingSenderId: "667481174771",
  appId: "1:667481174771:web:b52cb215a2711a7eddfd86"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);