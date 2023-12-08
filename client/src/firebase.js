// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "reale-estate-f4a23.firebaseapp.com",
  projectId: "reale-estate-f4a23",
  storageBucket: "reale-estate-f4a23.appspot.com",
  messagingSenderId: "743216779542",
  appId: "1:743216779542:web:04d4f472eb45f3e2568037"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);