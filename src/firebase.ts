// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAH8l7jyx0dHCG9acBWvdqHGz_SBv8lrLo",
  authDomain: "exercise-prescription-46a7d.firebaseapp.com",
  projectId: "exercise-prescription-46a7d",
  storageBucket: "exercise-prescription-46a7d.firebasestorage.app",
  messagingSenderId: "702335192177",
  appId: "1:702335192177:web:5177af3d06114f85bbdfd0",
  measurementId: "G-Q6CC98CC0P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
