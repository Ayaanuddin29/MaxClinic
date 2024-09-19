// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "clinic-bb118.firebaseapp.com",
  projectId: "clinic-bb118",
  storageBucket: "clinic-bb118.appspot.com",
  messagingSenderId: "397170359029",
  appId: "1:397170359029:web:423d8ac1e402f2ccfee3bc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);