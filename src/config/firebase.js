import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBLz9jENwqRkXXVAovVBLlNsmeCUU-Bpk0",
  authDomain: "gptest-93b49.firebaseapp.com",
  projectId: "gptest-93b49",
  storageBucket: "gptest-93b49.firebasestorage.app",
  messagingSenderId: "364000016335",
  appId: "1:364000016335:web:ec90b6209a3b9a41a904ba",
  measurementId: "G-E5PBSTSJSS"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvide = new GoogleAuthProvider()
export const db = getFirestore(app)