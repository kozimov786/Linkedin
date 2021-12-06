import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'
import { getAuth } from 'firebase/auth'
import { GoogleAuthProvider } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCH5D-a3z0v4diC_5tUgJqU9jiWYGVlYRI",
  authDomain: "linkedin-77b8f.firebaseapp.com",
  projectId: "linkedin-77b8f",
  storageBucket: "linkedin-77b8f.appspot.com",
  messagingSenderId: "838820402853",
  appId: "1:838820402853:web:7a4aa83c0d2883f1b1df4c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth()
const provider = new GoogleAuthProvider();
const storage = getStorage(app);

export { auth, provider, storage }

export default db
