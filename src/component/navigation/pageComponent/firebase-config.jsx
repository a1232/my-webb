// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBT9Vp_Xyb-6p3JXjsva8g9CmgzEL_kmUI",
  authDomain: "web-app-1b743.firebaseapp.com",
  projectId: "web-app-1b743",
  storageBucket: "web-app-1b743.appspot.com",
  messagingSenderId: "475035485022",
  appId: "1:475035485022:web:7f115ea5c9bccc4e0ac5cf",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
