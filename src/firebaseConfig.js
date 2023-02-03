import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyAxUIp9Y4aWRboqdX6PDia1JdjHSrZjS2A",
  authDomain: "blog-d9882.firebaseapp.com",
  projectId: "blog-d9882",
  storageBucket: "blog-d9882.appspot.com",
  messagingSenderId: "667481174771",
  appId: "1:667481174771:web:b52cb215a2711a7eddfd86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
