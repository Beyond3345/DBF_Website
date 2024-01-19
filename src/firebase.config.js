// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAOP6jyIrHoNcRrtC-8Pc10D9KFRFURRZo",
  authDomain: "dbfsite-455d5.firebaseapp.com",
  projectId: "dbfsite-455d5",
  storageBucket: "dbfsite-455d5.appspot.com",
  messagingSenderId: "69353355988",
  appId: "1:69353355988:web:83f5d74986e7e0c9d1d941",
  measurementId: "G-P7HBSSV2WR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();