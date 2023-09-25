import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
} from "firebase/auth";

import { collection, getDocs, setDoc, doc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCTKIGZD8eppL5U_YTSyI-GlL-sA2XbtxQ",
  authDomain: "authentication-cf976.firebaseapp.com",
  projectId: "authentication-cf976",
  storageBucket: "authentication-cf976.appspot.com",
  messagingSenderId: "135499499938",
  appId: "1:135499499938:web:c29fc8b2cdd340acadcafb",
  measurementId: "G-VHYN3934MF",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();
export {
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  collection,
  getDocs,
  setDoc,
  doc,
  googleProvider,
  signInWithRedirect,
  getRedirectResult,
};
export default db;
