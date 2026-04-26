import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Firebase configuration provided by user
const firebaseConfig = {
  apiKey: "AIzaSyChppE3sUn13-qOTdVhDoHhR2TWce_-dss",
  authDomain: "kbga-website.firebaseapp.com",
  projectId: "kbga-website",
  storageBucket: "kbga-website.firebasestorage.app",
  messagingSenderId: "241895729813",
  appId: "1:241895729813:web:999761a1aa3b72d828499c",
  measurementId: "G-EJD74JVFLG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

export { db, analytics };
