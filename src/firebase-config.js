// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCruXgD9QHVOUvKtNZMhdiQHhKKj6MF2HQ",
  authDomain: "attendance-system-76210.firebaseapp.com",
  projectId: "attendance-system-76210",
  storageBucket: "attendance-system-76210.firebasestorage.app",
  messagingSenderId: "2419512997",
  appId: "1:2419512997:web:f943dce560cf6ec5bd9f4c",
  measurementId: "G-3R4SJBYW97"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);