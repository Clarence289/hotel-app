
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


import {getAuth} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
   apiKey: "AIzaSyBX1KQn6_r7rEb-PLjpc_SdjyEMXJvFebU",
  authDomain: "hotel-new-67772.firebaseapp.com",
  projectId: "hotel-new-67772",
  storageBucket: "hotel-new-67772.appspot.com",
  messagingSenderId: "395692087950",
  appId: "1:395692087950:web:6654b932e5279e6652c7df"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const db = getFirestore(app);

export {auth , db}